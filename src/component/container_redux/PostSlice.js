import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

export const PostSlice = createSlice({
    name:'post',
    initialState: [
        {
            id:1,
            status:'backlog',
            title:'title 1',
            content:'lorem ipsum'
        },
        {
            id:2,
            status:'backlog',
            title:'title 2',
            content:'lorem ipsum'
        },
        {
          id:3,
          status:'progress',
          title:'title 3',
          content:'lorem ipsum'
      },
      {
          id:4,
          status:'progress',
          title:'title 4',
          content:'lorem ipsum'
      }
    ],

    reducers:{
        addPost:(state, action)=>{
            state.push(action.payload)
        }
    }
    

})

export const{addPost} = PostSlice.actions;
export default PostSlice.reducer;