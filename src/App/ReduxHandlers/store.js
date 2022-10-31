import React from 'react'
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from "./Actions/ModalSlice"



export const store =configureStore({
reducer:{
    loginModal:modalReducer,
}
});

