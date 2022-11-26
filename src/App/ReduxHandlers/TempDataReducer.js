import React from 'react'
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE={
   singleJobPostData:{}


   
} ;

const tempData=createSlice({
    name:"tempData",
    initialState:INITIAL_STATE,
    reducers:{
       setSingleJobPostData:(state,action)=>{state.singleJobPostData=action.payload},
    }
})
export const {
    setSingleJobPostData

}=tempData.actions
export default tempData.reducer

 