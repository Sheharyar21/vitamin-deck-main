// import {Skeleton} from "antd";
import React from "react";
import Skeleton from "react-loading-skeleton";
const ProductCard=()=>{
    return (
        <div className="col-md-3">
            <Skeleton height={200} active />
            <Skeleton active/>
            <Skeleton active/>
            <Skeleton active/>
        </div>
    )
}
export default ProductCard
