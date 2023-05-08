import { Button, Card, Col, Image, message, Row, Tabs } from "antd";
import {
  PlusOutlined,
  ShoppingCartOutlined,
  DeleteFilled,
  CheckOutlined,
  HeartOutlined
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromWishlist,
  wishListProducts,
} from "../../store/slices/wishlistSlice";
import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { addToCart } from "../../store/slices/cartSlice";
import "./WishList.css";
import WishlistSkeleton from "../../component/Skeletons/Wishlist";
import MediaQuery from "react-responsive";
import { icon } from "@fortawesome/fontawesome-svg-core";

const alignMobile = {
  display: "flex",
  justifyContent: "space-between",
  alignSelf: "center",
  // alignSelf: "baseline",
  alignItems: "center",
};

const WishList = (props) => {
  const { auth, wishlist, isAuthenticated } = useSelector(({ auth }) => auth);
  const { wishlistLoading, wishListP } = useSelector(
    ({ wishlist }) => wishlist
  );
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    !isAuthenticated && history.push("/");
  }, []);
  useEffect(() => {
    let obj = {
      productIds: wishlist,
    };
    dispatch(wishListProducts(obj));
  }, []);
  const removeWishlist = (id) => {
    let object = {
      customerId: auth.user.id,
      productId: id,
    };
    dispatch(removeFromWishlist(object));
    message.info({icon:(<CheckOutlined style={{color:"#0b9545"}} />),content:"Item removed from your wishlist."});
  };
  const add = (product) => {
    dispatch(addToCart(product));
    message.info({icon:(<CheckOutlined style={{color:"#0b9545"}} />),content:"Item added to you cart."});
  };

  return wishlistLoading ? (
    <WishlistSkeleton />
  ) : (
    <div className="site-card-wrapper" style={{ overflow: "hidden" }}>
      <MediaQuery minWidth={1224}>
        <Row gutter={16}>
          <Col offset={4} span={16}>
            {wishListP.length != 0 ? (
              <Card title="Wishlist" bordered={false}>
                {wishListP.map((item) => (
                  <React.Fragment key={item.id.toString()}>
                    <div> 
                    
                      <Row>
                        <Col className="center" span={4}>
                          <Image
                            width={100}
                            src={
                              process.env.REACT_APP_BASE_IMAGE_PATH +
                              item.images[0].path
                            }
                          />
                        </Col>

                        <Col className="m-auto" span={8}>
                          <Link
                            className="pdt-name black fs1-2em fw-500"
                            to={"/product/" + item.slug}
                          >
                            {item.name}
                          </Link>
                          <br />

                          <span
                            className="removeicn pointer"
                            onClick={() => removeWishlist(item.id)}
                          >
                            <DeleteFilled />
                          </span>
                        </Col>

                        <Col className="center m-auto" span={6}> 
                          <span className="fw-500 fs1-2em">
                            PKR. {item.price}
                          </span>
                        </Col>
                        <Col className="center m-auto fs2em" span={6}>
                          <Button
                          className="Whislist-btn"
                            onClick={() => add(item)}
                            value="large"
                            style={{
                              display: "flex",
                              "justify-content": "center",
                              "align-items": "center",
                              "background-color": "#0b9545",
                              "padding": "25px",
                              "width": "70%",
                              "color": "#fff",
                              border: "none",
                            }}
                            type="primary"
                            icon={
                              <>
                                <PlusOutlined className=""/>
                                <ShoppingCartOutlined className="fs2em"/>
                              </>
                            }
                            block={true}
                          />
                        </Col>
                      </Row>
                      <hr />
                    </div>
                  </React.Fragment>
                ))}
              </Card>
            ) : (
              <div className="center pt-100 pb-100 fs2em">
                <HeartOutlined style={{color:"#0b9545"}} />
                <p>There are no favorites yet.</p>
                <p>Add your favorites to wishlist and they will show here.</p>
              </div>
            )}
          </Col>
        </Row>
      </MediaQuery>

      {/* Mobile View */}
      <MediaQuery maxWidth={1224}>
        <Row gutter={16}>
          <Col>
            {wishListP.length != 0 ? (
              <Card title="Wishlist" bordered={false}>
                {wishListP.map((item) => (
                  <React.Fragment key={item.id.toString()}>
                    <div>
                      <Row>
                        <Col className="center" span={9}>
                          <Image
                            width="100%"
                            src={
                              process.env.REACT_APP_BASE_IMAGE_PATH +
                              item.images[0].path
                            }
                          />
                        </Col>

                        <Col style={alignMobile} span={15}>
                          <Link
                            className="black fs1-2em fw-500"
                            to={"/product/" + item.slug}
                          >
                            {item.name}
                          </Link>
                          <span
                            className="pointer"
                            onClick={() => removeWishlist(item.id)}
                          >
                            <DeleteFilled />
                          </span>
                        </Col>

                        <Col className="center m-auto" span={10}>
                          <span className="fw-500 fs1-2em">
                            PKR. {item.price}
                          </span>
                        </Col>
                        <Col className="center m-auto" span={8}>
                          <Button
                            onClick={() => add(item)}
                            value="large"
                            style={{
                              display: "flex",
                              "justify-content": "center",
                              "align-items": "center",
                              "background-color": "#0b9545",
                              "padding": "7px",
                              "width": "100%",
                              "color": "#fff",
                              border: "none",
                            }}
                            type="primary"
                            icon={
                              <>
                                <PlusOutlined />
                                <ShoppingCartOutlined />
                              </>
                            }
                            block={true}
                          />
                        </Col>
                      </Row>
                      <hr />
                    </div>
                  </React.Fragment>
                ))}
              </Card>
            ) : (
              <div className="center pt-100 pb-100 ml-10 mr-10 fs2em">
                <i class="far fa-heart"></i>
                <p>There are no favorites yet.</p>
                <p>Add your favorites to wishlist and they will show here.</p>
              </div>
            )}
          </Col>
        </Row>
      </MediaQuery>
    </div>
  );
};
export default WishList;
