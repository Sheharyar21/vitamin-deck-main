import React, {useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel1 from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../../../component/ProductCard/ProductCard";
import MediaQuery from "react-responsive";

const BrandsExt = (props) => {


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
        // props.brand.products.length !== 0 && 
        (
            <section className="product-row">
                {/* <MediaQuery minWidth={1224}> */}
                        <div className="row">
                            <div className="main-title text-center col-md-12">
                                <h3>{props.props.name}</h3>
                            </div>
                            <div className="col-md-12">
                                <Carousel1 className="pb-6" responsive={responsive1}>
                                    {props?.props?.products?.map((product,index) => {
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
                   
                {/* </MediaQuery> */}
            </section>
        )
    );
};

export default BrandsExt;







