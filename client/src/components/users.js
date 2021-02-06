import { useContext } from 'react';
import { DataContext } from '../context';
import { Link } from "react-router-dom";
import { Table, Tr, Td, Th } from './style';

const Users = () => {
    const data = useContext(DataContext);
    const { users } = data;
    return (
        <Table>
            <thead>
                <Tr>
                    <Th>FIRST NAME</Th>
                    <Th>LAST NAME</Th>
                    <Th>AGE NAME</Th>
                    <Th>UPDATE</Th>
                </Tr>
            </thead>
            <tbody>
                {
                    users.length ? users.map((user) => {
                        return (
                            <Tr key={user.id}>
                                <Td>{user.firstName}</Td>
                                <Td>{user.lastName}</Td>
                                <Td>{user.age}</Td>
                                <Td center>
                                    <Link to={`edit-user/${user.id}`}>
                                        Edit
                                </Link>
                                </Td>
                            </Tr>
                        )
                    }) : <Tr><Td center>is loading...</Td></Tr>

                }
            </tbody>
        </Table>
    )
}

export default Users;