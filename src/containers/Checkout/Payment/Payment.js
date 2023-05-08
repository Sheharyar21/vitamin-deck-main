import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

import axios from "axios";
import {connect, useSelector} from "react-redux";
import {message} from "antd";
import {CheckOutlined} from "@ant-design/icons";
import {useHistory} from "react-router-dom";
import {empty} from "../../../store/slices/cartSlice";


const Payment = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const [loading, setLoading] = useState(false)
    const history = useHistory();
    const { isAuthenticated, guestEmail, auth } = useSelector(({ auth }) => auth);

    useEffect(()=>{
        console.log(props.shippingData)
    },[])
    const onSubmit = (data) => {
        console.log('sdf12345',props.shippingData)
        let order = new FormData();
        props.shippingData.email = isAuthenticated ? auth.email : guestEmail;
        props.shippingData.amount = props.price
        props.shippingData.payment = data.payment
        order.append("order", props.shippingData);
        order.append("products", props.cartItems);
        setLoading(true)
        axios
            .post("place/order", { data:  props.shippingData, products: props.cartItems })
            .then((success) => {
                props.empty();
                setLoading(false)
                message.info({icon:(<CheckOutlined style={{color:"#0b9545"}} />),content:"Order Placed Successfully."})
                if(data.payment=='paypro'){
                    window.open(success.data.link,'_blank');
                }
                history.push(
                    "thank-you/" + success.data.order_no + "/" + success.data.name
                );
            })
            .catch((error) => {
                message.error("Error.")
            });
    };


    return (
        <div>
            <section className="checkout-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container">
                    <div className="shipping-address">
                        <div className="shiiping-details"><h4>CREDIT & DEBIT CARDS</h4></div>
                        <div className="checkout-options">
                            <div className="radio-btn">
                                <input type="radio" name="payment" value="COD" checked={true}
                                       ref={register({ required: true })}
                                />
                                <label>Cash on Delivery</label>
                            </div>
                            <div className="radio-btn">
                                <input type="radio" value="paypro" name="payment"
                                       ref={register({ required: true })}
                                />
                                <label>Credit/Debit</label>
                            </div>
                        </div>
                        <div className="shipping-column-row">
                            <div className="checkout-btns btn-rows">
                                <button onClick={props.shippingClick}>Back</button>
                            </div>
                            <div className="checkout-btns btn-rows">
                                <button type="submit">{loading && <i className="fas fa-spinner fa-pulse"></i>}Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                </form>

            </section>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        empty: () => {
            dispatch(empty());
        },
    };
};
export default connect(null, mapDispatchToProps)(Payment);