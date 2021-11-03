import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

export const PostSlice = createSlice({
    name:'post',
    initialState:[]
    ,
    reducers:{
        addPost:(state, action)=>{
            // state.push(action.payload)
           return [...state, action.payload]
        },

        changeState: (state, action)=>{
            const {cardid, boardStatus} = action.payload;
            // return state.map(item=>item.id === cardid? {...item, status:boardStatus}:{...item})
            return state.map(item=> {
                if(item.id === cardid){
                    return {...item, status:boardStatus}
                }else{
                    return item
                }
            })
    },
}

})

export const{addPost, changeState} = PostSlice.actions;
export default PostSlice.reducer;