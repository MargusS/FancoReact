import { CloseOutlined, AlignLeftOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import React, { useState } from 'react';

export default function SideMenu() {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button className='menu-btn' shape="round" icon={<AlignLeftOutlined className='menu-icon' style={{ fontSize: '1.2em', color: '#FFF' }} />} size="large" onClick={showDrawer} />
            <Drawer className='slide-menu' placement="left" onClose={onClose} open={open} width="250" closeIcon={<CloseOutlined className='menu-icon' style={{ fontSize: '1.5em', color: '#F10E69' }} />}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
}