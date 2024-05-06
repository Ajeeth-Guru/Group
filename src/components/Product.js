import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Product() {
  return (
    <div>Product<br></br>
    <Link className='text-decoration-none text-primary' to="new">NEW</Link>
    <br></br>
    <Link className='text-decoration-none text-primary'  to="offer/">OFFER</Link>
           <Outlet/>
    </div>
 
  )
}
