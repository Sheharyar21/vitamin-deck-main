import React from 'react';
import Address from '../../assets/images/address.png';
import Phone from '../../assets/images/phone.png';
import Web from '../../assets/images/web.png';
import Email from '../../assets/images/email.png';
import AngleRight from '../../assets/images/angle-right.png';
import { Link } from "react-router-dom";
import styles from './Footer.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import footerLogo from '../../assets/images/logo-min.png';
import MyTextInput from '../../FormikForm/MyTextInput';
import * as Yup from 'yup';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { FaFacebook,FaInstagram,FaTiktok,FaSnapchat } from 'react-icons/fa';
import { faLocationArrow, faPhone, faEnvelope, faGlobe, faAngleRight } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {

    return (
        <>
            <footer>
               <div className={styles.FooterMain}>
                   <div className={styles.FooterLogo}>
                   <Link to='/'>
                       <img src={footerLogo} />
                       </Link>
                   </div>
                   <div className={styles.ContactInfo}>
                       <h2>Contact Info</h2>
                       <label></label>
                       <p><span><FontAwesomeIcon icon={faLocationArrow} /></span>Office # 719, 7th Floor Anum Blessing K.C.H.S.C.U, Block 7/8, Main Shahrah- E-Faisal, Karachi, Pakistan.</p>
                       <p><span><FontAwesomeIcon icon={faPhone} /></span><a href='tel:0315-2225848'>0315-2225848</a></p>
                       <p><span><FontAwesomeIcon icon={faEnvelope} /></span><a href='mailto:info@vitamindeck.com.pk'>info@vitamindeck.com.pk</a></p>
                       <p><span><FontAwesomeIcon icon={faGlobe} /></span><a href='https://vitamindeck.com.pk'>https://vitamindeck.com.pk</a></p>
                   </div>
                   <div className={styles.UserLinks}>
                       <h2>Useful Links</h2>
                       <label></label>
                       <span></span>
                       <ul>
                           <li>
                               <span><FontAwesomeIcon icon={faAngleRight} /></span>
                               <Link to='/about-us'>
                                   About us
                               </Link>
                           </li>
                           <li>
                               <span><FontAwesomeIcon icon={faAngleRight} /></span>
                               <Link to='/Company-Values'>
                                   Company Values
                               </Link>
                           </li>
                           <li>
                               <span><FontAwesomeIcon icon={faAngleRight} /></span>
                               <Link to='/cash-on-delivery'>
                                   Cash on Delivery
                               </Link>
                           </li>
                           <li>
                               <span><FontAwesomeIcon icon={faAngleRight} /></span>
                               <Link to='/our-policies'>
                                   Our Policies
                               </Link>
                           </li>
                           <li>
                               <span><FontAwesomeIcon icon={faAngleRight} /></span>
                               <Link to='/blogs'>
                                   Blog
                               </Link>
                           </li>
                           <li>
                               <span><FontAwesomeIcon icon={faAngleRight} /></span>
                               <Link to='/contact-us'>
                                   Contact Us
                               </Link>
                           </li>
                           <li>
                               <span><FontAwesomeIcon icon={faAngleRight} /></span>
                               <Link to='/my-account'>
                                   User Account
                               </Link>
                           </li>
                       </ul>



                   </div>
                   <div className={styles.socialLinks}>
                       <h2>Social Links</h2>
                       <label></label>
                           <div className={styles.socialMain}>
                               <a href="https://www.facebook.com/vitamindeck/" target="_blank"><FaFacebook/></a>
                               <a href="https://www.instagram.com/_vitamin_deck/" target="_blank"><FaInstagram/></a>
                               <a href="https://vt.tiktok.com/ZSRNP8xEg/" target="_blank"><FaTiktok/></a>
                               <a href="https://www.snapchat.com/add/vitamin_deck" target="_blank"><FaSnapchat/></a>
                           </div>
                   </div>
               </div>
               <div className={styles.copyRite}>
                   <p>© VitaminDeck Crafted by <a href ='https://codex-technologies.com/' target='_blank'>CODEX TECHNOLOGIES</a></p>
               </div>
            </footer>
            {/* <footer className="main-footer">
                <div className={styles.containerdata}>
                    <div className="row">
                        <div className="col-md-2">
                            <div className="footer-lists">
                                <div className="footer-title">
                                    <h4>MY ACCOUNT</h4>
                                </div>
                                <ul >
                                    <li><Link to="/"><span>My Account</span></Link></li>
                                    <li><Link to="/"><span>My Auto Delivery</span></Link></li>
                                    <li><Link to="/"><span>Gift Cards</span></Link></li>
                                    <li><Link to="/"><span>Order Tracking &amp; History</span></Link></li>
                                    <li><Link to="/"><span>Quick Reorder</span></Link></li>
                                    <li><Link to="/"><span>Order By Item Number</span></Link></li>
                                    <li><Link to="/"><span>My Healthy Awards</span></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-lists">
                                <div className="footer-title">
                                    <h4>Shop With Us</h4>
                                </div>
                                <ul >
                                    <li><Link to="/"><span>Store Locator</span></Link></li>
                                    <li><Link to="/"><span>Vitamin Shoppe Brand</span></Link></li>
                                    <li><Link to="/"><span>Quality Promise</span></Link></li>
                                    <li><Link to="/"><span>Certificate of Analysis</span></Link></li>
                                    <li><Link to="/"><span>About Healthy Awards</span></Link></li>
                                    <li><Link to="/"><span>FREE Nutrition Coaching</span></Link></li>
                                    <li><Link to="/"><span>About Auto Delivery</span></Link></li>
                                    <li><Link to="/"><span>Shipping Rates</span></Link></li>
                                    <li><Link to="/"><span>*Promotion Details &amp; Exclusions</span></Link></li>
                                    <li><Link to="/"><span>Returns</span></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-lists">
                                <div className="footer-title">
                                    <h4>Corporate Information</h4>
                                </div>
                                <ul className="hide-footer-list-wrapper">
                                    <li><Link to="/"><span>About The Vitamin Shoppe</span></Link></li>
                                    <li><Link to="/"><span>Careers</span></Link></li>
                                    <li><Link to="/"><span>Press Room</span></Link></li>
                                    <li><Link to="/"><span>Product Recalls</span></Link></li>
                                    <li><Link to="/"><span>New Suppliers</span></Link></li>
                                    <li><Link to="/"><span>Affiliate Program</span></Link></li>
                                    <li><Link to="/"><span>Wellness Partner Program</span></Link></li>
                                    <li><Link to="/"><span>International Licensing</span></Link></li>
                                    <li><Link to="/"><span>Domestic Franchise</span></Link></li>
                                    <li><Link to="/"><span>Opportunities</span></Link></li>
                                    <li><Link to="/"><span>Contact Us</span></Link></li>
                                    <li><Link to="/"><span>Help / FAQs</span></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-lists">
                                <div className="footer-title">
                                    <h4>Policies</h4>
                                </div>
                                <ul className="hide-footer-list-wrapper">
                                    <li><Link to="/"><span>Accessibility Notice</span></Link></li>
                                    <li><Link to="/"><span>CA Transparency In Supply Chains</span></Link></li>
                                    <li><Link to="/"><span>EU/Swiss-U.S. Privacy Shield: Consumer Privacy Policy</span></Link></li>
                                    <li><Link to="/"><span>Privacy Policy (Updated 1/31/2020)</span></Link></li>
                                    <li><Link to="/"><span>Terms of Use (Updated 11/08/2018)</span></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-lists">
                                <div className="footer-title">
                                    <h4>STAY CONNECTED</h4>
                                </div>
                                <ul className="hide-footer-list-wrapper">
                                    <li><Link to="/"><span>Read Our What’s Good Blog</span></Link></li>
                                    <li><Link to="/"><span>Learn About Our Wellness Council</span></Link></li>
                                    <div className={styles.footerNews}>
                                        <p>Get special offers, exclusive promotions, and health information sent directly to your inbox</p>
                                        <div class={styles.NewsLetterInput}>
                                            <Formik
                                                initialValues={{ email: '', }

                                                }

                                                validationSchema={Yup.object({
                                                    email: Yup.string()
                                                        .email('Invalid email address')
                                                        .required('Required'),
                                                })}
                                                onSubmit={(values, { setSubmitting,resetForm }) => {
                                                    console.log(values)
                                                      setTimeout(() => {
                                                        alert(JSON.stringify(values, null, 2));
                                                        setSubmitting(false);

                                                      }, 400);
                                                      resetForm({ values: "" })

                                                    //   Results.post('./marks.json',values).then(response=>{
                                                    //     console.log(response)
                                                    //   }).catch((error)=>{
                                                    //      console.log(error)
                                                    //   })

                                                    }}
                                            >
                                                <Form>
                                                    <div className={styles.FormikFormMain}>
                                                        <div>
                                                            <MyTextInput
                                                                name="email"
                                                                type="email"
                                                                placeholder="jane@formik.com"
                                                                id="email"
                                                            />
                                                        </div>
                                                        <div>
                                                            <button type="submit">Send</button>
                                                        </div>
                                                    </div>
                                                </Form>
                                            </Formik>
                                        </div>
                                        <div class={styles.NewsLetterIcon}>
                                            <Link to="/"><span><i class="fab fa-facebook-f"></i></span></Link>
                                            <Link to="/"><span><i class="fab fa-twitter"></i></span></Link>
                                            <Link to="/"><span><i class="fab fa-instagram"></i></span></Link>
                                            <Link to="/"><span><i class="fab fa-pinterest-square"></i></span></Link>
                                            <Link to="/"><span><i class="fab fa-youtube"></i></span></Link>
                                            <Link to="/"><span><i class="fab fa-linkedin"></i></span></Link>

                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer> */}
        </>
    )
}
export default Footer;
