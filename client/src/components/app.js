import { useState, useEffect, useContext, useCallback } from 'react';
import { getUsers } from '../service/api';
import { Switch, Route } from "react-router-dom";
import Users from './users';
import { DataContext, TokenContext } from '../context';
import EditUser from './edit-user';

function App() {
    const [users, setUsers] = useState([]);
    const { token } = useContext(TokenContext);

    const loadUsers = useCallback(async () => {
        const res = await getUsers(token);
        setUsers(res.data.users);
    }, [setUsers]);

    useEffect(() => {
        loadUsers();
    }, [loadUsers]);

    return (
        <DataContext.Provider value={{ users, setUsers }}>
            <Switch>
                <Route exact path='/users'>
                    <Users />
                </Route>
                <Route exact path='/edit-user/:id'>
                    <EditUser />
                </Route>
            </Switch>
        </DataContext.Provider>

    );
}

export default App;
