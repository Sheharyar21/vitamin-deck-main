import React, {useEffect, useState} from 'react';
import {Empty, message} from 'antd'
import {storeAllBrands} from "../../store/slices/allBrandsSlice";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import ProductsPage from "../../component/Skeletons/ProductsPage";
import Filters from "../BrandProducts/Filters/Filters";
import ProductCard from "../../component/ProductCard/ProductCard";
import BrandCard from "../../component/BrandCard/BrandCard";

function AllBrands(props) {
    const dispatch = useDispatch()

    const [loading, setLoading]= useState(false)
    useEffect(()=>{
        setLoading(true)
        axios.get('/brands/allBrands/').then(success=>{
            dispatch(storeAllBrands(success.data))
            console.log(success)
            setLoading(false)
        }).catch(error=>{
            setLoading(false)
            message.error('unable to retrieve data',error)
        })
       dispatch(storeAllBrands())
    },[])

    const {allBrands}= useSelector(({allBrands})=>allBrands)
    
    return (
        
    
loading ? <ProductsPage/> :
            
            allBrands? <div>
                <section className="product-row">
                    <div className="container-fluid">
                        <div className="row">
                            {/*<Filters/>*/}
                            <div className="col-md-9" style={{margin:'0 auto'}}>
                                    <div className="row">
                                        {allBrands.map((brand,index) =>
                                            <React.Fragment key={index}>
                                                <div style={{"width": "50%"}}
                                                     className="col-md-3 brandCol mb-20 margin-conflict">
                                                    <BrandCard style={{"margin": "0px !important"}}
                                                                 brand={brand}/>
                                                </div>
                                            </React.Fragment>
                                        )}
                                    </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div> : <div className="text-center">
                <Empty/>
            </div>
    )

}

export default AllBrands;