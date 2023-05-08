import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import axios from "axios";
import { saveProduct } from "../../store/actions/productActions";
import { addToCartQuantity } from "../../store/slices/cartSlice";
import { connect } from "react-redux";
// import DescriptionAndReview from "./DescriptionAndReview";
import { message, Rate } from "antd";
import PriceFormat from "../../component/PriceFormat/PriceFormat";
import { ProductDetailSkeleton } from "../../component/Skeletons/ProductDetail";
// import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import HTMLReactParser from "html-react-parser";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
// import './ProductDetail.css';
// import ImageB from '../../assets/images/abc.jpg';
// import nextIcon from "../../assets/images/next-icon.png";
import ImageMagnifier from "./ImageMagnifier/ImageMagnifier";
import './ProductDetail.css'
import {toast} from "react-toastify";
import DescriptionAndReview from './DescriptionAndReview'
import {
  CheckOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";


var img, glass, w, h, bw;
class ProductDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      value: 0,
      product: "",
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      const slug = this.props.match.params.slug;
      axios.get("product/" + slug).then((response) => {
        this.props.saveProduct(response.data);
        this.setState({
          product: response.data,
        });
      });
    }
  }


  componentDidMount() {
    const slug = this.props.match.params.slug;
    axios.get("product/" + slug).then((response) => {

      let rate = 0
      response.data.reviews.map(review => {
        rate = rate += parseInt(review.rating)
      });
      rate = rate / response.data.reviews.length
      this.setState({ value: rate })
      this.props.saveProduct(response.data);
      this.setState({
        product: response.data,
      });

    });
  }

  addToCart() {
    const { product } = this.state;
    this.props.addToCart(product, this.state.counter);
    // message.success("Item added to you cart");
    message.info({icon:(<CheckOutlined style={{color:"#0b9545"}} />),content:"Item added to you cart."})
  }
 

  increment() {
    let count = this.state.counter + 1;
    this.setState({
      counter: count,
    });
  }

  decrement() {
    let count = this.state.counter - 1;
    if (count != 0) {
      this.setState({
        counter: count,
      });
    }
  }



    render() {
        const { product } = this.state;

    return product ? (
      <>
        {/* <MediaQuery minWidth={1224}> */}
          <section className="product-row">
            <div className="container">
              <div className="row m-30-100">
                <div className="col-md-5">

                  {/*------ Brand Magnifier Image -------- */}
                  {/* discount code*/}
                  <div className="img-magnifier-container">
                    {product.couponDiscount.length !== 0  &&  <div className="det-coupon-main">
                      <div className="det-dis-coupon">{`Discount ${product.couponDiscount[0].discount}%`}</div>
                    </div>}
                    <ImageMagnifier ImgSrcs={product.Variants[0].variantImg[0] !== 0 ?
                      process.env.REACT_APP_BASE_IMAGE_PATH + product.images[0].path :
                     process.env.REACT_APP_BASE_IMAGE_PATH + product.images[0].path}
                       ImgCarousel={product.images}
                       />

                  </div>
                </div>

                <div className="col-md-7 productBrand">
                  <div className="row">
                    <div className="col-md-12 brandheading">
                      <h4 className="fs-14">
                        Brand :
                      </h4>
                      <span>
                        <Link className="brand-Name" to={`/${product.Brand.name}`}>
                          {product.Brand.name}
                        </Link>
                      </span>
                    </div>
                    <div className="col-md-12">
                      <h3 className="fs-19 f-weight-600 mb-15 mt-15 Product-Name">
                        {product.name}
                      </h3>
                    </div>
                    
                    <div className="product-ratings col-md-6">
                      <div className="fill-star fs-12">
                        <span>
                          <Rate disabled defaultValue={this.state.value} />
                        </span>
                        <span className="fs-12 pl-5">
                          ( {product.reviews.length} Reviews )
                        </span>
                      </div>
                    </div>
                    {/*coupon discount code*/}
                    {product.couponDiscount.length !== 0 ? <><div className="col-md-12 mb-17 Product-Pric">
                      <h4 className="pdtprice">Price: </h4>
                      <h4 className="pdtprice fs-17 pr-2 mb-0 f-weight-600">
                        <PriceFormat number={product.Variants ? product.Variants[0].price - Math.round((product.Variants[0].price*product.couponDiscount[0].discount)/100) : Math.round((product.price*product.couponDiscount[0].discount)/100) }/>
                      </h4>
                        <del><PriceFormat number={product.Variants ?product.Variants[0].price: product.price} /></del>
                    </div>

                    </>:<>
                      <div className="col-md-12 mb-17 Product-Pric">
                        <h4 className="pdtprice">Price: </h4>
                        <h4 className="pdtprice fs-17 pr-2 mb-0 f-weight-600">
                          <PriceFormat number={product.Variants.length !== 0 ? product.Variants[0].price+.00 : product.price+.00} />
                        </h4>
                      </div>
                    </>}


                    <div className="col-md-12 mb-17">
                    <div className="col-md-12 general-content">
                    <h6>
                        <b className="fs-15 pro-option">Availability:</b>{" "}
                        <span className="fs-14 avil-opti">{product.Variants[0].status === "not_available" || product.Variants[0].stock===0 ? "Out Of Stock" : " In Stock"}</span>
                      </h6>
                    <div className="row Product-Addto">
                
                {product.Variants[0].status !== "not_available" ?
                  <>
                    <div className="bg-color col-md-5 qtystr">
                      <div className="row">
                        <p
                          onClick={this.decrement}
                          className="addtoPri center pointer fs-16 col-md-2 br-0 black bg-gray p-10"
                          field="quantity">
                          <b>–</b>
                        </p>
                        <input
                          type="text"
                          name="quantity"
                          className="productcard-input center fs-16 qty col-md-3 bg-gray border-n cursor-default p-10 qtystr"
                          value={this.state.counter}
                        />
                        <p
                          onClick={this.increment}
                          className="addtoPri center pointer black col-md-2 br-0 bg-gray p-10 fs-16"
                          field="quantity">
                          <b>+</b>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-7 add2cartbtn">
                      {
                        product.Variants[0].status === "not_available" || product.Variants[0].stock===0 ?    <button
                            onClick={this.addToCart}
                            disabled={true}
                            className="btn btn-off btn-style">
                          <span className="fs-sm">Out Of Stock</span>{" "}
                        </button>:    <button
                            onClick={this.addToCart}
                            className="btn btn-off btn-style">
                          <span className="fs-sm">Add To Cart</span>{" "}
                          <ShoppingCartOutlined/>
                        </button>
                      }

                    </div>
                  </>
                  : <>
                    <button
                      disabled
                      style={{ padding: "10px", backgroundColor: "#ccc", color: '#000', border: 'none' }}
                      className="green-btn w-100p h-100p">
                      <i className="fas fa-shopping-bag pr-5 fs-14"></i> Out of Stock
                    </button>
                  </>
                }
               
              </div>
                  <div className="Product-De">
                      {product.description ? HTMLReactParser(product.description):'No Description'}
                    </div>
                    </div>
                   
                    </div>

                  </div>

                  {/*variaiton here*/}
                 
                </div>
              </div>
            </div>
          </section>
        {/* </MediaQuery> */}
     
        <DescriptionAndReview
          product={product}
          description={product.description}
          reviews={product.reviews}
        />
      </>
    ) : (
      <ProductDetailSkeleton />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product, quantity) => {
      dispatch(addToCartQuantity({ product, quantity }));
    },
    saveProduct: (product) => {
      dispatch(saveProduct(product));
    },
  };
};
export default connect(null, mapDispatchToProps)(ProductDetail);
