import Carousel1 from "react-multi-carousel";
import React, {useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'react-multi-carousel/lib/styles.css';
import {connect} from "react-redux";
import * as actionCreators from "../../store/actions/popularProductActions";
import ProductCard from "../../component/ProductCard/ProductCard";

const PopularProduct=(props)=> {
    useEffect(()=>{
        props.dispatch(actionCreators.storePopularProducts())
    },[])
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            margin:10
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            margin:10
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            margin:10
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            margin:10
        }
    };
    return(
        props?.popularProducts.length !==0 &&
        <section className="product-row">
            <div className="container-fluid">
                <div className="row">
                    <div className="main-title text-center">
                        <h3>Our Product</h3>
                    </div>
                </div>
                <div className="">
                    <Carousel1 responsive={responsive}>
                        {props?.popularProducts.map((product)=>
                        <ProductCard product={product} />
                        )}

                    </Carousel1>
                </div>
            </div>
        </section>
    )

}
const mapStateToProps = state => {
    return {
        popularProducts: state.popularProducts.popularProducts
    }

}


export default  connect(mapStateToProps)(PopularProduct)
