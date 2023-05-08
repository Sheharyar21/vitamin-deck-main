import ProductImages from "../../assets/images/product1.jpg";
import fillStar from "../../assets/images/fill-sar.png";
import emptyStar from "../../assets/images/empy-sar.png";
import React, { useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
import { addToCartQuantity } from "../../store/slices/cartSlice";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../store/slices/wishlistSlice";
import { addToCart } from "../../store/slices/cartSlice";
import { message, notification, Rate } from "antd";
import PriceFormat from "../PriceFormat/PriceFormat";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  LoadingOutlined,
  HeartFilled,
  HeartTwoTone, CheckOutlined,
} from "@ant-design/icons";
import WordLimit from "react-word-limit";
import MediaQuery from "react-responsive";
import ReactHtmlParser from 'react-html-parser';
import './ProductCard.css'
import WishlistButton from "../WishlistButton/WishlistButton";



const ProductCard = React.memo((props) => {
  const [product, setProduct] = useState("");
  const { loading } = useSelector(({ wishlist }) => wishlist);

  const [image1, setImage1] = useState(
    <img src={ProductImages} className="desktop-images" />
  );
  const [image2, setImage2] = useState(
    <img src={ProductImages} className="hover-images" />
  );
  const [inWishlist, setInwishlist] = useState("");
  const [isLoading, setIsLoading] = useState( false);
  const [rating, setRating] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    setProduct(props.product);
    if(props.product?.Variants[0]?.variantImg?.length !== 0 ) {
      if (props.product?.Variants[0]?.variantImg[1]) {
        setImage1(
            <img
                src={
                  process.env.REACT_APP_BASE_IMAGE_PATH + props.product?.Variants[0]?.variantImg[0].path
                }
                className="desktop-images"
            />
        );
        setImage2(
            <img
                src={
                  process.env.REACT_APP_BASE_IMAGE_PATH + props.product?.Variants[0]?.variantImg[1]?.path
                }
                className="hover-images"
            />
        );

      }else{
        setImage1(
            <img
                src={
                  process.env.REACT_APP_BASE_IMAGE_PATH + props.product?.Variants[0]?.variantImg[0]?.path
                }
                className="desktop-images"
            />
        );
        setImage2(
            <img
                src={
                  process.env.REACT_APP_BASE_IMAGE_PATH + props.product?.Variants[0]?.variantImg[0]?.path
                }
                className="hover-images"
            />
        );

      }

    }else{
      if (props.product?.images[0]) {
        setImage1(
            <img
                src={
                  process.env.REACT_APP_BASE_IMAGE_PATH + props.product?.images[0]?.path
                }
                className="desktop-images"
            />
        );
        setImage2(
            <img
                src={
                  process.env.REACT_APP_BASE_IMAGE_PATH + props.product?.images[0]?.path
                }
                className="hover-images"
            />
        );
      }
      if (props.product?.images[1]) {
        setImage2(
            <img
                src={
                  process.env.REACT_APP_BASE_IMAGE_PATH + props.product?.images[1]?.path
                }
                className="hover-images"
            />
        );
      }
    }

  }, [props.product]);

  useEffect(() => {
    let rating = 0;
    props.product?.reviews.map((review) => {
      rating += parseInt(review.rating);
    });
    rating = rating / props.product?.reviews?.length;
    setRating(rating);
  });

  const add = () => {
    dispatch(addToCart(product));
    message.info({icon:(<CheckOutlined style={{color:"#0b9545 "}} />),content:"Item added to you cart."})
  };
  return (
    <>
      <MediaQuery minWidth={1224}>
        <div className="product-images" key={product?.id}>
          <div className="coupon-main">
            {/*code for discount*/}
            {product?.couponDiscount && product?.couponDiscount?.length!==0 &&  
              <div className="dis-coupon">{`Discount ${product?.couponDiscount[0]?.discount}%`}</div>
            }
          </div>
          <div className="inner-product-column">
            <Link to={"/product/" + product?.slug}>
              {image1}
              {image2}
            </Link>
            <div className="product-content">
              <Link to={"/product/" + product?.slug}>
                <div className="cart-contents">
                  <a className="fontSizeOfProductName" href="">
                    {product && (
                      <WordLimit limit={20}>{product?.name}</WordLimit>
                    )}
                  </a>
                  {/* <div className="fill-star fs-12">
                    <span>
                      <Rate disabled={true} defaultValue={rating} />
                    </span>
                    <span className="fs-12 pl-5">
                      ( {props.product?.reviews.length} )
                    </span>
                  </div> */}
                </div>
              </Link>
              <div className="cartbtns">
                {/*coupon discount code*/}
                {product?.couponDiscount && product?.couponDiscount?.length!==0 ? <>
                <div className="price-strike-del">
                <p>
                  <del><PriceFormat number={product?.Variants ?product?.Variants[0]?.price: product?.price} /></del>
                </p>
                </div>
                <div className="price-strike">
                  <p>
                    <PriceFormat number={product?.Variants ?product?.Variants[0]?.price - Math.round((product?.Variants[0]?.price*product?.couponDiscount[0]?.discount)/100) : Math.round((product?.price*product?.couponDiscount[0]?.discount)/100) }/>
                  </p>
                </div>
                </>:<><div className="price-strike-del">
                </div>
                  <div className="price-strike">
                    <p>
                      <PriceFormat number={product?.Variants ?product?.Variants[0]?.price: product?.price}/>
                    </p>
                  </div>
                </>}
                <div className="AddtoCart">
                  <WishlistButton productId={product?.id}/>

                  {props.product && (props.product?.Variants[0]?.status === "not_available" || props.product?.Variants[0]?.stock===0) ?<button
                      disabled
                      className="btn btn-off btn-style2"
                      style={{color:"#737373"}}
                  >
                    <span className="fs-sm">Out Of Stock</span><i className="fas fa-cart-arrow-down"></i>
                  </button>:<button
                    className="btn btn-off btn-style"
                    onClick={() => add()}>
                    <span className="fs-sm">Add To Cart</span>{" "}
                    <ShoppingCartOutlined/>
                    </button>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={1224}>
        <div
          className="product-images"
          style={{ margin: "0 10px" }}
          key={product?.id}>
          <div className="coupon-main">
            {/*code for discount*/}
            {product?.couponDiscount && product?.couponDiscount?.length!==0 &&  
              <div className="dis-coupon">{`Discount ${product?.couponDiscount[0]?.discount}%`}</div>
            }
          </div>
          {/* <div className="coupon-main">
            <div className="dis-coupon">Discount 20%</div>
          </div> */}
          <div className="inner-product-column">
            <Link to={"/product/" + product?.slug}>
              {image1}
              {image2}
            </Link>
            <div className="product-content">
              <Link to={"/product/" + product?.slug}>
                <div className="cart-contents-mobile">
                  <a
                    className="fontSizeOfProductName center"
                    style={{ "font-size": "0.65rem" }}
                    href="">
                    {product && (
                      <WordLimit limit={20}>{product?.name}</WordLimit>
                    )}
                  </a>
                  {/* <div className="fill-star center fs-12">
                    <span>
                      <Rate style={{ "font-size": "12px" }} />
                    </span>
                    <br />
                    <span className="fs-12 pl-5">( Reviews )</span>
                  </div> */}

                  
                  {/* <div className="product-ratings col-md-6">
                    <div className="fill-star fs-12" >
                      <span>
                        <Rate disabled  />
                      </span>
                      <br />
                      <span className="fs-12 pl-5">(Reviews )</span>
                    </div>
                  </div> */}


                </div>
              </Link>
              <div className={"cbtns"}>
                <div className="price-strike center">
                    
                  <p>
                    <PriceFormat number={product?.Variants ? product?.Variants[0]?.price: product?.price}/>0
                  </p>
                </div>
                <div className="cartbtns">
                  <div>
                    <WishlistButton productId={product?.id}/>
                  </div>
                  {props.product?.Variants[0]?.status === "not_available"
                      ?<i className="fas fa-cart-arrow-down"></i>:<ShoppingCartOutlined
                              className="green"
                              style={{color:"#0b9545"}}
                              onClick={() => add()}
                          />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
    </>
  );
});
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product, quantity) => {
      dispatch(addToCartQuantity(product, quantity));
    },
  };
};
export default connect(null, mapDispatchToProps)(ProductCard);
