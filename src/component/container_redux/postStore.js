import React from 'react'
import { configureStore } from '@reduxjs/toolkit';
import postReducer from './PostSlice';

export default PostStore= configureStore({
    reducer:{
        post:postReducer
    }
})
