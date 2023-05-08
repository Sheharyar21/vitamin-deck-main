
import React from 'react'
import './ContactUs.css'
import { Form, Input, Button, Col, Row, } from 'antd';

const ContactUs = ()=>{

    const onFinish = (values) => {
            console.log('Success:', values);
        };
        
        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };
        const { TextArea } = Input;

        const onChange = e => {
        console.log('Change:', e.target.value);
        };

    return(
        <>
        <section className='contact_banner'>
            <div className='con-overlay'>
                <h1>Contact Us</h1>
            </div>
        </section>
        <section className='contact-contt'>
            <p>
                Feel free to contact us. If you want to ask anything, have any complaint or want to 
                buy in bulk and want to buy online imported multivitamins, vitamins, supplements, 
                minerals. We are here 24/7 for you. Fill the form below or call us.
            </p>
        </section>
        <section className='soc-contt'>
            <div className='soc-main'>
                <div className='soc-det'>
                    <span>
                        <a href="#">
                            <i aria-hidden="true" class="fab fa-facebook-square fca_icn"></i>
                        </a>
                    </span>
                    <h3><a href='#'>Facebook</a></h3>
                    <p>
                        We value your feedback. Message
                        us on Facebook or leave us a review
                        about your experience. Ask
                        Anything you want.
                    </p>
                </div>
                <div className='soc-det'>
                    <span>
                        <a href="#">
                            <i aria-hidden="true" class="fab fa-instagram fca_icn"></i>
                        </a>    
                    </span>
                    <h3><a href='#'>Instagram</a></h3>
                    <p>
                        Instagram is one of the famous
                        social platforms. If you do not want
                        to miss any of our offers so follow
                        us on Instagram.
                    </p>
                </div>
                <div className='soc-det'>
                    <span>
                        <a href="#">
                            <i aria-hidden="true" class="fab fa-pinterest-p fca_icn"></i>
                        </a>
                    </span>
                    <h3><a href='#'>Pinterest</a></h3>
                    <p>
                        Pinterest is an image sharing
                        service designed to enable saving
                        information on the Web & we share our new products here.
                    </p>
                </div>
            </div>
        </section>
        <section className='contact_Detail'>
            <div className='cntct-main'>
                <div className='head'>
                    <h2>Contact Information​</h2>
                </div>
                <div className='conmain'>
                    <div className='con-lft'>
                        <div className='conblk'>
                            <div className='con-icn'>
                                <span><i class="fas fa-phone-alt"></i></span>
                            </div>
                            <div className='con-det'>
                                <h2>Call & Whatsapp:</h2>
                                <ul>
                                    <li>
                                        <a href="tel:03118371066" role="button"> <span>0311-8371066</span></a>
                                    </li>
                                    <li>
                                        <a href="tel:03118371066" role="button"> <span>0301-0228566</span></a>
                                    </li>
                                </ul>
                            </div>   
                        </div>
                        <div className='conblk'>
                            <div className='con-icn'>
                                <span><i class="fas fa-envelope"></i></span>
                            </div>
                            <div className='con-det'>
                                <h2>Email Us:</h2>
                                <ul>
                                    <li>
                                        <a href="mailto:info@vitamindeck.com.pk" role="button"><span>info@vitamindeck.com.pk</span></a>
                                    </li>
                                    <li>
                                        <a href="mailto:contact@vitamindeck.com.pk" role="button"><span>contact@vitamindeck.com.pk</span></a>
                                    </li>
                                    <li>
                                        <a href="mailto:order@vitamindeck.com.pk" role="button"><span>order@vitamindeck.com.pk</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='con-rgt'>
                        <div className='con-frm'>
                            <Form
                                name="basic"
                                labelCol={{
                                    span: 24,
                                }}
                                wrapperCol={{
                                    span: 24,
                                }}
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                                >
                                <label>Full Name</label>
                                <Input.Group size="medium">
                                <Row gutter={8}>
                                    
                                    <Col span={12}>
                                    <Form.Item
                                        name="firstname"
                                        rules={[
                                        {   
                                            required: true,
                                            message: 'Please input your First Name.',
                                        },
                                        ]}
                                    >
                                    <Input placeholder="First Name"/>
                                    </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                    <Form.Item
                                        name="firstname"
                                        rules={[
                                        {   
                                            required: true,
                                            message: 'Please input your First Name.',
                                        },
                                        ]}
                                    >
                                    <Input placeholder="Last Name"/>
                                    </Form.Item>
                                    </Col>
                                </Row>
                                </Input.Group>

                                    <label>Subject</label>
                                <Form.Item
                                    name="subject"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please mention the subject.',
                                    },
                                    ]}
                                >
                                    <Input placeholder="Subject" />
                                </Form.Item>
                                <label>Message</label>
                                <Form.Item 
                                    name="message"
                                    rules={[
                                        {   
                                            required: true,
                                            message: 'Please enter your message.',
                                        },
                                    ]}
                                >
                                    
                                    <Input.TextArea placeholder="Type your Message here..." allowClear showCount maxLength={100}/>
                                </Form.Item>
                                
                                <Form.Item
                                    wrapperCol={{
                                    span: 16,
                                    }}
                                >
                                    <Button type="primary" htmlType="submit">
                                    Submit
                                    </Button>
                                </Form.Item>
                            </Form>  
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )

}
export default ContactUs