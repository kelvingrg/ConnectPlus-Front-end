import React from 'react'
import { createSlice } from '@reduxjs/toolkit';
import { FaBullseye } from 'react-icons/fa';

const INITIAL_STATE={
   singleJobPostData:{},
   detailedSingleJobPostData:{} ,
   overFlow:true,
   allAppliedCandidateData:'',
   allJobPostData:[],
   selectedUserView:''



   
} ;

const tempData=createSlice({
    name:"tempData",
    initialState:INITIAL_STATE,
    reducers:{
       setSingleJobPostData:(state,action)=>{state.singleJobPostData=action.payload},
       setDetailedSingleJobPostData:(state,action)=>{state.detailedSingleJobPostData=action.payload},
       setOverFlow:(state,action)=>{state.overFlow=action.payload},
       setAllAppliedCandidateData:(state,action)=>{state.allAppliedCandidateData=action.payload},
       setAllJobPostData:(state,action)=>{state.allJobPostData=action.payload},
       setSelectedUserView:(state,action)=>{state.selectedUserView=action.payload},

    }
})
export const {
    setSingleJobPostData,
    setDetailedSingleJobPostData ,
    setOverFlow,
    setAllAppliedCandidateData,
    setAllJobPostData,
    setSelectedUserView

}=tempData.actions
export default tempData.reducer

 