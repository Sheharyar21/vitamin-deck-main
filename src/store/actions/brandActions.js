import axios from "axios";
import {React} from "react";

export const STORE_BRANDS = 'STORE_BRANDS'
export const STORE_ALL_BRANDS = 'STORE_ALL_BRANDS'
export const saveBrands = (res) => {
    return {
        type: 'STORE_BRANDS',
        value: res
    }
}
export const saveAllBrands = (res) => {
    return {
        type: 'STORE_ALL_BRANDS',
        value: res
    }
}
//Store Brands
export const storeBrands = () => {
    return dispatch => {
        axios.get('brands')
            .then(response => {
                const results = response.data.map(row => ({
                    key: row.id, // I added this line
                    name: row.name,
                    image: row.image,
                    slug:row.slug,
                    products:row.products

                }))
                dispatch(saveBrands(results))

            })
    }

}
//Store Brands
export const storeAllBrands = () => {
    return dispatch => {
        axios.get('brands/allBrands')
            .then(response => {
                const results = response.data.map(row => ({
                    key: row.id, // I added this line
                    name: row.name,
                    image: row.image,
                    slug:row.slug,
                    products:row.products

                }))
                dispatch(saveAllBrands(results))

            })
    }

}

