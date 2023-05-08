import {Carousel} from "react-responsive-carousel";
import React from "react";

const ticker=()=>{
    return(
        <section className="marquree-section">
            <div className="marquree-container"  >
                <Carousel autoPlay  >
                    <div>
                        <h1>15% Off $75, 20% Off $100 or 25% Off $125 + Free Shipping. Online Only. Ends 12/07 | Code: GREENYAY</h1>
                    </div>
                    <div>
                        <h1>15% Off $75, 20% Off $100 or 25% Off $125 + Free Shipping. Online Only. </h1>
                    </div>
                </Carousel>

            </div>
        </section>
    )
}
export default ticker
