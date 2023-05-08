
import React from 'react'
import './About.css'

const About = ()=>{

    return(
        <>
        <section className='about_banner'>
            <div className='abt-overlay'>
                <h1>About Us</h1>
            </div>
        </section>
        <section className='intro-contt'>
            <div className='frst-content'>
                <p>
                VitaminDeck sells Vitamins and supplements in Pakistan and works with various 
                international and local companies. Who are Importing products from different 
                countries since a decade. With the help of them, we are bringing you a wide variety
                of branded Health and Beauty Care products such as Vitamins/Supplement,
                Personal Care Products and Essential Items that you use in daily life. We ship to
                most of the destinations in Pakistan.
                </p>
            </div> 
        </section>
        <section className='social-contt'>
            <div className='social-main'>
                <div className='social-det'>
                    <span>
                        <a href="#">
                            <i aria-hidden="true" class="fab fa-facebook-square fa_icn"></i>
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
                <div className='social-det'>
                    <span>
                        <a href="#">
                            <i aria-hidden="true" class="fab fa-instagram fa_icn"></i>
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
                <div className='social-det'>
                    <span>
                        <a href="#">
                            <i aria-hidden="true" class="fab fa-pinterest-p fa_icn"></i>
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
        <section className='whychoose'>
            <div className='heading'>
                <h2>Why you choose VitaminDeck</h2>
                <span>
                    <i aria-hidden="true" class="fas fa-heart"></i>
                </span>
            </div>
            <div className='goalmain'>
                <div className='goal-contt'>
                    <h2>What we Do</h2>
                    <p>
                        We are a vitamins store in Pakistan. We carry the world’s finest 
                        brands. Our Products Are Vitamins, Supplements, Minerals, Pain 
                        relievers, Lotions, Soaps, Deodorant, Body Wash, Face Wash, 
                        Shampoo, Conditioner, Hair Spray, Hair Gel, Tooth Paste, Mouth 
                        Freshener, Baby Care Products, And More. We Only Work In 
                        Imported Products.
                    </p>
                </div>
                <div className='goal-contt'>
                    <h2>Our Missions</h2>
                    <p>
                        In Pakistan Most people are not conscious about their health or 
                        lifestyle. So VitaminDeck Missions Is To Provide The Best 
                        Products Available In The World And Educate The People On 
                        How Much Your Health Is Important For You And For Your 
                        Family. Taking proper nutrition can improve your health quality 
                        we are bringing you all the Vitamins and supplement you need 
                        in your daily life.
                    </p>
                </div>
            </div>
        </section>
        </>
    )

}
export default About