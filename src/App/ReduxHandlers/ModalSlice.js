import React from 'react'
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE={
   loginModal:false,
   signupModal:false,
   postModal:false
   
} ;

const modalSlice=createSlice({
    name:"modal",
    initialState:INITIAL_STATE,
    reducers:{
        setLoginModal:(state,action)=>{state.loginModal=action.payload},
        setsignupModal:(state,action)=>
        {state.signupModal=action.payload
            state.loginModal=false;
        },
        setPostModal:(state,action)=>{state.postModal=action.payload},
    }
})
export const {setLoginModal,setsignupModal,setPostModal}=modalSlice.actions
export default modalSlice.reducer

 