import React from 'react'
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import {connect} from "react-redux"
import Layout from "../Layout/Layout";
import Home from "../containers/Home/Home";
import Product from "../containers/ProductDetail/ProductDetail";
import Cart from "../containers/Cart/Cart"
import CheckOut from "../containers/Checkout/Checkout";
import CollectionProducts from "../containers/CollectionProducts/CollectionProducts";
import BrandProducts from "../containers/BrandProducts/BrandProducts";
import COD from '../containers/COD/COD';
import ContactUs from '../containers/ContactUs/ContactUs';
import OurPolicies from '../containers/OurPolicies/OurPolicies';
import CompanyValues from '../containers/CompanyValues/CompanyValues';
import blogs from '../containers/blogs/blogs';
import About from '../containers/About/About';
import ScrollToTop from "../ScrollToTop";
import Blog from "../containers/blogs/Blog/Blog";
import AllBrands from "../containers/AllBrands/AllBrands";
import ThankYou from "../containers/ThankYou/ThankYou";
import WishList from "../containers/WishList/WishList";
import Account from "../containers/Account/Account";
import OrderDetailView from "../component/OrderDetailView/OrderDetailView";
import BrandDetails from '../containers/BrandDetails.js/BrandDetails';


function Routes() {
    return (
        <BrowserRouter>
            
                <Layout>
                    <Route component={({match}) =>
                        <div>
                            <ScrollToTop>
                            <Switch>
                                <Route exact path="/" component={Home}/>

                                <Route path="/products/brands/:slug" exact component={BrandProducts}/>

                                <Route path="/product-brands/:slug" exact component={BrandProducts}/>
                                <Route path="/products/:slug1/:slug" exact component={CollectionProducts}/>

                                <Route path="/products/:slug" exact component={CollectionProducts}/>
                                <Route path="/products/:slug1/:slug" exact component={CollectionProducts}/>
                                <Route path="/products/:slug1/:slug2/:slug" exact component={CollectionProducts}/>

                                <Route path="/product/:slug" exact component={Product}/>
                                <Route path="/cart" exact component={Cart}/>
                                <Route path="/blogs" component={blogs}/>
                                <Route path="/blog/:slug" component={Blog}/>
                                <Route path="/about-us" component={About}/>
                                <Route path="/contact-us" component={ContactUs}/>
                                <Route path="/cash-on-delivery" component={COD}/>
                                <Route path="/Company-Values" component={CompanyValues}/>
                                <Route path="/our-policies" component={OurPolicies}/>
                                <Route path="/checkout" component={CheckOut}/>
                                <Route path="/thank-you/:order_no/:name" exact component={ThankYou}/>
                                <Route path="/brands" component={AllBrands}/>
                                <Route path="/brand/:slug" component={BrandDetails}/>
                                <Route path="/wishlist" exact component={WishList}/>
                                <Route path="/my-account" exact component={Account}/>
                                <Route path="/order-detail-view/:id" exact component={OrderDetailView}/>
                                </Switch>
                            </ScrollToTop>

                            {/*
                            <Route path="/how-to-order" exact component={HowToOrder}/>
                            <Route path="/privacy-policy" exact component={PrivacyPolicy}/>
                            <Route path="/about" exact component={About}/>
                            <Route path="/contact" exact component={Contact}/>
                            <Route path="/payment" exact component={Payment}/>
                            <Route path="/shipping" exact component={Shipping}/>
                            <Route path="/exchange-policy" exact component={ExchangePolicy}/>
                             */}
                        </div>
                    }/>
                </Layout>


       
        </BrowserRouter>
    )

}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }

}
export default connect(mapStateToProps)(Routes);
