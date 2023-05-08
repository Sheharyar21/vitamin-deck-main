import {Carousel} from "react-responsive-carousel";
import Banner1 from "../../assets/images/banners/banner1.jpg";
import Banner2 from "../../assets/images/banners/banner2.jpg";
import Banner3 from "../../assets/images/banners/banner3.jpg";
import Banner4 from "../../assets/images/banners/banner4.jpg";
import React from "react";

const banners=()=>{
    return (
        <section className="mainbanner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="banner-rows">
                            <div className="banner-column">
                                <Carousel autoPlay  >
                                    <div>
                                        <div className="banner-image" >
                                            <img src={Banner1}/>

                                        </div>
                                    </div>
                                    <div>
                                        <div className="banner-image" >
                                            <img src={Banner2}/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="banner-image" >
                                            <img src={Banner3}/>
                                        </div>
                                    </div>
                                </Carousel>

                            </div>
                            <div className="banner-column2">
                                <Carousel autoPlay  >
                                    <div>
                                        <div className="banner-image" >
                                            <img src={Banner3}/>

                                        </div>
                                    </div>
                                    <div>
                                        <div className="banner-image" >
                                            <img src={Banner2}/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="banner-image" >
                                            <img src={Banner4}/>
                                        </div>
                                    </div>
                                </Carousel>
                                <Carousel autoPlay  >
                                    <div>
                                        <div className="banner-image" >
                                            <img src={Banner4}/>

                                        </div>
                                    </div>
                                    <div>
                                        <div className="banner-image" >
                                            <img src={Banner1}/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="banner-image" >
                                            <img src={Banner3}/>
                                        </div>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default banners
