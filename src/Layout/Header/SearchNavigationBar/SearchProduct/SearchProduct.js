import React, { useState } from 'react';
import { Input, AutoComplete } from 'antd';
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import "../../../../assets/css/all.css"
import './SearchProduct.css'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

const SearchProduct = (props) => {
    const history = useHistory()
    const [options, setOptions] = useState([]);
    const [value, setValue] = useState('');
    const location = useLocation();

    // useEffect(() => {
    //     console.log(location.pathname);
    //     if(location.pathname === '/wishlist' ) {
    //         setValue('')
    //     } else if(location.pathname === '/cart'){
    //         setValue('')
    //     } else if(location.pathname === '/'){
    //         setValue('')
    //     }else if(location.pathname === '/my-account'){
    //         setValue('')
    //     }
    // }, [location]);

    const handleSearch = (value) => {
        if (value) {
            axios.get('/search?search=' + value).then(data => {
                let products = data.data
                setOptions(
                    products.map((product) => {
                        return {
                            slug:product.slug,
                                    value:product.name,
                            label: (
                                <Link to={'/product/' + product.slug}>
                                    <div className='drop-down-img ' onClick={()=>setValue(product.name)}>
                                        <img src={ product.images[0] && process.env.REACT_APP_BASE_IMAGE_PATH + product.images[0].path}
                                            className='searchImg' />
                                        <p className='searchData'>{product.name}</p>

                                    </div>
                                </Link>
                            )
                        }
                    }
                    ))
            }).catch(err => {
                console.log(err)
            })
        } else {
            setOptions([])
        }
        // setOptions(value ? searchResult(value) : []);
    };

    const onSelect = (value,option) => {
        history.push('/product/'+option.slug)
    };

    return (
        <>
            <div className='InputData'>
                <AutoComplete
                    dropdownMatchSelectWidth={252}
                    // value={value}
                    options={options}
                    onSelect={onSelect}
                    onSearch={handleSearch}
                >
                    <Input.Search size="large" className="inputfield" placeholder="Search Products" enterButton />
                </AutoComplete>
            </div>

        </>
    );
};
export default SearchProduct
