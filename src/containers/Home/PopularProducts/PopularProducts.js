import React, {useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel1 from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../../../component/ProductCard/ProductCard";
import * as actionCreators from "../../../store/actions/popularProductActions";
import MediaQuery from "react-responsive";

import {connect} from "react-redux";

const PopularProducts = (props) => {
    useEffect(() => {
        props.dispatch(actionCreators.storePopularProducts());
    }, []);
    const responsive1 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5,
            margin: 10,
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 4,
            margin: 10,
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
            margin: 10,
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 2,
        },
    };

    return (
        props?.popularProducts.length !== 0 && (
            <section className="product-row">
                <MediaQuery minWidth={1224}>
                    <div className="container">
                        <div className="row">
                            <div className="main-title text-center col-md-12">
                                <h3>TOP SELLING</h3>
                            </div>
                            <div className="col-md-12">
                                <Carousel1 className="pb-6" responsive={responsive1}>
                                    {props?.popularProducts.map((product, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <div>
                                                    <ProductCard className="width-sm" product={product}/>
                                                </div>
                                            </React.Fragment>
                                        );
                                    })}
                                </Carousel1>
                            </div>
                        </div>
                    </div>
                </MediaQuery>

                <MediaQuery maxWidth={1224}>
                    <div className="container">
                        <div className="row">
                            <div className="main-title text-center col-md-12">
                                <h3>TOP SELLING</h3>
                            </div>
                            <div className="col-md-12 p-0">
                                <Carousel1
                                    showDots={true}
                                    arrows={false}
                                    className="pb-30"
                                    responsive={responsive1}>
                                    {props?.popularProducts.map((product,index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <div>
                                                    <ProductCard className="width-sm" product={product}/>
                                                </div>
                                            </React.Fragment>
                                        );
                                    })}
                                </Carousel1>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </section>
        )
    );
};

const mapStateToProps = (state) => {
    return {
        popularProducts: state.popularProducts.popularProducts,
    };
};

export default connect(mapStateToProps)(PopularProducts);
