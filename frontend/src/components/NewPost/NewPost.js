import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "../Global/SideMenu";
import { userLog } from "../Global/UserLog";
import { Button, Checkbox, Form, Input, Select } from 'antd';
const { TextArea } = Input;

export default function NewPosts() {

    const navigate = useNavigate();
    const [newPosts, setNewPost] = useState({
        "id": 0,
        "title": "",
        "body": "",
        "user": userLog.username,
        "likes": 0
    })

    const onFinish = (values) => {
        // console.log(values)
        setNewPost({
            ...newPosts,
            title: values.title,
            body: values.content
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            {console.log(newPosts)}
            <SideMenu></SideMenu>
            <div className="container-top">
                <div className="logo">
                    <img src="/Logo.png" alt="logo" />
                </div>
            </div>
            <div className="login-options login-form">
                <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                    <Form.Item wrapperCol={{ offset: 1, span: 10 }} name="country" rules={[{ required: true, message: 'Please select a country!' }]}>
                        <Select
                            defaultValue="Country"
                            style={{ width: "100%" }}
                            options={[
                                {
                                    value: 'Country',
                                    label: 'Country',
                                    disabled: true,
                                },
                                {
                                    value: 'spain',
                                    label: 'Spain',
                                },
                                {
                                    value: 'united states',
                                    label: 'United States',
                                }
                            ]}
                        />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 1, span: 10 }} name="title" rules={[{ required: true, message: 'Please input a title for the post!' }]}>
                        <Input placeholder="Title" />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 1, span: 10 }} name="content" rules={[{ required: true, message: 'The content shoul have at least 20 characters!' }]}>
                        <TextArea
                            placeholder="Content"
                            autoSize={{
                                minRows: 7,
                                maxRows: 50,
                            }}
                        />
                    </Form.Item>


                    <Form.Item wrapperCol={{ offset: 1, span: 10 }}>
                        <Button className="submit-btn" type="primary" htmlType="submit" size="large">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}