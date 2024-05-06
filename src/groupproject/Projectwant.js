import axios from 'axios'
import React, { useEffect, useState } from 'react'
import'./Admin.css'

export default function Projectwant() {
  const[blood,setBlood]=useState('')
  const[district,setDistrict]=useState('')
  const[list,setList]=useState([])
  const[list1,setList1]=useState([])
  const[isRunning,setisRunning]=useState(false)
  useEffect(()=>{
    axios.get('http://localhost:3001/user')
    .then(res=>{setList(res.data)})
    .catch(err=>{console.log(err)})
  },[])
 
  const handleSubmit=(e)=>{
    e.preventDefault()
    const groupfilter=list.filter(x=>x.blood==blood)
    setisRunning(true)
    setList1(groupfilter)

  }
  return (
    <div> 
      <form onSubmit={handleSubmit}>
      <label>Blood Group:</label><br></br>
      <select className='select-box' required={true} onChange={(e)=>{setBlood(e.currentTarget.value)}}>
        <option>SELECT BLOODGROUP</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
      </select><br></br>
      <label>District:</label><br></br>
      <input className='inp' type='text' onClick={(e)=>{setDistrict(e.target.value)}}></input><br></br>
      <button className='button-sub' type='submit'>OK</button>
      </form>
      {isRunning?(<table className='table table-bordered border-secondary table-dark mt-5' border=''>
        <thead>
          <tr>
          <th className=''>NAME</th>
          <th>BLOOD GROUP</th>
          <th>PHONE NUMBER</th>
          <th>DISTRICT</th>
          <th>CITY</th></tr>
        </thead>
        <tbody>
          {list1.map(x=>
           <tr>
           <td>{x.name}</td>
           <td>{x.blood}</td>
           <td>{x.mobile}</td>
           <td>{x.district}</td>
           <td>{x.city}</td>

           </tr>
          )}
         
        </tbody>
      </table>):(<></>)}

    </div>
  )
}
