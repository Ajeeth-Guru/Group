import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function BloodBank() {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[mobile,setmobile]=useState('')
  const[password,setPassword]=useState('')
  const[city,setCity]=useState('')
  const[district,setDistrict]=useState('')
  const navigate=useNavigate()
const handleSubmit=(e)=>{
  
  axios.post('http://localhost:3001/bank',{name,email,mobile,password,district,city})
  .then(res=>{console.log(res)})
  .catch(err=>{console.log(err)})
  alert('Uploded successfully')
  navigate('/Projecthome')
}
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>BloodBank Name:</label><br></br>
            <input type='text' required={true} onChange={(e)=>{setName(e.target.value)}}></input><br></br>
            <label>Email:</label><br></br>
            <input type='email'required={true} onChange={(e)=>{setEmail(e.target.value)}}></input><br></br>
            <label>Password:</label><br></br>
            <input type='password'required={true} onChange={(e)=>{setPassword(e.target.value)}}></input><br></br>
            <label>Mobile Number:</label><br></br>
            <input type='number'required={true} onChange={(e)=>{setmobile(e.target.value)}}></input><br></br>
            <label>District:</label><br></br>
            <input type='text'required={true} onChange={(e)=>{setDistrict(e.target.value)}}></input><br></br>
            <label>City:</label><br></br>
            <input type='text'required={true} onChange={(e)=>{setCity(e.target.value)}}></input><br></br>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
