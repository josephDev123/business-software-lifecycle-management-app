import React from 'react'
import { createSlice } from '@reduxjs/toolkit';
import {loadState} from './LocalStorage';

export const PostSlice = createSlice({
    name:'post',
    initialState:loadState()
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

    delete_card:(state, action)=>{
        let card_id = action.payload;
        return state.filter(item=> item.id !== card_id);
    },

    openModal: (state, action)=>{
        let card_id = action.payload;
        return state.map(items=>items.id === card_id?{...items, modal:true}:items)
    },

    closeModal: (state, action)=>{
        let card_id = action.payload;
        return state.map(items=>items.id === card_id?{...items, modal:false}:items)
    }
}

})

export const{addPost, changeState, delete_card, openModal, closeModal} = PostSlice.actions;
export default PostSlice.reducer;