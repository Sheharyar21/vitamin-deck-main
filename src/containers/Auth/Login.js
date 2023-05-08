import {Form, Input, Button} from 'antd';
import {React, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import {notification} from 'antd';
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";
import {saveLoginData} from '../../store/slices/authSlice'
import {Modal} from "react-bootstrap";
import SignUp from "./SignUp";
import './login.css';
import {CloseOutlined} from '@ant-design/icons';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 24,
    },
};
const tailLayout = {
    wrapperCol: {
        span: 24,
    },
};

const Login = (props) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState()
    const onFinish = (values) => {
        setLoading(true)
        axios.post('auth/signin', values).then(success => {
            setLoading(false)
            dispatch(saveLoginData(success.data))
            props.closeLogin()
        }).catch(error => {
            setLoading(false)

            notification['error']({
                message: 'Login Failed',
                description:
                error.response.data.message,
            });
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [isSignUp, setIsSignUp] = useState(false)
    const changeModal =()=>{
        props.closeLogin()
        setIsSignUp(!isSignUp)

    }


    return (
        <>
        <Modal show={props.show}  animation={true} onHide={props.closeLogin}>
            <div className="modal-content">
                <button onClick={() => props.closeLogin(false)} type="button" className="modal-close mcross">
                 <CloseOutlined />
                </button>
                <div className="loginmain">
                    <h1>Log In</h1>
                    <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    className='loginform'
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                {   
                                    required: true,
                                    type: "email",
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                    
                        <Input className="input1" placeholder='Username or Email'/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password className="input1" placeholder='Enter Password'/>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button className='loginbtn' loading={loading} type="primary" htmlType="submit">
                            Log in
                        </Button>
                    </Form.Item>
                    <a className='regnow'  onClick={changeModal}>Not a Member Register Now!</a>
                    </Form>
                    
                </div>
            </div>
        </Modal>

            <SignUp closeSignUp={() => setIsSignUp(false)} show={isSignUp} />
        </>

    );
};

export default Login;
