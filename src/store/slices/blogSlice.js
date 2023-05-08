import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    blogs:[],
    blog:{}
}

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        storeAllBlogs(state, action) {
            let newBlogs = action.payload.map(blog=>({
                createdAt:blog.createdAt,
                description:blog.description.slice(0,200),
                title:blog.title,
                slug:blog.slug,
                })
            )
            state.blogs = newBlogs
        },
        storeSingleBlog(state, action){
            state.blog = action.payload
        }
    },
})

export const { storeAllBlogs, storeSingleBlog } = blogSlice.actions
export default blogSlice.reducer