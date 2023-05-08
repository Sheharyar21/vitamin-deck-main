import {Form, Input, Button} from 'antd';
import {React, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom'
import {notification} from 'antd';
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";
import {saveLoginData} from '../../store/slices/authSlice'
import {Modal} from "react-bootstrap";
import {CloseOutlined} from '@ant-design/icons';
import './signup.css'

const layout = {
    labelCol: {
        span: 24,
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

const SignUp = (props) => {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState()
    const onFinish = (values) => {
        setLoading(true)
        axios.post('auth/signup', values).then(success => {
            setLoading(false)
            dispatch(saveLoginData(success.data))
            props.closeSignUp()
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
    const [isOpen, setIsOpen] = useState(false)
    // const changeModal =()=>{
    //     props.closeSignUp()
    //     setIsOpen(!isOpen)
    //
    // }
    return (
        <>
        <Modal show={props.show} onHide={props.closeSignUp}>
            <div className="modal-content">
                <button onClick={() => props.closeSignUp()} type="button" className="modal-close mcross">
                <CloseOutlined />
                </button>
                <div className="signupmain">
                    <h1>Sign Up</h1>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        className='signupform'
                    >
                        <Form.Item
                            name="firstName"
                            rules={[
                                {
                                    required: true,
                                    type: "string",
                                    message: 'Please input your first name!',
                                },
                            ]}
                        >
                            <Input className='input1' placeholder='First Name'/>
                        </Form.Item>
                        <Form.Item
                            name="lastName"
                            rules={[
                                {
                                    required: true,
                                    type: "string",
                                    message: 'Please input your last name!',
                                },
                            ]}
                        >
                            <Input className='input1' placeholder='Last Name'/>
                        </Form.Item>
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
                            <Input className='input1' placeholder='Enter Your Email'/>
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
                            <Input.Password className='input1' placeholder='Enter Password'/>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button className='signupbtn' loading={loading} type="primary" htmlType="submit">
                                Sign Up
                            </Button>
                            {/*<a className="Forgot" onClick={changeModal}>*/}
                            {/*    Already a member! SignIn*/}
                            {/*</a>*/}
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Modal>
    {/*<Login closeLogin={() => setIsOpen(false)} show={isOpen} />*/}
        </>

    );
};

export default SignUp;
