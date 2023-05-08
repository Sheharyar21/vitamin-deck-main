import "./../Menu.css";
import React, { useState } from "react";
import '../../../../assets/css/all.css'
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    CaretDownFilled,
    CaretRightFilled,
} from "@ant-design/icons";
import Login from "../../../../containers/Auth/Login";
import SignUp from "../../../../containers/Auth/SignUp";

import { logout } from "../../../../store/slices/authSlice";
import SearchProduct from "./../../SearchNavigationBar/SearchProduct/SearchProduct";
import ReactHtmlParser from 'react-html-parser';
import './HumBurger.css'

const HumBurger = (props) => {
    const dispatch = useDispatch()
    const { isAuthenticated } = useSelector(({ auth }) => auth);
    const [isOpen, setIsOpen] = useState(false)
    // const [isSignUp, setIsSignUp] = useState(false)
    const logOut = () => {
        dispatch(logout())
    }


    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <>
            {isAuthenticated?<>
                <div
                    className="green humburger z-index1"
                    type="primary"
                    onClick={() => logOut()}
                >
                    <p style={{margin: 0}}>
                        <Link>
                            <span><i className="fa fa-power-off" style={{color: "#0b9545"}} aria-hidden="true"></i></span>
                            <label>logOut</label>
                        </Link>
                    </p>
                </div>
            </>:<div
                className="green humburger z-index1"
                type="primary"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p style={{margin: 0}}>
                    <Link>
                        <span><i className="fa fa-user" style={{color: "#0b9545"}} aria-hidden="true"></i></span>
                        <label>SignIn / Register</label>
                    </Link>
                </p>
            </div>}
            {/*<Drawer*/}
            {/*    placement="left"*/}
            {/*    closable={false}*/}
            {/*    onClose={onClose}*/}
            {/*    visible={visible}*/}
            {/*    className="scrollbar"*/}

            {/*>*/}
            {/*    /!* <div className="p-5px">*/}
            {/*        <SearchProduct/>*/}
            {/*    </div> *!/*/}

            {/*    <ul className="mobile-align-nr mt0-5em">*/}
            {/*        /!* <li>*/}
            {/*            <a className='contactNo' href="tell:"><i className="fas fa-mobile-alt"></i> +92-323-8848263</a>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <a target="_blank" rel="noreferrer"*/}
            {/*               href="https://m.facebook.com/PakVitamins/">*/}

            {/*                <img src="https://www.spaceloud.com/public/assets/images/facebook1.svg" alt=" facebook"/>*/}
            {/*            </a>*/}
            {/*        </li> *!/*/}
            {/*        /!* <li>*/}
            {/*            <a target="_blank" rel="noreferrer"*/}
            {/*               href="https://www.instagram.com/pakvitaminsofficial/?utm_medium=copy_link">*/}

            {/*                <img src="https://www.spaceloud.com/public/assets/images/insta-circle.svg"*/}
            {/*                     alt=" instagram"/>*/}
            {/*            </a>*/}
            {/*        </li> *!/*/}
            {/*    </ul>*/}

            {/*    <ul className="background">*/}

            {/*        {!isAuthenticated ?*/}
            {/*            <>*/}
            {/*                <li className="mobile-align" onClick={() => setIsOpen(!isOpen)}>*/}
            {/*                    <FontAwesomeIcon icon={faSignInAlt} />*/}
            {/*                    <span className="pointer"><b> Login</b></span>*/}

            {/*                </li>*/}
            {/*                <li className="mobile-align" onClick={() => setIsSignUp(!isSignUp)}>*/}
            {/*                    <FontAwesomeIcon icon={faUser} />*/}

            {/*                    <span className="pointer"><b> Register</b> </span>*/}

            {/*                </li>*/}
            {/*            </> :*/}
            {/*            <>*/}
            {/*                <li>*/}
            {/*                    <Link className="mobile-align white" to="/my-account">*/}
            {/*                        <FontAwesomeIcon icon={faUser} />*/}
            {/*                        <span> My Account </span>*/}
            {/*                    </Link>*/}

            {/*                </li>*/}
            {/*                <li className="pt-10">*/}
            {/*                    <Link className="mobile-align white" to="/wishlist">*/}
            {/*                        <FontAwesomeIcon icon={faHeart} />*/}
            {/*                        <span> My Wishlist </span>*/}
            {/*                    </Link>*/}

            {/*                </li>*/}
            {/*            </>*/}
            {/*        }*/}
            {/*        {*/}
            {/*            isAuthenticated && <li className="mobile-align pt-10" onClick={() => logOut()}>*/}
            {/*                <FontAwesomeIcon icon={faSignOutAlt} />*/}
            {/*                <span className="pointer"> Logout</span>*/}
            {/*            </li>*/}
            {/*        }*/}

            {/*    </ul>*/}

            {/*    <ul className="humburger-manu">*/}
            {/*        {props.menus &&*/}
            {/*            props.menus.map((menu) => (*/}
            {/*                <React.Fragment key={menu.id.toString()}>*/}
            {/*                    <li>*/}
            {/*                        <NavLink style={{ width: "100%" }}*/}
            {/*                            to={`/product-category/${menu.Collection === null ? "empty" : menu.Collection.slug}`}>*/}
            {/*                            {ReactHtmlParser(menu.name)} <CaretDownFilled style={{ "float": "right" }} />*/}
            {/*                            <ul className="subdropdown">*/}
            {/*                                {menu.collections &&*/}
            {/*                                    menu.collections.map((collection) => (*/}
            {/*                                        <React.Fragment key={collection.id.toString()}>*/}
            {/*                                            <li>*/}
            {/*                                                <Link to={"/product-category/" + collection.slug}>*/}
            {/*                                                    {ReactHtmlParser(collection.name)}*/}
            {/*                                                    {collection.parentCollections.length !== 0 && (*/}
            {/*                                                        <CaretRightFilled*/}
            {/*                                                            className="pt-3"*/}
            {/*                                                            style={{ float: "right" }}*/}
            {/*                                                        />*/}
            {/*                                                    )}*/}
            {/*                                                    <ul className="second-manu">*/}
            {/*                                                        {collection.parentCollections.length !== 0 &&*/}
            {/*                                                            collection.parentCollections.map((coll) => (*/}
            {/*                                                                <li>*/}
            {/*                                                                    <Link to={"/product-category/" + coll.slug}>*/}
            {/*                                                                        {ReactHtmlParser(coll.name)}*/}
            {/*                                                                    </Link>*/}
            {/*                                                                </li>*/}
            {/*                                                            ))}*/}
            {/*                                                    </ul>*/}
            {/*                                                </Link>*/}
            {/*                                            </li>*/}
            {/*                                        </React.Fragment>*/}
            {/*                                    ))}*/}
            {/*                            </ul>*/}
            {/*                        </NavLink>*/}
            {/*                    </li>*/}
            {/*                </React.Fragment>*/}
            {/*            ))}*/}
            {/*    </ul>*/}
            {/*</Drawer>*/}
            <Login closeLogin={() => setIsOpen(false)} show={isOpen} />
            {/*<SignUp closeSignUp={() => setIsSignUp(false)} show={isSignUp} />*/}
        </>
    );
};
export default HumBurger;
