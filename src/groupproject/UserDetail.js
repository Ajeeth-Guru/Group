import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function UserDetail() {
  const[blood,setBlood]=useState('')
  const[district,setDistrict]=useState('')
  const[list,setList]=useState([])
  const[list1,setList1]=useState([])
  const[isRunning,setisRunning]=useState(false)
 
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.get('http://localhost:3001/user')
    .then(res=>{setList(res.data)})
    .catch(err=>{console.log(err)})
    console.log(list)
    const groupfilter=list.filter(x=>x.blood==blood)
    setisRunning(true)
    setList1(groupfilter)

  }
  return (
    <div> 
      <form onSubmit={handleSubmit}>
      <label>Blood Group:</label><br></br>
      <select required={true} onChange={(e)=>{setBlood(e.currentTarget.value)}}>
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
      <input type='text' onClick={(e)=>{setDistrict(e.target.value)}}></input><br></br>
      <button type='submit'>OK</button>
      </form>
      {isRunning?(<table>
        <thead>
          <tr>
          <th>NAME</th>
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
