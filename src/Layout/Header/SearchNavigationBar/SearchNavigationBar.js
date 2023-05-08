import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/all.css";
import logo from "../../../assets/images/logo-min.png";
import Menu from "../Menu/Menu";
import {
  decrement,
  increment,
  remove,
} from "../../../store/actions/cartActions";
import { connect, useSelector } from "react-redux";
import SideDrawer from "../SideDrawer/SideDrawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchProduct from "./SearchProduct/SearchProduct";
import "./SearchNavigationBar.css";
import HumBurger from "../Menu/HumBurger/HumBurger";
import ResponsiveMenu from "../Menu/ResponsiveMenu/ResponsiveMenu";
import MediaQuery, { useMediaQuery } from "react-responsive";
import {
  faHeart,
  faSignInAlt,
  faShoppingCart,
  faMobile,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const NavigationBar = (props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const onClose = () => {
    setVisible(false);
  };

  const {isAuthenticated} = useSelector(({auth})=>auth)
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  return (
    <header className="headermain">
      <div className="navmain">
        <div className="topheader mobile-d-none">
          <div className="headermainCon">
            <div className="row nav-bar primum-series">
              <div className="col-md-2 Logo">
                <Link to="/">
                  <img src={logo} className="main-logo" alt=" logo" />
                </Link>
              </div>

              <div className="col-md-6 extra-class p-0">
                <form>
                  <SearchProduct />
                </form>
              </div>

              <div className="col-md-4 p-0">
                <ul 
                  className="manu-items card-manus menu-Data"
                  style={{ margin: 0, }}
                >
                  {isMobile && (
                    <li>
                      <ResponsiveMenu />
                    </li>
                  )}
                  <li className="MenuCall">
                    <a href="tel:0315-2225848">
                      <FontAwesomeIcon icon={faMobile} />
                      <label>Call Now</label>
                    </a>
                  </li>

                  {isAuthenticated && <>
                  <li className="LogIn">
                    <Link to={"/wishlist"} className="hover-style">
                      <div className="green humburger z-index1" type="primary">
                        <p style={{margin: 0}}>

                          <span>
                            <FontAwesomeIcon
                                style={{color: "#0b9545"}}
                                icon={faHeart}
                            />
                          </span>
                          <label>Wishlist</label>

                        </p>
                      </div>
                    </Link>
                  </li>
                    <li className="LogIn">
                    <Link to={"/my-account"}>
                    <div className="green humburger z-index1" type="primary">
                    <p style={{margin: 0}}>

                    <span>
                    <FontAwesomeIcon
                    style={{color: "#0b9545"}}
                    icon={faUser}
                    />
                    </span>
                    <label>Account</label>

                    </p>
                    </div>
                    </Link>
                    </li>
                  </>}
                  <li className="LogIn">
                    <HumBurger />
                  </li>
                  {/* <li>
                                        <Link to="/">
                                            <span><i style={{color:"#0b9545"}} className="fas fa-circle-notch"></i></span>
                                            <label>Reorder</label>
                                        </Link>
                                    </li> */}
                  <li className="cart-manu cartmenuData">
                    <a href="javascript:void(0)" onClick={showDrawer}>
                      <FontAwesomeIcon
                        style={{ color: "#000" }}
                        icon={faShoppingCart}
                      />
                      <span className="item-counter cart-nu">{props.totalItems}</span>
                    </a>
                    <SideDrawer visible={visible} onClose={() => onClose()} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {isDesktopOrLaptop && <Menu />}
        </div>
      </div>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    cartItems: state.cartReducer.addedItems,
    total: state.cartReducer.total,
    totalItems: state.cartReducer.totalItems,
    isAuthenticated: state.auth.isAuthenticated,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    decrement: (id) => {
      dispatch(decrement(id));
    },
    increment: (id) => {
      dispatch(increment(id));
    },
    remove: (id) => {
      dispatch(remove(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
