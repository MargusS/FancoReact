import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React from 'react';

const { Search } = Input;
const onSearch = (value) => console.log(value);

export default function SearchBar() {
    return (
        <>
            <Space className='search-bar' direction="vertical" align='center'>
                <Search placeholder="Search Country" onSearch={onSearch} style={{ width: 200 }} />
            </Space>
        </>
    )
}