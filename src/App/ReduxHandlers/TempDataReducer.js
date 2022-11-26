import React from 'react'
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE={
   singleJobPostData:{},
   detailedSingleJobPostData:{}


   
} ;

const tempData=createSlice({
    name:"tempData",
    initialState:INITIAL_STATE,
    reducers:{
       setSingleJobPostData:(state,action)=>{state.singleJobPostData=action.payload},
       setDetailedSingleJobPostData:(state,action)=>{state.detailedSingleJobPostData=action.payload},
    }
})
export const {
    setSingleJobPostData,
    setDetailedSingleJobPostData,

}=tempData.actions
export default tempData.reducer

 