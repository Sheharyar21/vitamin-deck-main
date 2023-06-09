import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Form, message, Input, InputNumber, Modal, Col, Row} from "antd"
import {useForm} from "react-hook-form";
import axios from "axios";
import '../../AddressDetail/address.css'

function NewAddress(props) {

    const {auth} = useSelector(({auth}) => auth)
    const {register, handleSubmit, errors} = useForm();
    const [loading, setLoading] = useState("")
    const formRef = React.createRef();
    const onFinishFailed = (errorInfo) => {
        message.error('Failed:', errorInfo)
        console.log('Failed:', errorInfo);
    };
    const onReset = () => {
        formRef.current.resetFields();
    };
    const onFinish = (data) => {
        setLoading(true)
        axios.post(`/customer/address/${auth.id}`, data).then(success => {
            console.log(success)
            message.success("Address Added Successfully")
            setLoading(false)
            props.cancel()
        }).catch(err => {
            console.log(err)
            message.error(`Unable to add Address ${err.message}`)
            setLoading(false)
        })
    }
    return (
        <Modal
            title="Create New Address"
            visible={props.visible}
            onCancel={props.cancel}
            width={600}
            footer=""
        >
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                ref={formRef}
            >
                <Form.Item
                    label="Label"
                    name="label"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Label!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="State"
                    name="state"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your State!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="City"
                    name="city"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your City!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Postal Code"
                    name="postal_code"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Postal Code!',
                            len: 5,
                            max: 5,
                            min: 5,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Address"
                    name="address"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Address!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <button className='defaultbtn' htmlType="submit">
                        Submit
                    </button>

                    <button className='cancel-btn' onClick={props.cancel}>
                        Cancel
                    </button>
                </Form.Item>
            </Form>
        </Modal>

    );
}

export default NewAddress;