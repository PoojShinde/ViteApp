import React from 'react'
import { useState,useEffect } from 'react'
export default function DynamicTitle() {
    const [title, setTitle] = useState(0)
    useEffect(()=>{
        document.title = `You clicked {title} times`
    },[title])
  return (
    <>
    <div>DynamicTitle</div>
    
       <p>You clicked {title} times</p>
        <button onClick={() => setTitle(title + 1)}>Click me</button>
    
    </>
  )
}
