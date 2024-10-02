import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchAllUserApi } from '../sercives/api.service';

const UserPage = () => {
    const [dataUsers, setDataUsers] = useState([])
    useEffect(() => {
        loadUser();
    }, [])
    const loadUser = async () => {
        const res = await fetchAllUserApi()
        setDataUsers(res.data)
    }
    return (
        <>
            <div style={{ padding: "20px" }}>
                <UserForm loadUser={loadUser}/>
                <UserTable dataUsers={dataUsers}/>
            </div>

        </>

    )
}
export default UserPage;