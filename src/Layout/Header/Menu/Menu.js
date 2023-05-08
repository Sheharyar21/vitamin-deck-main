import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/menuActions";
import { Link } from "react-router-dom";
// import {Link,NavLink} from "react-router-dom"
import "./Menu.css"
// import {CaretDownFilled, CaretRightFilled} from "@ant-design/icons";
// import HumBurger from "./HumBurger/HumBurger";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import SideDrawer from "../SideDrawer/SideDrawer";
// import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";
// import logo from "../../../assets/images/abc.png";
// import {decode} from 'html-entities';
import { Navbar, Container, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import NavLogo from '../../../assets/images/logo-min.png'
 import brandimg1 from '../../../assets/images/brandimg-1.png';
import brandimg2 from '../../../assets/images/brandimg-2.png';
import brandimg3 from '../../../assets/images/brandimg-3.png';
import brandimg4 from '../../../assets/images/brandimg-4.png';
import brandimg5 from '../../../assets/images/brandimg-5.png';
import brandimg6 from '../../../assets/images/brandimg-6.png';
import brandimg7 from '../../../assets/images/brandimg-7.png';
import brandimg8 from '../../../assets/images/brandimg-8.png';
import brandimg9 from '../../../assets/images/brandimg-9.png';
import brandimg10 from '../../../assets/images/brandimg-10.png';
import brandimg11 from '../../../assets/images/brandimg-11.png';
import brandimg12 from '../../../assets/images/brandimg-12.png';
import HealthImg1 from '../../../assets/images/HealthSolimg-1.jpeg';
import HealthImg2 from '../../../assets/images/HealthSolimg-2.jpeg';
import HealthImg3 from '../../../assets/images/HealthSollmg-3.jpeg';
import HealthImg3a from '../../../assets/images/HealthSollmg-3a.jpeg';
import HealthImg4 from '../../../assets/images/HealthSollmg-4.jpeg';
import HealthImg5 from '../../../assets/images/HealthSollmg-5.jpeg';
import HealthImg6 from '../../../assets/images/HealthSollmg-6.jpeg';
import HealthImg7 from '../../../assets/images/HealthSollmg-7.jpeg';
import HealthImg8 from '../../../assets/images/HealthSollmg-8.jpeg';
import HealthImg9 from '../../../assets/images/HealthSollmg-9.jpeg';
import HealthImg10 from '../../../assets/images/HealthSollmg-10.jpeg';
import HealthImg11 from '../../../assets/images/HealthSollmg-11.jpeg';
import HumBurger from "./HumBurger/HumBurger";
import BrandMenu from './BrandMenu/BrandMenu'

import $ from 'jquery';



const Menu = (props) => {
    const { totalItems } = useSelector(({ cartReducer }) => cartReducer);

    useEffect(() => {
        props.dispatch(actionCreators.storeMenus())
    }, [])

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    const [drpdown, setDrpdown] = useState(false);


    // const BrandImage = [
    //     {
    //         img:brandimg1,
    //         text:"Hello"
    //     },
    //     {
    //         img: "./images_public/brandimg-1.png",
    //         text:"Hello"
    //     }
    //

    return (
        <>
       {/* <HumBurger menus={props.menus}/> */}

            <Navbar expand="sm" className="NavBar-Main">
                <Container className='HeaderContainer'>
                    {/*<Navbar.Brand to="#home">*/}

                    {/*    /!* <img src={NavLogo} /> *!/*/}

                    {/*</Navbar.Brand>*/}
                    {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='me-auto NavMain MainNav'>
                        {
                            props.menus.map((menu,key)=>(
                               
                                <div key={key} className='nav-link'>
                                
                                    <div className="dropdown">
                                        <Link to={`/products/${menu.slug}`}>
                                        <button className="dropbtn" 
                                        onMouseEnter={()=>{setDrpdown(true)}}
                                        >{menu.name}</button>
                                        </Link>
                                        {drpdown &&    
                                            <div className="dropdown-content" 
                                            // onClick={()=>{setDrpdown(prev=>!prev)}}
                                            >
                                                <h2>{menu.name}</h2>
                                                <div className="MenuData">
                                                    {menu.collections.map((col, key2)=>(
                                                        <div key={key2} className="Menu-inner-Data">
                                                        <h3><Link to={`/products/${menu.slug}/${col.slug}`}
                                                        onClick={()=>{setDrpdown(false)}}
                                                        >{col.name}</Link></h3>
                                                        {col.parentCollections.length !== 0 && col.parentCollections.map((pCol, key3)=>(
                                                            <Link key={key3} className="MenuLinks" to={`/products/${col.slug}/${pCol.slug}`}
                                                            onClick={()=>{setDrpdown(false)}}
                                                            >{pCol.name}</Link>
                                                        ))}
                                                    </div>
                                                    ))}
                                                
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            ))
                        }
                         <BrandMenu />
                     
                            {/* <div className='nav-link'>
                            <div class="dropdown">
                                <button class="dropbtn">Vitamins & Supplements</button>
                                <div class="dropdown-content">
                                    <h2>Vitamins & Supplements</h2>
                                    <div class="MenuData">
                                  
                                        <div class="Menu-inner-Data">
                                            <h3><Link to="#">Featured</Link></h3>
                                            <Link to="/">Gummy Vitamins</Link>
                                            <Link to="/">Gummy Vitamins</Link>
                                            <Link to="/">New</Link>
                                            <Link to="/">20% Off Nugenix</Link>
                                            <Link to="/">Explore Black-Led Wellness Brand </Link>
                                        </div>
                                 
                                        <div class="Menu-inner-Data">
                                            <h3><Link to="/">Multivitamins</Link></h3>
                                            <Link to="/">Men's Multivitamins</Link>
                                            <Link to="/">Women's Multivitamins</Link>
                                            <Link to="/">Whole Food Multivitamins</Link>
                                            <Link to="/">Prenatal Multivitamins</Link>
                                            <Link to="/">Shop All</Link>
                                        </div>
                                        <div class="Menu-inner-Data">
                                            <h3><Link to="/">Letter Vitamins</Link></h3>
                                            <Link to="/">Vitamin A</Link>
                                            <Link to="/">Vitamin B</Link>
                                            <Link to="/">Vitamin C</Link>
                                            <Link to="/">Vitamin D</Link>
                                            <Link to="/">Vitamin E</Link>
                                            <Link to="/">Shop All</Link>
                                        </div>
                                        <div class="Menu-inner-Data">
                                            <h3><Link to="/">Supplements</Link></h3>
                                            <Link to="/">Omegas</Link>
                                            <Link to="/">Natural Extract</Link>
                                            <Link to="/">Amino Acids</Link>
                                            <Link to="/">Antioxidants</Link>
                                            <Link to="/">Co Q10/Ubiquinol</Link>
                                            <Link to="/">Collagen</Link>
                                        </div>
                                        <div class="Menu-inner-Data">
                                            <h3><Link to="/">Minerals</Link></h3>
                                            <Link to="/">Zinc</Link>
                                            <Link to="/">Calcium</Link>
                                            <Link to="/">Magnesium</Link>
                                            <Link to="/">Iron</Link>
                                            <Link to="/">Potassium</Link>
                                            <Link to="/">Shop All</Link>
                                        </div>
                                        <div class="Menu-inner-Data">
                                            <h3><Link to="/">Condition Specific</Link></h3>
                                            <Link to="/">Joint Support</Link>
                                            <Link to="/">Women's Health</Link>
                                            <Link to="/">Men's Health</Link>
                                            <Link to="/">Healthy Aging</Link>
                                            <Link to="/">Hair Skin and Nails</Link>
                                            <Link to="/">Bone Health</Link>
                                        </div>
                                        <div class="Menu-inner-Data">
                                            <h3><Link to="/">Popular</Link></h3>
                                            <Link to="/">Fish Oil</Link>
                                            <Link to="/">Black Seed Oil</Link>
                                            <Link to="/">Pet Care</Link>
                                            <Link to="/">NAC - N-Acetyl-L-Cysteine</Link>
                                            <Link to="/">Pill Cases & Accessories</Link>
                                            <Link to="/">Shop All</Link>
                                        </div>
                                        <div class="Menu-inner-Data">
                                            <h3><Link to="/">Children's Health</Link></h3>
                                            <Link to="/">Children's Multivitamins</Link>
                                            <Link to="/">Black Seed Oil</Link>
                                            <Link to="/">Pet Care</Link>
                                            <Link to="/">NAC - N-Acetyl-L-Cysteine</Link>
                                            <Link to="/">Pill Cases & Accessories</Link>
                                            <Link to="/">Shop All</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div> */}
                       
                            
                            {/* <div className='nav-link'>
                                <div class="dropdown">
                                    <button class="dropbtn">Protein & Fitness</button>
                                    <div class="dropdown-content">
                                        <h2>Protein & Fitness</h2>
                                        <div class="MenuData">
                                            <div class="Menu-inner-Data">
                                                <h3><Link to="#">Featured</Link></h3>
                                                <Link to="/">BOGO50 Select Plant Protein Powder</Link>
                                                <Link to="/">New</Link>
                                                <Link to="/">What's Trending</Link>
                                                <Link to="/">Find The Right Protein For You</Link>
                                                <Link to="/">Meet Our Exclusive True Athlete Brand</Link>
                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link to="/">Goals</Link></h3>
                                                <Link to="/">Build Muscle</Link>
                                                <Link to="/">Energy & Endurance</Link>
                                                <Link to="/">Anytime Protein & Fitness</Link>
                                                <Link to="/">Healthy Weight</Link>
                                                <Link to="/">Balanced Wellness</Link>
                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link to="/">Protein Powders</Link></h3>
                                                <Link to="/">Whey Protein</Link>
                                                <Link to="/">Plant Based Protein</Link>
                                                <Link to="/">Natural Protein</Link>
                                                <Link to="/">Casein Protein</Link>
                                                <Link to="/">Other Protein</Link>
                                                <Link to="/">Shop All</Link>
                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link to="/">Performance Supplements</Link></h3>
                                                <Link to="/">Pre-Workout</Link>
                                                <Link to="/">Intra/Post Workout & Recovery</Link>
                                                <Link to="/">Endurance</Link>
                                                <Link to="/">Shop All</Link>
                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link to="/">Popular</Link></h3>
                                                <Link to="/">BCAAs</Link>
                                                <Link to="/">Creatine</Link>
                                                <Link to="/">Nitric Oxide</Link>
                                                <Link to="/">Testosterone Boosters</Link>
                                                <Link to="/">Keto HQ</Link>

                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link to="/">Accessories</Link></h3>
                                                <Link to="/">Shakers Cups</Link>
                                                <Link to="/">Fitness Accessories</Link>
                                                <Link to="/">Apparel</Link>
                                                <Link to="/">Shop All</Link>
                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link to="/">Dranks & Snacks</Link></h3>
                                                <Link to="/">Energy Drinks</Link>
                                                <Link to="/">Protein Drinks</Link>
                                                <Link to="/">Protein Bars</Link>
                                                <Link to="/">Protein Pantry</Link>
                                                <Link to="/">Shop All</Link>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div> */}
                            {/* <div className='nav-link'>
                                <div class="dropdown">
                                    <button class="dropbtn">Digestion</button>
                                    <div class="dropdown-content">
                                        <h2>Digestion</h2>
                                        <div class="MenuData">
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Featured</Link></h3>
                                                <Link to="/">Refrigrated Probiotic</Link>
                                                <Link to="/">New Vthire Advanced Microbiome Support</Link>
                                                <Link to="/">Explore Black-Led Wellness Brands</Link>
                                                <Link to="/">20% Off Garden Of Life Favorites</Link>
                                                <Link to="/">Shop All</Link>
                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link to="/">Probiotics</Link></h3>
                                                <Link to="/">Women's Probiotics</Link>
                                                <Link to="/">Men's Probiotics</Link>
                                                <Link to="/">Children's Probiotics</Link>
                                                <Link to="/">Shop All</Link>
                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link to="/">Enzymes</Link></h3>
                                                <Link to="/">Digestive Enzymes</Link>
                                                <Link to="/">Targeted Enzymes</Link>
                                                <Link to="/">Other Enzymes</Link>
                                                <Link to="/">Shop All</Link>
                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link to="/">Fiber</Link></h3>
                                                <Link to="/">Psyllium</Link>
                                                <Link to="/">Other Fiber</Link>
                                                <Link to="/">Shop All</Link>

                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link to="/">Cleanse & Detox</Link></h3>
                                                <Link to="/">Liver Cleanse</Link>
                                                <Link to="/">Detox Support</Link>
                                                <Link to="/">Detox Teas</Link>
                                                <Link to="/">Shop All</Link>

                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link to="/">Other Digestive Support</Link></h3>
                                                <Link to="/">Milk Thistle</Link>
                                                <Link to="/">Aloe Vera</Link>
                                                <Link to="/">Charcoal</Link>
                                                <Link to="/">Shop All</Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className='nav-link'>
                                <div class="dropdown">
                                    <button class="dropbtn">Healthy Weight</button>
                                    <div class="dropdown-content">
                                        <h2>Healthy Weight</h2>
                                        <div class="MenuData">
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Featured</Link></h3>
                                                <Link to="/">20% Off Force Factor</Link>
                                                <Link to="/">What's Trending</Link>
                                                <Link to="/">Meet Our Exclusive Fitfactor Brand</Link>
                                                <Link to="/">Keto Diet 101</Link>
                                                <Link to="/">Handpicked For Her</Link>
                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Metabolism Support</Link></h3>
                                                <Link to="/">CLA</Link>
                                                <Link to="/">Stimulant-Free Support</Link>
                                                <Link to="/">Thermogenics</Link>
                                                <Link to="/">Shop All</Link>

                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Dietary Support</Link></h3>
                                                <Link to="/">Appetite Support</Link>
                                                <Link to="/">Water Control</Link>
                                                <Link to="/">Carb Blockers</Link>
                                                <Link to="/">Shop All</Link>

                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Meal Replacements</Link></h3>
                                                <Link to="/">Powders</Link>
                                                <Link to="/">Bars</Link>
                                                <Link to="/">Drinks</Link>
                                                <Link to="/">Shop All</Link>

                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Meal Prep</Link></h3>
                                                <Link to="/">Bags</Link>
                                                <Link to="/">Oils & Spices</Link>
                                                <Link to="/">Shop All</Link>

                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Popular</Link></h3>
                                                <Link to="/">Garcinia Cambogia</Link>
                                                <Link to="/">Sweet Sweat</Link>
                                                <Link to="/">Fitness Accessories</Link>
                                                <Link to="/">Keto HQ</Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className='nav-link'>
                                <div class="dropdown">
                                    <button class="dropbtn">Food & Drinks</button>
                                    <div class="dropdown-content">
                                        <h2>Food & Drinks</h2>
                                        <div class="MenuData">
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Featured</Link></h3>
                                                <Link to="/">New</Link>
                                                <Link to="/">What's Trending</Link>
                                                <Link to="/">Check Out Our Exclusive Products</Link>
                                                <Link to="/">BOGO50 BioNutritional Research Group</Link>
                                                <Link to="/">Handpicked For Her</Link>
                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Drinks</Link></h3>
                                                <Link to="/">Energy Drinks</Link>
                                                <Link to="/">Protein Drinks</Link>
                                                <Link to="/">Coffee & Tea</Link>
                                                <Link to="/">Water & Functional Drinks</Link>
                                                <Link to="/">Natural Extract Drinks</Link>
                                                <Link to="/">Shop All</Link>
                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Foods</Link></h3>
                                                <Link to="/">Bars</Link>
                                                <Link to="/">Chips</Link>
                                                <Link to="/">Cookies</Link>
                                                <Link to="/">Snacks</Link>
                                                <Link to="/">Shop All</Link>
                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Pantry</Link></h3>
                                                <Link to="/">Nut Butters & Spreads</Link>
                                                <Link to="/">Baking</Link>
                                                <Link to="/">MCT Oils</Link>
                                                <Link to="/">Cooking Oils</Link>
                                                <Link to="/">Sugar & Sweeteners</Link>
                                                <Link to="/">Shop All</Link>
                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Superfoods</Link></h3>
                                                <Link to="/">Apple Cider Vinegar</Link>
                                                <Link to="/">Coconut Oil</Link>
                                                <Link to="/">Honey</Link>
                                                <Link to="/">Beets</Link>
                                                <Link to="/">Super Fruits</Link>
                                                <Link to="/">Shop All</Link>
                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Smoothie Enhancers</Link></h3>
                                                <Link to="/">Greens</Link>
                                                <Link to="/">Seeds</Link>
                                                <Link to="/">Fruits</Link>
                                                <Link to="/">Boosters</Link>
                                                <Link to="/">Shop All</Link>
                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Green Foods</Link></h3>
                                                <Link to="/">Moringa</Link>
                                                <Link to="/">Wheat Grass</Link>
                                                <Link to="/">Spirulina</Link>
                                                <Link to="/">Green Food Blends</Link>
                                                <Link to="/">Shop All</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className='nav-link'>
                                <div class="dropdown">
                                    <button class="dropbtn">Herbs & Natural Remedies</button>
                                    <div class="dropdown-content">
                                        <h2>Herbs & Natural Remedies</h2>
                                        <div class="MenuData">
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Featured</Link></h3>
                                                <Link to="/">New</Link>
                                                <Link to="/">Vthrive Sleep & Recharge</Link>
                                                <Link to="/">Explore Black-Led Wellness Brands</Link>
                                                <Link to="/">20% Off KAL Favorites</Link>

                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Herbs A-Z</Link></h3>
                                                <Link to="/">Herbs A-E</Link>
                                                <Link to="/">Herbs F-N</Link>
                                                <Link to="/">Herbs O-S</Link>
                                                <Link to="/">Herbs T-Z</Link>
                                                <Link to="/">Shop All</Link>

                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Popular Herbs</Link></h3>
                                                <Link to="/">Ashwagandha</Link>
                                                <Link to="/">Elderberry</Link>
                                                <Link to="/">Mushrooms</Link>
                                                <Link to="/">Turmeric</Link>
                                                <Link to="/">Melatonin</Link>
                                                <Link to="/">Saw Palmetto</Link>

                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Homeopathic Medicines</Link></h3>
                                                <Link to="/">Allergies</Link>
                                                <Link to="/">Oscillococcinum</Link>
                                                <Link to="/">Cold & Flu</Link>
                                                <Link to="/">Pain Relief</Link>
                                                <Link to="/">Single Medicines</Link>
                                                <Link to="/">Shop All</Link>

                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Herbal Teas</Link></h3>
                                                <Link to="/">Green Tea</Link>
                                                <Link to="/">Other Tea</Link>
                                                <Link to="/">Shop All</Link>

                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Natural Solutions</Link></h3>
                                                <Link to="/">Immune Support</Link>
                                                <Link to="/">Energy & Stress Support</Link>
                                                <Link to="/">Brain & Memory</Link>
                                                <Link to="/">Natural Extract</Link>
                                                <Link to="/">Shop All</Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className='nav-link'>
                                <div class="dropdown dropdown-menu">
                                    <button class="dropbtn">Natural Beauty & Skin</button>
                                    <div class="dropdown-content">
                                        <h2>Natural Beauty & Skin</h2>
                                        <div class="MenuData">
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Featured</Link></h3>
                                                <Link to="/">New</Link>
                                                <Link to="/">Natural Extract Beauty</Link>
                                                <Link to="/">Collagen</Link>
                                                <Link to="/">20% Off Ancient Nutrition Collagen</Link>
                                                <Link to="/">Explore Black-Led Wellness Brands</Link>

                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Skin Care</Link></h3>
                                                <Link to="/">Soaps & Washes</Link>
                                                <Link to="/">Lotion</Link>
                                                <Link to="/">Shaving</Link>
                                                <Link to="/">Deodorant</Link>
                                                <Link to="/">Sun & Insect Protection</Link>
                                                <Link to="/">Shop All</Link>
                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Facial Care</Link></h3>
                                                <Link to="/">Cleansers & Toners</Link>
                                                <Link to="/">Moisturizers & Serums</Link>
                                                <Link to="/">Eye Treatments</Link>
                                                <Link to="/">Lip Care</Link>
                                                <Link to="/">Masks</Link>
                                                <Link to="/">Shop All</Link>
                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Popular</Link></h3>
                                                <Link to="/">Natural Extract Beauty</Link>
                                                <Link to="/">Beauty Supplements</Link>
                                                <Link to="/">Men's Personal Care</Link>
                                                <Link to="/">Shop All</Link>
                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Aromatherapy</Link></h3>
                                                <Link to="/">Essential Oils</Link>
                                                <Link to="/">Carrier Oils</Link>
                                                <Link to="/">Diffusers</Link>
                                                <Link to="/">Essential Oil Accessories</Link>
                                                <Link to="/">Himalayan Salt Lamps</Link>
                                                <Link to="/">Shop All</Link>
                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Hair</Link></h3>
                                                <Link to="/">Shampoo</Link>
                                                <Link to="/">Conditioner</Link>
                                                <Link to="/">Color</Link>
                                                <Link to="/">Styling</Link>
                                                <Link to="/">Shop All</Link>
                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Oral Care</Link></h3>
                                                <Link to="/">Toothpaste</Link>
                                                <Link to="/">Mouthwash</Link>
                                                <Link to="/">Shop All</Link>
                                            </div>
                                            <div class="Menu-inner-Data">
                                                <h3><Link>Oral Care</Link></h3>
                                                <Link to="/">Toothpaste</Link>
                                                <Link to="/">Mouthwash</Link>
                                                <Link to="/">Shop All</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className='nav-link'>
                                <div class="dropdown">
                                    <button class="dropbtn">Best Sellers</button>
                                    <div class="dropdown-content">
                                        <h2>Best Sellers</h2>
                                        <Link to="#">Link 1</Link>
                                        <Link to="#">Link 1</Link>
                                        <Link to="#">Link 1</Link>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className='nav-link'>
                                <div class="dropdown">
                                    <button class="dropbtn">Brands</button>
                                    <div class="dropdown-content">
                                        <h2>Brands</h2>
                                     
                                                <div class="MenuDataImg">
                                                <Link to="/">
                                                    <div className="Brand-Image">
                                                        
                                                        <div class="content">
                                                            <img src={brandimg1} />
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                </Link>
                                                <Link to="/">
                                                    <div className="Brand-Image">
                                                        <img src={brandimg2} />
                                                        <h3>Vthrive</h3>

                                                    </div>
                                                </Link>
                                                <Link to="/">
                                                    <div className="Brand-Image">
                                                        <img src={brandimg3} />
                                                        <h3>BodyTech</h3>

                                                    </div>
                                                </Link>
                                                <Link to="/">
                                                    <div className="Brand-Image">
                                                        <img src={brandimg4} />
                                                        <h3>BodyTech Elite</h3>

                                                    </div>
                                                </Link>
                                                <Link to="/">
                                                    <div className="Brand-Image">
                                                        <img src={brandimg5} />
                                                        <h3>Plnt</h3>

                                                    </div>
                                                </Link>
                                                <Link to="/">
                                                    <div className="Brand-Image">
                                                        <img src={brandimg6} />
                                                        <h3>Fitfactor</h3>

                                                    </div>
                                                </Link>
                                                <Link to="/">
                                                    <div className="Brand-Image">
                                                        <img src={brandimg7} />
                                                        <h3>True Athlete</h3>

                                                    </div>
                                                </Link>
                                                <Link to="/">
                                                    <div className="Brand-Image">
                                                        <img src={brandimg8} />
                                                        <h3>True You</h3>

                                                    </div>
                                                </Link>
                                                <Link to="/">
                                                    <div className="Brand-Image">
                                                        <img src={brandimg9} />
                                                        <h3>Alani Nu</h3>

                                                    </div>
                                                </Link>
                                                <Link to="/">
                                                    <div className="Brand-Image">
                                                        <img src={brandimg10} />
                                                        <h3>HD MUSCLE</h3>

                                                    </div>
                                                </Link>
                                                <Link to="/">
                                                    <div className="Brand-Image">
                                                        <img src={brandimg11} />
                                                        <h3>Solgar</h3>

                                                    </div>
                                                </Link>
                                                <Link to="/">
                                                    <div className="Brand-Image">
                                                        <img src={brandimg12} />
                                                        <h3>Garden Of Life</h3>

                                                    </div>
                                                </Link>
                                            </div>
                                         

                                    </div>
                                </div>
                            </div>
                            <div className='nav-link'>
                                <div class="dropdown">
                                    <button class="dropbtn">Health Solutions</button>
                                    <div class="dropdown-content">
                                        <h2>Health Solutions</h2>
                                        <div class="MenuDataImg">
                                            <Link to="/">
                                                <div className="Brand-Image">
                                                    <img src={HealthImg1} />
                                                    <h3>Brain & Memory Essentials</h3>
                                                </div>
                                            </Link>
                                            <Link to="/">
                                                <div className="Brand-Image">
                                                    <img src={HealthImg2} />
                                                    <h3>Workout 101 Essentials</h3>
                                                </div>
                                            </Link>
                                            <Link to="/">
                                                <div className="Brand-Image">
                                                    <img src={HealthImg3} />
                                                    <h3>Stress Management Essentials</h3>
                                                </div>
                                            </Link>
                                            <Link to="/">
                                                <div className="Brand-Image">
                                                    <img src={HealthImg3a} />
                                                    <h3>Heart Health Essentials</h3>
                                                </div>
                                            </Link>
                                            <Link to="/">
                                                <div className="Brand-Image">
                                                    <img src={HealthImg4} />
                                                    <h3>Foundational Health Essentials</h3>
                                                </div>
                                            </Link>
                                            <Link to="/">
                                                <div className="Brand-Image">
                                                    <img src={HealthImg5} />
                                                    <h3>Digestive Health Essentials</h3>
                                                </div>
                                            </Link>
                                            <Link to="/">
                                                <div className="Brand-Image">
                                                    <img src={HealthImg6} />
                                                    <h3>Foundational Health Essentials</h3>
                                                </div>
                                            </Link>
                                            <Link to="/">
                                                <div className="Brand-Image">
                                                    <img src={HealthImg7} />
                                                    <h3>Immune Support Essentials</h3>
                                                </div>
                                            </Link>
                                            <Link to="/">
                                                <div className="Brand-Image">
                                                    <img src={HealthImg8} />
                                                    <h3>Sleep & Mood Essentials</h3>
                                                </div>
                                            </Link>
                                            <Link to="/">
                                                <div className="Brand-Image">
                                                    <img src={HealthImg9} />
                                                    <h3>Joint Support Essentials</h3>
                                                </div>
                                            </Link>
                                            <Link to="/">
                                                <div className="Brand-Image">
                                                    <img src={HealthImg10} />
                                                    <h3>Energy & Vitality Essentials</h3>
                                                </div>
                                            </Link>
                                            <Link to="/">
                                                <div className="Brand-Image">
                                                    <img src={HealthImg11} />
                                                    <h3>Seasonal Defense Essentials</h3>
                                                </div>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div> */}

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

        // <div className="main-manu-bar">
        //     <div className="container-fluid">
        //         <div className="manu-btns">
        //             <HumBurger menus={props.menus}/>

        //             <Link className="z-index1" to="/">
        //                 <img src={logo} style={{"width": "9em"}} className="main-logo" alt="logo"/>
        //             </Link>


        //             <ul className="z-index1 manu-items card-manus f-right">
        //                 <li className="cart-manu">
        //                     <p onClick={showDrawer}>
        //                         <FontAwesomeIcon icon={faShoppingCart}/>
        //                         <span className="item-counter">{totalItems}</span>
        //                     </p>
        //                     <SideDrawer visible={visible} onClose={() => onClose()}/>
        //                 </li>
        //             </ul>
        //         </div>
        //         <ul className="main-manu">
        //             {
        //                 props.menus &&
        //                 props.menus.map((menu) => (
        //                         <React.Fragment key={menu.id.toString()}>
        //                             <li>
        //                                 <NavLink
        //                                     to={`/product-category/${menu.Collection === null ? "empty" : menu.Collection.slug}`}>{decode(menu.name)}
        //                                     {menu.collections.length !==0 && <CaretDownFilled/>}
        //                                     <ul className="subdropdown">
        //                                         {menu.collections &&
        //                                         menu.collections.map((collection) =>
        //                                             <React.Fragment key={collection.id.toString()}>
        //                                                 <li>
        //                                                     <Link
        //                                                         to={'/product-category/' + collection.slug}>{decode(collection.name)}
        //                                                         {collection.parentCollections.length !== 0 &&
        //                                                         <CaretRightFilled className="pt-3"
        //                                                                           style={{float: "right"}}/>}
        //                                                         <ul className="second-manu">
        //                                                             {
        //                                                                 collection.parentCollections.length !== 0 &&
        //                                                                 collection.parentCollections.map((coll) =>
        //                                                                     <li>
        //                                                                         <Link
        //                                                                             to={'/product-category/' + coll.slug}>
        //                                                                             {decode(coll.name)}
        //                                                                         </Link>
        //                                                                     </li>
        //                                                                 )
        //                                                             }
        //                                                         </ul>
        //                                                     </Link>
        //                                                 </li>
        //                                             </React.Fragment>
        //                                         )
        //                                         }
        //                                     </ul>
        //                                 </NavLink>
        //                             </li>
        //                         </React.Fragment>
        //                     )
        //                 )
        //             }
        //         </ul>
        //     </div>
        // </div>
    )
}
const mapStateToProps = state => {
    return {
        menus: state.menus.menus
    }
}
export default connect(mapStateToProps)(Menu);
