import Carousel1 from "react-multi-carousel";
import {React, useEffect, useState} from "react";
import {connect} from 'react-redux'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'react-multi-carousel/lib/styles.css';
import * as actionCreators from '../../store/actions/brandActions'
import {Link} from "react-router-dom";

const Brands = (props) => {
    useEffect(() => {
        props.dispatch(actionCreators.storeBrands())
    }, [])
    const responsive1 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5,
            margin: 10
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 6,
            margin: 10
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
            margin: 10
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
            margin: 10
        }
    };
    return (

        props?.brands.length !==0 &&
        <div className="brand-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-title text-center">
                            <h3>Our Brands</h3>
                        </div>
                        <div>
                            <Carousel1 responsive={responsive1}>
                                {props?.brands.map((brand, index) =>
                                    <Link to={'/products/brands/' + brand.slug}>
                                        <div className="brand-column" key={index}>
                                            <img src={process.env.REACT_APP_BASE_IMAGE_PATH+ brand.image}/>
                                        </div>
                                    </Link>
                                )}
                            </Carousel1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        brands: state.brands.brands
    }

}
export default connect(mapStateToProps)(Brands);
