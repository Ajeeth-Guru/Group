import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'


export default function Order() {
    const Navigate=useNavigate()
  return (
    <div>Order here
        <button onClick={()=>{Navigate(-1)}}>GO back</button>
          
    </div>
  )
}
