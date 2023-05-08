import ProductCard from "../../component/ProductCard/ProductCard";
import React from "react";
import {connect} from "react-redux";
const RelatedProduct=(props)=>{
    return(
        <section className="product-row">
            <div className="container">
                <div className="row">
                    <div className="main-title text-center">
                        <h3>Related Product</h3>
                    </div>
                </div>
                <div className="row">
                    {props.popularProducts.map((product) =>
                        <div className="col-md-4">
                            <ProductCard product={product}/>
                        </div>
                    )}
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
export default connect(mapStateToProps)(RelatedProduct)
