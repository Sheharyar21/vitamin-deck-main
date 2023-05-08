import React from 'react';
import EmptyCart from '../../assets/images/latestcart3.png';
import CloseIcon from '../../assets/images/close_icon.png';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import './Cart.css'
import { increment, decrement, remove, empty } from "../../store/slices/cartSlice";
import PriceFormat from "../../component/PriceFormat/PriceFormat";


class Cart extends React.Component {
    constructor() {
        super();
        this.state = {}
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.remove = this.remove.bind(this);
    }

    increment(id) {
        this.props.increment(id)
    }
 
    decrement(id) {
        this.props.decrement(id)

    }

    remove(id) {
        this.props.remove(id)

    }

    render() {
        let items = this.props.cartItems
        return (
            <div >
                {items.length ?
                    <section className="invetntory_wrap">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="inventory_content">
                                        <div className="inventory_header flex">
                                            <h3>Cart</h3>
                                        </div>
                                        <div className="cart-content table-responsive">
                                            <table className='cart-table'>
                                                <thead>
                                                    <tr>
                                                        <th>Item</th>
                                                        <th>Quantity</th>
                                                        <th>Price</th>
                                                        <th>Total</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        items.map((item) =>
                                                            <tr>
                                                                <td>
                                                                    <div className="single_cart_item flex">
                                                                        <div className="cart_item_image"
                                                                            style={{ backgroundImage: `url(${process.env.REACT_APP_BASE_IMAGE_PATH + item.image})` }}></div>
                                                                        <div className="cart_item_text">
                                                                            <span>{item.name}</span>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="quantity-selector cart cart1">
                                                                        <span onClick={() => this.decrement(item.id)}
                                                                            className="qtyminus input-number-decrement"
                                                                            field='quantity'>–</span>
                                                                        <input type='text' name='quantity'
                                                                            value={item.quantity}
                                                                            className='qty input-number' />
                                                                        <span onClick={() => this.increment(item.id)}
                                                                            className="input-number-increment qtyplus"
                                                                            field='quantity'>+</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="price_cart">  <PriceFormat number={item.price} /></span>
                                                                </td>
                                                                <td>
                                                                    <span className="price_cart">  <PriceFormat number={item.price * item.quantity} /></span>
                                                                </td>
                                                                <td>
                                                                    <div onClick={() => this.remove(item.id)}
                                                                        className="cart_actions close-icon-cart">
                                                                        <span><img src={CloseIcon} /></span>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                        )
                                                    }
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td className="grand-total">Grand Total</td>
                                                        <td>
                                                            <span className="grand-total">  <PriceFormat number={"5678888"} /></span>
                                                        </td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="shopping-detail-coulmn">
                                        <div className="shopping-cart-title">
                                            <h5>Shopping
                                                Cart <span>({this.props.totalItems} items:   <PriceFormat number={this.props.total} />)</span>
                                            </h5>
                                        </div>
                                        <div className="shopping-cart-body">
                                            <h4>Order Summary</h4>
                                            <div className="order-info">
                                                <div className="info-row">
                                                    <h5>Subtotal ({this.props.totalItems} items)</h5>
                                                    <p>  <PriceFormat numnber={this.props.total} /></p>
                                                </div>
                                                <div className="info-row">
                                                    <h5>Estimated Shipping</h5>
                                                    <p>0</p>
                                                </div>
                                                <div className="info-row">
                                                    <h5>Tax Varies by Address</h5>
                                                    <p>0</p>
                                                </div>
                                            </div>
                                            <div className="order-total">
                                                <h5>Estimated Order Total</h5>
                                                <p>  <PriceFormat number={this.props.total} /></p>
                                            </div>
                                            <div className="checkout">
                                                <Link to={'/checkout'}>
                                                    <button className="btn btn-checkout hovr-style">Checkout</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='center-cont-shop'>
                            <div className='cont_shop'>
                                <Link to={'/'}>
                                    <button className='space btn btn-checkout hovr-style'>Continue Shopping</button>
                                </Link>

                            </div>
                        </div>
                    </section>
                    : <div>
                        <img className='CartImage' src={EmptyCart} />
                        <div><h1 className="message">Your Cart is Empty</h1></div>
                        <div className="final-button">
                            <Link to={'/'}>
                                <button className='space btn btn-blue btn-style'>Continue Shopping</button>
                            </Link>
                        </div>
                    </div>}
            </div>


        )
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.cartReducer.addedItems,
        total: state.cartReducer.total,
        totalItems: state.cartReducer.totalItems
    }

}
const mapDispatchToProps = dispatch => {
    return {
        decrement: (id) => {
            dispatch(decrement({ id }))
        },
        increment: (id) => {
            dispatch(increment({ id }))
        },
        remove: (id) => {
            dispatch(remove({ id }))
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
