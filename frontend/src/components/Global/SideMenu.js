import { CloseOutlined, AlignLeftOutlined, HomeOutlined, UserOutlined, FormOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function SideMenu() {

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onNavigation = (route) => {
        onClose();
        navigate(route)
    }

    return (
        <>
            <Button className='menu-btn' shape="round" icon={<AlignLeftOutlined className='menu-icon' style={{ fontSize: '1.2em', color: '#FFF' }} />} size="large" onClick={showDrawer} />
            <Drawer className='slide-menu' placement="left" onClose={onClose} open={open} width="250" closeIcon={<CloseOutlined className='menu-icon' style={{ fontSize: '1.5em', color: '#F10E69' }} />}>
                <div className='item' onClick={() => onNavigation("/home")}>
                    < HomeOutlined style={{ fontSize: '1.7em', color: '#FFF' }} />
                    <p>HOME</p>
                </div>
                <div className='item' onClick={() => onNavigation("/login")}>
                    <UserOutlined style={{ fontSize: '1.7em', color: '#FFF' }} />
                    <p>SIGN IN/LOG IN</p>
                </div>
                <div className='item' >
                    <FormOutlined style={{ fontSize: '1.7em', color: '#FFF' }} />
                    <p>CONTACT US</p>
                </div>
            </Drawer>
        </>
    );
}