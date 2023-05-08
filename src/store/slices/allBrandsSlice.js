import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    allBrands:[],
}

const allBrandsSlice = createSlice({
    name: 'allBrands',
    initialState,
    reducers: {
        storeAllBrands(state, action) {
            state.allBrands = action.payload
        },
    },
})

export const { storeAllBrands } = allBrandsSlice.actions
export default allBrandsSlice.reducer