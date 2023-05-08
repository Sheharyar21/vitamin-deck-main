import React, {useEffect} from "react";
import * as actionCreators from "../../../store/actions/popularCollectionActions";
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import "./PopularCategory.css";
import BrandsExt from "../Brands/BrandsExt";

const PopularCategories = (props) => {
    useEffect(() => {
        props.dispatch(actionCreators.storePopularCollections())
    }, [])
    return (

        <section className="popular-cateogry">
            <div className="Brandsmain">
                <div className="row mx-0">
                    <div className="main-title text-center">
                        <h3>POPULAR CATEGORIES</h3>
                    </div>
                </div>
                <div className="row">
                {props?.popularCollections &&
                    props?.popularCollections.map((collection,index1) =>
                    <React.Fragment key ={index1}>
                        {collection?.products?.length !== 0 && <BrandsExt

                            props={collection}/>}
                        
                        </React.Fragment>)}
                    <div className="row mx-0" style={{width:"100%"}}>
                        <div className="main-title text-center">
                            <h3>SHOP BY CATEGORY</h3>
                        </div>
                    </div>
                    {props?.popularCollections &&
                    props?.popularCollections.map((collection,index) =>
                    //
                        <React.Fragment key={index}>
                            <div className="col-md-3 popCol">
                                <Link to={'/products/' + collection.slug} style={{width: "100%"}}>
                                    <div className="category-colum">
                                        <div className="category-parent">
                                            <div className="category-image">
                                                <img src={process.env.REACT_APP_BASE_IMAGE_PATH + collection.image}/>
                                            </div>
                                        </div>
                                        {/*<div className="category-name">*/}
                                        {/*    <h3>{collection.name}</h3>*/}
                                        {/*</div>*/}
                                     </div>
                                </Link>
                            </div>
                        </React.Fragment>
                    )
                    }
                </div>
            </div>
        </section>
    )
}
const mapStateToProps = state => {
    return {
        popularCollections: state.popularCollections.popularCollections
       
    }
   
}
export default connect(mapStateToProps)(PopularCategories)
