import React from 'react'
import { NavLink} from 'react-router-dom'
import { useAuth } from './Auth'

export default function Nav() {
  const auth=useAuth()
  return (
    <div className='nav-item'>
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/about'>ABOUT</NavLink>
        <NavLink to='/product'>PRODUCT</NavLink>
        <NavLink to='/order'>ORDER</NavLink>
     <NavLink to='/user'>USER</NavLink>
      <NavLink to='/sign'>SIGN</NavLink>
      <NavLink to='/login'>LOGIN</NavLink>
    </div>
  )
}
