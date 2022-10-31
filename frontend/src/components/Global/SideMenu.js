import { CloseOutlined, AlignLeftOutlined, HomeOutlined, UserOutlined, FormOutlined, PoweroffOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { LogContext } from "../../context/LogContext";

export default function SideMenu() {

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const { value, setValue } = useContext(LogContext);

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

    const onLogout = () => {
        setValue(() => !value)
        navigate("/login")
    }

    return (
        <>
            <Button className='menu-btn' shape="round" icon={<AlignLeftOutlined className='menu-icon' style={{ fontSize: '1.2em', color: '#FFF' }} />} size="large" onClick={showDrawer} />
            <Drawer className='slide-menu' placement="left" onClose={onClose} open={open} width={300} closeIcon={<CloseOutlined className='menu-icon' style={{ fontSize: '1.5em', color: '#F10E69' }} />}>
                <div className='item' onClick={() => onNavigation("/home")}>
                    < HomeOutlined style={{ fontSize: '1.7em', color: '#FFF' }} />
                    <p>HOME</p>
                </div>
                {value ?
                    <div className='item' onClick={onLogout}>
                        <PoweroffOutlined style={{ fontSize: '1.7em', color: '#FFF' }} />
                        <p>LOG OUT</p>
                    </div> :
                    <div className='item' onClick={() => onNavigation("/login")}>
                        <UserOutlined style={{ fontSize: '1.7em', color: '#FFF' }} />
                        <p>SIGN IN/LOG IN</p>
                    </div>
                }
            </Drawer>
        </>
    );
}