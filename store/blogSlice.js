import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import STATUSES from "../src/globals/status/statuses";

const baseUrl = import.meta.env.VITE_BASE_URL

const blogSlice = createSlice({
    name: "blog",
    initialState: {
        blogs: [],
        singleBlog: null,
        status: null
    },
    reducers: {
        setBlogs(state, action) {
            state.blogs = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        },
        setSingleBlog(state, action) {
            state.singleBlog = action.payload
        }

    }

})

export const { setBlogs, setStatus, setSingleBlog } = blogSlice.actions
export default blogSlice.reducer



export function createBlog(data) {

    return async function createBlogThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await axios.post(`${baseUrl}/api/user/blog`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": localStorage.getItem('token')
                }
            })

            if (response.status === 201) {
                dispatch(setStatus(STATUSES.SUCCESS))
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }

        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }

    }
}

export function readBlog() {
    return async function readBlogThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING))
        try {

            const response = await axios.get(`${baseUrl}/api/user/blog`)
            if (response.status === 200) {
                dispatch(setBlogs(response?.data?.data))
                dispatch(setStatus(STATUSES.SUCCESS))
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }

        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function readSingleBlog(id) {
    return async function readSingleBlogThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await axios.get(`${baseUrl}/api/user/blog/${id}`)
            if (response.status === 200) {
                dispatch(setSingleBlog(response?.data?.data))
                dispatch(setStatus(STATUSES.SUCCESS))
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }

        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }

    }
}

export function deleteBlog(id) {
    return async function deleteBlogThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await axios.delete(`${baseUrl}/api/user/blog/${id}`,{
                headers: {
                    "Authorization": localStorage.getItem('token')
                }
            })
            
            if( response === 200){
                dispatch(setStatus(STATUSES.SUCCESS))
            }
            else{
                dispatch(setStatus(STATUSES.ERROR))
            }

        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}
