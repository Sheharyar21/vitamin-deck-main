
import React from "react";
import { useEffect,useState} from "react";
import {useSelector,useDispatch} from 'react-redux'
import { connect } from 'react-redux';
// import * as actionCreators from '../../../store/actions/brandActions'
import * as actionCreators from '../../../../store/actions/brandActions'
import { Navbar, Container, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './BrandMenu.css';

const BrandMenu = (props) => {

    const [drpdown, setDrpdown] = useState(false);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actionCreators.storeAllBrands())
    }, [])
    const {allBrands} = useSelector(({brands}) => brands);
    return (
        <>
            <div className='nav-link brand-mu'>
                <div className="dropdown  brand-mu-drop">
                    <Link to={'/brands'}><button className="dropbtn brand-mu-btn"
                    onMouseEnter={()=>{setDrpdown(true)}}
                    >Brands</button></Link>
                    {drpdown &&  
                        <div className="dropdown-content">
                                <div className="MenuDataImg">
                            {allBrands && allBrands.map((brand, index) => 
                            
                                    <React.Fragment key={index}>
                                        <Link to={'/products/brands/' + brand.slug} >
                                            <div className="Brand-Image">
                                                <div className="content">
                                                    <div className="contentpic">
                                                        <>
                                                            <img src={process.env.REACT_APP_BASE_IMAGE_PATH + brand.image} onClick={()=>{setDrpdown(false)}}/>
                                                        </>
                                                    </div>
                                                </div>
                                                <h2 onClick={()=>{setDrpdown(false)}}>{brand.name}</h2>
                                            </div>
                                        </Link>
                                    </React.Fragment>
                            )}
                                </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
// const mapStateToProps = state => {
//     return {
//         brands: state.brands.brands
//     }
// }
export default BrandMenu;
