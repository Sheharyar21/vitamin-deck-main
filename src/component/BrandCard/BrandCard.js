import React, { useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { message, notification, Rate } from "antd";
import './BrandCard.css'
import {
    HeartOutlined,
    ShoppingCartOutlined,
    LoadingOutlined,
    HeartFilled,
} from "@ant-design/icons";
import WordLimit from "react-word-limit";
import MediaQuery from "react-responsive";

const BrandCard = React.memo((props) => {

    return (
        <>
            <MediaQuery minWidth={1224}>
                <div className="brand-images" key={props.brand.id}>
                    <div className="inner-product-column">
                        <div className="brand-pic-main">
                            <Link to={"/brand/" + props.brand.slug}>
                                <div className="brand-image">
                                    <img src={process.env.REACT_APP_BASE_IMAGE_PATH+props.brand.image} alt={'brand-image'}/>
                                </div>
                            </Link>
                        </div>
                        <div className="product-content">
                            <Link to={"/brand/" + props.brand.slug}>
                                <div className="cart-contents">
                                    <a className="fontSizeOfProductName" href="">
                                        {props.brand && (
                                            <WordLimit limit={20}>{props.brand.name}</WordLimit>
                                        )}
                                    </a>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </>
    );
});

export default BrandCard
