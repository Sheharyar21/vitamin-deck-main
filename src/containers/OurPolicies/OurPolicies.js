import React from 'react'
import './OurPolicies.css'
import track from '../../assets/images/vitaminDeckTrack.png'
import shipping from '../../assets/images/VitaminDeckShipping.png'
import lost from '../../assets/images/productLost.png'


const OurPolicies = ()=>{

    return(
        <>
        <section className='op_banner'>
            <div className='op-overlay'>
                <h1>Our Policies</h1>
            </div>
        </section>
        <section className='opintro-contt'>
            <div className='opfrst-content'>
                <p>
                    Before buying from VitaminDeck Store Read our policies for Return 
                    or exchange
                </p>
            </div> 
        </section>
        <section className='oppolicy-contt'>
            <div className='oppolicy-main'>
                <div className='oppolicy-det'>
                    <span>
                        <a href="#">
                            <i aria-hidden="true" class="opfa_icn fas fa-shopping-cart"></i>
                        </a>
                    </span>
                    <h3><a href='#'>Buying Policy</a></h3>
                    <p>
                        Before buying read the 
                        product description and see 
                        the number of tablets and if 
                        you have any health issues 
                        such and blood pressure or 
                        etc please consult from your 
                        doctor first.
                    </p>
                </div>
                <div className='oppolicy-det'>
                    <span>
                        <a href="#">
                            <i aria-hidden="true" class="opfa_icn fas fa-eye-slash"></i>
                        </a>
                    </span>
                    <h3><a href='#'>Client Privacy Policy</a></h3>
                    <p>
                        our website is safe and highly 
                        secure and the data you fill for 
                        place order is directly goes on 
                        our database. You also can 
                        pay us cash on delivery and 
                        also order us on WhatsApp.
                    </p>
                </div>
                <div className='oppolicy-det'>
                    <span>
                        <a href="#">
                            <i aria-hidden="true" class="opfa_icn fas fa-exchange-alt"></i>
                        </a>
                    </span>
                    <h3><a href='#'>Pinterest</a></h3>
                    <p>
                        Usually, we Exchange the 
                        product without taking any 
                        extra charge but if the product 
                        reaches to you or in on the 
                        way then you have to pay 
                        Shipping charges for Exchange 
                        that product.
                    </p>
                </div>
                <div className='oppolicy-det'>
                    <span>
                        <a href="#">
                            <i aria-hidden="true" class="opfa_icn fas fa-history"></i>
                        </a>
                    </span>
                    <h3><a href='#'>Return Policy</a></h3>
                    <p>
                        Vitamin Deck has giving 7-day 
                        return policy to there clients 
                        but if the bottle or box seal 
                        will open or product will 
                        defective. then the return will 
                        be not acceptable any more.
                    </p>
                </div>
            </div>
        </section>
        <section className='order-status'>
            <div className='ordr-main'>
                <div className='ordr-lft'>
                    <div className='ordr-lft-contt'>
                        <h2>ORDER STATUS AND TRACKING</h2>
                        <ul>
                            <li>
                                Track your product order here or follow the link in the email you 
                                receive when your order ships. You can also call Customer Care at 
                                0311-8371066
                            </li>
                            <li>
                                Ordered: This means we’ve received your order, and we’re getting your 
                                product or products ready to ship. Shipped or in transit: Your order 
                                is on its way.
                            </li>
                            <li>
                                Delivered: Your order has arrived at its destination.
                            </li>
                            <li>
                                Out of stock: The product or products you ordered are no longer 
                                available. They won’t be back-ordered, but you can place a new order 
                                when the item is available again.
                            </li>

                        </ul>
                    </div>
                </div>
                <div className='ordr-rgt'>
                    <img src={track}/>
                </div>
            </div>
        </section>
        <section className='order-tracking'>
            <div className='ordr-main'>
                <div className='ordr-rgt'>
                    <img src={shipping}/>
                </div>
                <div className='ordr-lft'>
                    <div className='ordr-lft-contt ordr-lft-contt2'>
                        <h2>STANDARD SHIPPING</h2>
                        <ul>
                            <li className='mgn-btm'>
                                Orders are handled by a variety of carriers. We select the carrier 
                                offering the best service at that time for that destination. Product 
                                shipping times may vary based on a fulfillment center.
                            </li>
                            <li>
                                Orders placed by the 3 p.m. ET are shipped overnight and normally 
                                arrive at customers in 1-2 business day. Orders received after 3 p.m. 
                                will be processed the next business day and shipped overnight. Certain 
                                items ship directly from vendors and will arrive 2-3 business days after 
                                processing.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section className='pdt-lost'>
            <div className='ordr-main'>
                <div className='ordr-lft'>
                    <div className='ordr-lft-contt'>
                        <h2>PRODUCT LOST DETAIL</h2>
                        <ul>
                            <li className='mgn-btm'>
                                If your product is Loss in any situation. We will verify with the Shipping 
                                Carrier. It will take 3 to 4 days in this process. If your parcel is still not 
                                located, we will issue another replacement for your product.
                            </li>
                            <li className='mgn-btm'>
                                Your personal information is important:
                                <ul className='psnl-det'>
                                    <li>Name</li>
                                    <li>Phone number</li>
                                    <li>Complete Address</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='ordr-rgt'>
                    <img src={lost}/>
                </div>
            </div>
        </section>
        <section className='promo-codes'>
            <div className='promo-main'>
                <h2>PROMO CODES</h2>
                <p>How do I apply promo code to my order?</p>
                <p> 
                    Note the code that you want to use. After adding your item(s) to your cart, proceed to the checkout page. On 
                    the left side of the page, you will see a box labeled, Have a special promotion or coupon code? Enter your code 
                    and click Apply Code.
                </p>
            </div>
        </section>
        
        </>
      )
    }

export default OurPolicies