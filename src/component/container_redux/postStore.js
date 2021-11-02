import React from 'react'
import { configureStore } from '@reduxjs/toolkit';
import postReducer from './PostSlice';

export const PostStore= configureStore({
    reducer:{
        post:postReducer
    }
})
