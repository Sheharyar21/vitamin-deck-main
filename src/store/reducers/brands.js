import * as actionTypes from '../actions/brandActions'

const initialState = {
    brands: [],
    allBrands:[],
}
const brands = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_BRANDS:
            return {
                ...state,
                brands: action.value
            }
        case actionTypes.STORE_ALL_BRANDS:
            return {
                ...state,
                allBrands: action.value
            }
    }

    return state
}
export default brands
