import React from 'react'

export const Button = (props) => {
  return (
    <button className=' box-border rounded-full px-5 py-1 border-ccOrange text-black hover:bg-ccOrange border-2 hover:border-black hover:scale-110'> {props.text}</button>
  )
}
