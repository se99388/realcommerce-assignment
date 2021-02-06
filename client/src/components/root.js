import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from './login';
import App from './app';
import { TokenContext } from '../context';

function Root() {
    const [token, setToken] = useState('');
    return (
        <TokenContext.Provider value={{ token, setToken }}>
            <Router>
                <Switch>
                    <Route exact path='/login'>
                        <Login/>
                    </Route>
                    <Route render={() => {
                        if (token) {
                            return <App />
                        }
                        return <Redirect to='/login' />
                    }}/>
                </Switch >
            </Router>
        </TokenContext.Provider>

    );
}

export default Root;
