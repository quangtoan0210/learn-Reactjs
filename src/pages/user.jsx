import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchAllUserApi } from '../sercives/api.service';

const UserPage = () => {
    const [dataUsers, setDataUsers] = useState([])
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        loadUser();
    }, [current,pageSize])
    const loadUser = async () => {
        const res = await fetchAllUserApi(current, pageSize);
        if (res.data) {
            setDataUsers(res.data.result);
            setCurrent(res.data.meta.current);
            setPageSize(res.data.meta.pageSize);
            setTotal(res.data.meta.total);
        }

    }
    return (
        <>
            <div style={{ padding: "20px" }}>
                <UserForm loadUser={loadUser} />
                <UserTable
                    loadUser={loadUser}
                    dataUsers={dataUsers}
                    current={current}
                    pageSize={pageSize}
                    total={total}
                    setCurrent={setCurrent}
                    setPageSize={setPageSize}
                />
            </div>

        </>

    )
}
export default UserPage;