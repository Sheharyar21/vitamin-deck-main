import React from 'react'
import './COD.css'
import delivery from '../../assets/images/delivery.png'

const COD = ()=>{

    return(
        <>
        <section className='cod_banner'>
            <div className='cod-overlay'>
                <h1>Cash On Delivery</h1>
            </div>
        </section>
        <section className='cod_content'>
            <div className='Dcontt_main'>
                <div className='dcontt_txt'>
                    <ul>
                        <li>
                            Use Our Convenient Cash On Delivery That Allows You To Pay For Your 
                            Order With CASH At The Time Of Delivery. Pay When You Receive Your 
                            Order.
                        </li>
                        <li>
                            Standard Shipping Is Free, For Shipping With Priority, There Is An Extra 
                            Charge Of Rs 100 Per Kilogram (KG).
                        </li>
                        <li>
                            We Ship Using COD (Cash On Delivery) To Virtually All Locations Within 
                            Pakistan. Standard Delivery Within Pakistan Takes 3-4 Days After The Order 
                            Has Shipped.
                        </li>
                    </ul>
                </div>
                <div className='dcontt_pic'>
                    <div className='deliveryPic'>
                        <img src={delivery} />
                    </div>
                </div>
            </div>
        </section>


        </>
    )

}
export default COD