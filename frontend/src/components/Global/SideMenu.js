import { AlignLeftOutlined, HomeOutlined ,FormOutlined  } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useState } from 'react';

export default function SideMenu(){

    const [visible, setVisible] = useState(true);

    return(
        <>
            <Button className='menu-btn'shape="round" icon={<AlignLeftOutlined className='menu-icon' />} size='large' />
            <div className={"menu-container" + (visible ? " menu-visible": '')}>
                <div className={'menu-item' + (visible ? " item-visible": '')}><HomeOutlined className='menu-icon' /><h4>Home</h4></div>
                <div className={'menu-item' + (visible ? " item-visible": '')}><FormOutlined className='menu-icon' /><h4>Contact Us</h4></div>
            </div>
        </>
    )
}