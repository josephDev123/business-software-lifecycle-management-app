import React from 'react'
import { configureStore } from '@reduxjs/toolkit';
import postReducer from './PostSlice';
import {saveState} from './LocalStorage';
import { throttle } from 'throttle-debounce';

export const PostStore= configureStore({
    reducer:{
        post:postReducer
    }
})

PostStore.subscribe(()=>{
    saveState(PostStore.getState().post);
})

// PostStore.subscribe(1000,throttle(()=>{
//     saveState(PostStore.getState().post);
// }))
