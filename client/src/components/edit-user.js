import { useState, useContext } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { DataContext } from '../context';
import { ContainerForm, Row, ColInput, ColLabel, Button, Input, Label } from './style';

const EditUser = () => {

    const history = useHistory();
    const params = useParams();
    const { users, setUsers } = useContext(DataContext);
    const user = users.find(user => user.id === Number(params.id));
    const [userDetail, setUserDetail] = useState(user);

    const submit = e => {
        e.preventDefault();
        const usersUpdated = users.map(user => {
            if (user.id === userDetail.id) {
                return userDetail;
            }
            return user;
        });
        setUsers(usersUpdated);
        history.push('/users');
    };


    return (
        <ContainerForm>
            <form>
                <Row>
                    <ColLabel>
                        <Label htmlFor="firstName">firstName:</Label>
                    </ColLabel>
                    <ColInput>
                        <Input
                            type="text"
                            id="firstName"
                            value={userDetail.firstName}
                            onChange={e => {
                                setUserDetail({ ...userDetail, [e.target.id]: e.target.value });
                            }}
                        />
                    </ColInput>
                </Row>
                <Row>
                    <ColLabel>
                        <Label htmlFor="lastName">lastName:</Label>
                    </ColLabel>
                    <ColInput>
                        <Input
                            type="text"
                            id="lastName"
                            value={userDetail.lastName}
                            onChange={e => {
                                setUserDetail({ ...userDetail, [e.target.id]: e.target.value });
                            }}
                        />
                    </ColInput>
                </Row>
                <Row>
                    <ColLabel>
                        <Label htmlFor="age">age:</Label>
                    </ColLabel>
                    <ColInput>
                        <Input
                            type="number"
                            id="age"
                            value={userDetail.age}
                            onChange={e => {
                                setUserDetail({ ...userDetail, [e.target.id]: e.target.value });
                            }}
                        />
                    </ColInput>
                </Row>
                <Row>
                    <Button onClick={submit}>Submit</Button>
                </Row>
            </form>
        </ContainerForm>
    );
}

export default EditUser;