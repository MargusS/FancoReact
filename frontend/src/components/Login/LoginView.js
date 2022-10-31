import SideMenu from "../Global/SideMenu";
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import Footer from "../Global/Footer";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LogContext } from "../../context/LogContext";

export default function LoginView() {

    const navigate = useNavigate();
    const { value, setValue } = useContext(LogContext);

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onLogin = () => {
        setValue(() => !value)
        navigate("/home")
    }

    return (
        <div className="overflow">
            <SideMenu></SideMenu>
            <div className="container-top">
                <div className="logo">
                    <img src="/Logo.png" alt="logo" />
                    <p>{value}</p>
                </div>
            </div>

            <div className="login-options">
                <Button className="login-options-button" type="primary" danger size="large">Login with Google <GoogleOutlined /></Button>
                <Button className="login-options-button" type="primary" size="large">Login with Facebook<FacebookOutlined /></Button>
            </div>
            <hr className="divider"></hr>
            <div className="login-options login-form">
                <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
                    <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 1, span: 10 }}>
                        <Button className="submit-btn" type="primary" htmlType="submit" size="large" onClick={onLogin}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <Footer></Footer>
        </div>
    )
}