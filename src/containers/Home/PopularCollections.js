import {React, useEffect} from "react";
import {connect} from 'react-redux'
import * as actionCreators from "../../store/actions/popularCollectionActions";
import {Link} from "react-router-dom";

const PopularCollection = (props) => {
    useEffect(() => {
        props.dispatch(actionCreators.storePopularCollections())
    }, [])
    return (
        props?.popularCollections.length !==0 &&
        <section className="popular-cateogry">
            <div className="container-fluid">
                <div className="row">
                    <div className="main-title text-center">
                        <h3>Popular Category</h3>
                    </div>
                </div>

                <div className="row">
                    {
                        props?.popularCollections.map((collection, index) =>
                            <div className="col-md-3" key={index}>
                                <Link style={{width:  '100%' }} to={'/products/' + collection.slug}>
                                <div className="category-colum">
                                    <div className="category-image"
                                         style={{backgroundImage: `url(${process.env.REACT_APP_BASE_IMAGE_PATH+ collection.image})`}}></div>
                                    <div className="category-name">
                                        <h3>{collection.name}</h3>
                                    </div>
                                </div>
                                </Link>

                            </div>
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
export default connect(mapStateToProps)(PopularCollection)
