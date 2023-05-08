import React from "react";

const Variations=()=>{
    return(
        <div className="other-variration">
        <div className="other-variation-title">
            <h5>Other Sizes and Flavors</h5>
        </div>
        <div className="other-variation-body">
            <div className="variation-repeater">
                <div className="variation-column">
                    <div className="variation-img" style={{ backgroundImage:`url(${ProductImages3})` }}></div>
                    <div className="variation-name">
                        <h5>360 tabs</h5>
                        <h4>Chocolate</h4>
                        <p className="regular-price">Our Price: $26.99</p>
                        <p className="sale-price">Save 57%</p>
                    </div>
                </div>
                <div className="variation-column1">
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    </div>


    )
}

export default Variations
