import React, {useEffect, useState} from 'react';
import {CheckOutlined, HeartFilled, HeartOutlined, LoadingOutlined} from "@ant-design/icons";
import {addToWishlist, removeFromWishlist} from "../../store/slices/wishlistSlice";
import {message, notification} from "antd";
import {useSelector,useDispatch} from "react-redux";

function WishlistButton(props) {
    const [inWishlist, setInwishlist] = useState("");
    const { auth, isAuthenticated, wishlist } = useSelector(({ auth }) => auth);
    const { loading } = useSelector(({ wishlist }) => wishlist);
    const [isLoading, setIsLoading] = useState( false);

    const dispatch = useDispatch()
    useEffect(() => {
        if (wishlist.length) {
            const inWishlist = wishlist.find(
                (wishlist) => wishlist === props.productId
            );
            setInwishlist(inWishlist);
        }
    }, [wishlist]);

    useEffect(() => {
        setIsLoading(loading);
    }, [loading]);

    const addWishlist = () => {
        if (isAuthenticated) {
            let object = {
                customerId: auth.user.id,
                productId: props.productId,
            };
            setIsLoading(true);
            dispatch(addToWishlist(object));
            message.info({icon:(<CheckOutlined style={{color:"#0b9545 "}} />),content:"Item added to your wishlist."})
            setIsLoading(false);
        } else {
            notification["error"]({
                message: "Wishlist",
                description: "Please login to add to wishlist.",
            });
        }
    };
    const removeWishlist = () => {
        let object = {
            customerId: auth.user.id,
            productId: props.productId,
        };
        dispatch(removeFromWishlist(object));
        message.info({icon:(<CheckOutlined style={{color:"#0b9545"}} />),content:"Item removed from your wishlist"})
    };
    return (
        <div>
            {inWishlist ? (
                <button
                    className="whistlist-btns"
                    onClick={() => removeWishlist()}>

                        <HeartFilled />

                </button>
            ) : (
                <button
                    className="whistlist-btns"
                    onClick={() => addWishlist()}>
                    {loading ? <LoadingOutlined /> : <HeartOutlined />}
                </button>
            )}
        </div>
    );
}

export default WishlistButton;