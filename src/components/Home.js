import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Home() {
  const Navigate=useNavigate()
  return (
    <div>Home
      <button onClick={()=>Navigate('/order')}>place order</button>
     
    </div>
    
  )
}
