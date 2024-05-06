import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

export default function User() {
  const navigate=useNavigate()
  const auth=useAuth()
  const handleLogout=()=>{
    auth?.logout()
    navigate('/')
  }
  return (
    <div>WELCOME{auth?.user}
    <button  className='text-danger' onClick={handleLogout} >Logout</button>
    </div>
  )
}
