import React from 'react'
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE={
   loginModal:false,
   signupModal:false,
   postModal:false,
   basicDetailsModal:false,
   userDpEditModalState:false,
   userAboutSessionModalState:false


   
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
        setBasicDetailsModal:(state,action)=>{state.basicDetailsModal=action.payload},
        setUserDpEditModalState:(state,action)=>{state.userDpEditModalState=action.payload},
        setUserAboutSessionModalState:(state,action)=>{state.userAboutSessionModalState=action.payload},

        setUserProfileModalClose:(state,action)=>{
                                                state.basicDetailsModal=false
                                                state.userDpEditModalState=false
                                                state.userAboutSessionModalState=false
                                                  
                                                   
                                                  },
    }
})
export const {
    setLoginModal,
    setsignupModal,
    setPostModal,
    setBasicDetailsModal,
    setUserProfileModalClose,
    setUserDpEditModalState,
    setUserAboutSessionModalState,

}=modalSlice.actions
export default modalSlice.reducer

 