import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Projectnav() {
  return (
    <div className='nav-item'>
  <NavLink to='/'>HOME</NavLink>
  {/* <NavLink to='/Projectservice'>Service</NavLink> */}
  <NavLink to='Projectabout'>ABOUT</NavLink>
  <NavLink to='/Projectwant'>BLOOD AVAILABILITY</NavLink>
  <NavLink to='/ProjectDoner'>DONER REGISTRATION</NavLink>
  {/* <NavLink to='/bloodbank'>Blood Bank</NavLink> */}
  {/* <NavLink to='/bloodbankdetails'>userbank</NavLink> */}
  <NavLink to='/admin'>ADMIN</NavLink>
  </div>
  )
}
