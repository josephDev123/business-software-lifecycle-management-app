import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

export const PostSlice = createSlice({
    name:'post',
    initialState:[]
    ,
    reducers:{
        addPost:(state, action)=>{
            // state.push(action.payload)
            let payload = action.payload
           return [...state, payload]
        },

        changeState: (state, action)=>{
            const {cardid, boardStatus} = action.payload;
           const index =  state.map(item=>item.id==cardid?item.status = boardStatus:'');
           return index;
    },
}

})

export const{addPost, changeState} = PostSlice.actions;
export default PostSlice.reducer;