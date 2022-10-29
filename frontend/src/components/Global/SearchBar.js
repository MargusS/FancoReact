import { Input, Space } from 'antd';
import React from 'react';
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const { Search } = Input;
    const navigate = useNavigate();
    const onSearch = (value) => {
        navigate(`/posts/${value}`)
    };
    return (
        <>
            <Space className='search-bar' direction="vertical" align='center'>
                <Search placeholder="Search Country" onSearch={onSearch} style={{ width: 200 }} />
            </Space>
        </>
    )
}