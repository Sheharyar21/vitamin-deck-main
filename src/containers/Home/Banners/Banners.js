// import {Carousel} from "react-responsive-carousel";
import React, {useEffect, useState} from "react";
import MediaQuery from 'react-responsive'
// import Banner from "../../../assets/images/banner.gif";
import Banner1 from "../../../assets/images/banner1.jpg";
import Banner2 from "../../../assets/images/banner2.jpg";
import Banner3 from "../../../assets/images/banner3.jpg";
// import Banner4 from "../../../assets/images/banner4.jpeg";
import axios from "axios";
import {Link} from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Banners.css";

const Banners = () => {
    const [banner, setBanner] = useState([])
    // const isBigScreen = useMediaQuery({query: '(min-width: 767px)'})
    useEffect(() => {
        axios.get('/banner').then(response=>
            setBanner(response.data),
            // success => {
            //     setBanners(
            //         success.data.map((ban,index) => (
            //             <React.Fragment key={index}>
            //                 <MediaQuery minWidth={767} >
            //                     {ban.Collection !== null ?
            //                         <div className="banner-image">
            //                             <Link to={`/products/${ban.Collection.slug}`}>
            //                                 <img src={process.env.REACT_APP_BASE_IMAGE_PATH + ban.image}
            //                                      alt="desktop-view"/>
            //                             </Link>
            //                         </div> :
            //                         <div className="banner-image">
            //                             <Link to={`/product/${ban.Product.slug}`}>
            //                                 <img src={process.env.REACT_APP_BASE_IMAGE_PATH + ban.image}
            //                                      alt="desktop-view"/>
            //                             </Link>
            //                         </div>
            //                     }
            //                 </MediaQuery>
            //                 <MediaQuery maxWidth={500}>
            //                     {ban.Collection !== null ?
            //                         <div className="banner-mobile-image">
            //                             <Link to={`/products/${ban.Collection.slug}`}>
            //                                 <img src={process.env.REACT_APP_BASE_IMAGE_PATH + ban.mobileImage}
            //                                      alt="mobile-view"/>
            //                             </Link>
            //                         </div> :
            //                         <div className="banner-mobile-image">
            //                             <Link to={`/product/${ban.Product.slug}`}>
            //                                 <img src={process.env.REACT_APP_BASE_IMAGE_PATH + ban.mobileImage}
            //                                      alt="mobile-view"/>
            //                             </Link>
            //                         </div>
            //                     }
            //                 </MediaQuery>
            //             </React.Fragment>
            //         ))
            //     )
            // }
        ).catch(err => {
                console.log(err)
            }
        )
    }, [])
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <>
        <MediaQuery minWidth={501}>
            <div className="head-banner-main">
                <Carousel
                    // swipeable={false}
                    // draggable={false}
                    showDots={true}
                    responsive={responsive}
                    // ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    // autoPlaySpeed={1000}
                    // keyBoardControl={true}
                    // customTransition="all .5"
                    // transitionDuration={500}
                    // containerClass="carousel-container"
                    // removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    // itemClass="carousel-item-padding-40-px"
                    >
                {banner?.map((item,index)=>{
                    return(
                    <>
                    <div className='head-item'>
                        <Link to={`/products/${item.Collection.slug}`}>
                            <img src={process.env.REACT_APP_BASE_IMAGE_PATH + item.image}  alt="Desktop View"/>
                        </Link>
                    </div>
                    </>
                    )
                }
                )}
                </Carousel>
            </div>
        </MediaQuery>
        
        <MediaQuery maxWidth={500}>
            <div className="head-banner-main-mobile">
                <Carousel
                    // swipeable={false}
                    // draggable={false}
                    showDots={true}
                    responsive={responsive}
                    // ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    // autoPlaySpeed={1000}
                    // keyBoardControl={true}
                    // customTransition="all .5"
                    // transitionDuration={500}
                    // containerClass="carousel-container"
                    // removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    // itemClass="carousel-item-padding-40-px"
                    >
                    {banner.map((item,index)=>{
                        return(
                        <>
                        <div className='head-item'>
                            <Link to={`/products/${item.Collection.slug}`}>
                                <img src={process.env.REACT_APP_BASE_IMAGE_PATH + item.mobileImage} alt="Mobile View"/>
                            </Link>
                        </div>
                        </>
                        )
                    }
                    )}
                </Carousel>
            </div>
        </MediaQuery>
       </>
        // <section className="mainbanner">
        //     <div className="container-fluid">
        //         <div className="row">
        //             <div className="col-md-12">
        //                 <div className="banner-rows">
        //                     <div className="banner-column">
        //                         <Carousel autoPlay="true">
        //                             {banner}
        //                         </Carousel>
        //                     </div>
        //                     <div className="banner-column2">
        //                         <Carousel autoPlay>
        //                             <div>
        //                                 <div className="banner-image">
        //                                     <img src={Banner1}/>

        //                                 </div>
        //                             </div>
        //                             <div>
        //                                 <div className="banner-image">
        //                                     <img src={Banner2}/>
        //                                 </div>
        //                             </div>
        //                             <div>
        //                                 <div className="banner-image">
        //                                     <img src={Banner3}/>
        //                                 </div>
        //                             </div>
        //                         </Carousel>
        //                         <Carousel autoPlay>
        //                             <div>
        //                                 <div className="banner-image">
        //                                     <img src={Banner3}/>

        //                                 </div>
        //                             </div>
        //                             <div>
        //                                 <div className="banner-image">
        //                                     <img src={Banner2}/>
        //                                 </div>
        //                             </div>
        //                             <div>
        //                                 <div className="banner-image">
        //                                     <img src={Banner1}/>
        //                                 </div>
        //                             </div>
        //                         </Carousel>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    );
};
export default Banners;

