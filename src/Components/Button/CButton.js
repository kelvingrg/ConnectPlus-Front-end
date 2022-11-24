import React from 'react'

export const CButton = ({children,text}) => {
  return (
    <button className=' box-border rounded-full px-5 py-1 border-ccOrange text-black hover:bg-ccOrange border-2 hover:border-black hover:scale-110'> {text} {children}</button>
  )
}
