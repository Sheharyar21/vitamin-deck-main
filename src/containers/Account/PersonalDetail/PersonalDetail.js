import React, {useEffect, useState} from 'react';
import {Form, Input, Button, message} from 'antd';
import axios from "axios";
import '../../Account/AddressDetail/address.css'

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const RegistrationForm = (props) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const id = props.data.id
    console.log(props)
    let data = props.data
    useEffect(() => {
        form.setFieldsValue(data)
    }, [data])

    const onFinish = (values) => {
        console.log('Received values of form: ', values)
        setLoading(true)
        axios.put("/customer/" + id,values).then(success => {
            console.log(success)
            message.success(`${values.firstName}'s Personal Detail Updated`)
            setLoading(false)

        }).catch(err => {
                console.log(err)
                message.error("Unable to Update!")
                setLoading(false)
            }
        );
    };

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
        >
            <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your firstName!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                name="lastName"
                label="Last Name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your firstName!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>
            {/*<Form.Item*/}
            {/*    name="email"*/}
            {/*    label="E-mail"*/}
            {/*    rules={[*/}
            {/*        {*/}
            {/*            type: 'email',*/}
            {/*            message: 'The input is not valid E-mail!',*/}
            {/*        },*/}
            {/*        {*/}
            {/*            required: true,*/}
            {/*            message: 'Please input your E-mail!',*/}
            {/*        },*/}
            {/*    ]}*/}
            {/*>*/}
            {/*    <Input disabled="true"/>*/}
            {/*</Form.Item>*/}

            <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                    {
                        required: true,
                        message: 'Please input your phone number!',
                    },
                ]}
            >
                <Input
                    style={{
                        width: '100%',
                    }}
                />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <button loading={loading} className='defaultbtn' htmlType="submit">
                    Update Personal Details
                </button>
            </Form.Item>
        </Form>
    );
};

export default RegistrationForm