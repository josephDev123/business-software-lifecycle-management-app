import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

export const PostSlice = createSlice({
    name:'post',
    initialState: [],
    reducers:{
        addPost:(state, action)=>{
            // state.push(action.payload)
            return [...state, action.payload];
        },

        changeState: (state, action)=>{
            const {cardid, boardStatus} = action.payload;
            return state.map(item =>{
                if (item.id !== cardid) {
                    return {...item};
                }
                return {
                    ...item, 
                    ...item.status=boardStatus
                }
            })
    },
}

})

export const{addPost} = PostSlice.actions;
export default PostSlice.reducer;