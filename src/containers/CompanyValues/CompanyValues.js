import React from 'react'
import './CompanyValues.css'
import companyValue from '../../assets/images/companyValueimg.png'

const CompanyValues = ()=>{

    return(
        <>
        <section className='value_banner'>
            <div className='value-overlay'>
                <h1>Company Values</h1>
            </div>
        </section>
        <section className='value_content'>
            <div className='Vcontt_main'>
                <div className='vcontt_txt'>
                    <ul>
                        <li>
                            At Vitamin Deck, Our Values Are Based On A Few Of The Most Important 
                            Principles That I Believe All Should Have:
                        </li>
                        <li>
                            Honesty, Trust, And Integrity With Our Customers, Suppliers, The 
                            Communities We Serve, And Among Ourselves.
                        </li>
                        <li>
                            Quality, Through Consistent And Reliable Service, Advice, And Products 
                            Across Every Touch-Point And Channel.
                        </li>
                        <li>
                            Caring, Compassionate, And Driven To Deliver A Great Customer And 
                            Patient Experience Through Outstanding Service And A Desire For Healthy 
                            Outcomes.
                        </li>
                    </ul>
                </div>
                <div className='vcontt_pic'>
                    <div className='comValuePic'>
                        <img src={companyValue} />
                    </div>
                </div>
            </div>
        </section>
        </>
    )

}
export default CompanyValues