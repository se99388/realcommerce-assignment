import { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { TokenContext } from '../context';
import { getToken } from '../service/api';
import { ContainerForm, Row, ColInput, ColLabel, Button, Input, Label, ErrorDiv } from './style';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [submitError, setSubmitError] = useState('');
    const [errUsername, setErrUsername] = useState('');
    const [errPassword, setErrPassword] = useState('');
    const { setToken } = useContext(TokenContext);
    const history = useHistory();

    const setValues = (func, value) => {
        func(value);
        submitError && setSubmitError('');
    }

    const validate = () => {
        if (username.length < 3) {
            setErrUsername('Username should be at least 3 characters');
            return false;
        }

        if (password.length < 6) {
            setErrPassword('Password should be at least 6 characters');
            return false;
        }
        return true;
    }

    const initialErr = () => {
        setErrPassword('');
        setErrUsername('');
    }
    const submit = async (e) => {
        e.preventDefault();
        try {
            const isValid = validate();
            if (!isValid) {
                return;
            }
            initialErr();
            const res = await getToken({ username, password });
            const { token } = res.data;
            console.log(token);
            setToken(token);
            history.push('/users');
        } catch (e) {
            console.log(e.message);
            setSubmitError(e.message);
        }
    }
    return (
        <ContainerForm>
            <form>
                <Row>
                <ColLabel>
                    <Label htmlFor='username'>Username: </Label>
                    </ColLabel>
                    <ColInput>
                    <Input
                        type='text'
                        id='username'
                        value={username}
                        onChange={(e) => setValues(setUsername, e.target.value)}
                    />
                    <ErrorDiv>{errUsername}</ErrorDiv>
                    </ColInput>
                </Row>
                <Row>
                    <ColLabel>
                        <Label htmlFor='password'>Password: </Label>
                    </ColLabel>
                    <ColInput>
                        <Input
                            type='password'
                            id='password'
                            value={password}
                            onChange={(e) => setValues(setPassword, e.target.value)}
                        />
                        <ErrorDiv>{errPassword}</ErrorDiv>
                    </ColInput>
                </Row>
                <Row>
                    <Button onClick={submit}>Submit</Button>
                </Row>
                {submitError && <ErrorDiv>{submitError}</ErrorDiv>}
            </form>

        </ContainerForm>
    )
}

export default Login;