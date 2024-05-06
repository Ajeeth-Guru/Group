import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function BloodBankDetails() {
  return (
    <div>
       <Link className='text-danger' to="doner">UserDetail</Link>
       <Link className='text-danger' to="update">Update blood</Link>
        <Outlet/>
    </div>
  )
}
