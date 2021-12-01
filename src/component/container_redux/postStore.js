import React from 'react'
import { configureStore } from '@reduxjs/toolkit';
import postReducer from './PostSlice';
import {saveState} from './LocalStorage';

export const PostStore= configureStore({
    reducer:{
        post:postReducer
    }
})

PostStore.subscribe(()=>{
    saveState(PostStore.getState().post);
})
