import { Space, Table, Tag } from 'antd';
import { fetchAllUserApi } from '../../sercives/api.service';
import { useState } from 'react';
import { useEffect } from 'react';


const UserTable = () => {
    const [dataUsers, setDataUsers] = useState([])
    useEffect(()=>{
        loadUser();
    },[])
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        }
    ];
    const loadUser = async () => {
        const res = await fetchAllUserApi()
        setDataUsers(res.data)
    }
    return (
        <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
    )
}

export default UserTable;
