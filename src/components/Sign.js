import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Sign() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate()
    const formSubmit=()=>{
        axios.post('http://localhost:3001/user',{name,email,password})
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
        navigate('/login')
    }
  return (
    <div>
        <form onSubmit={formSubmit}>
            <label>NAME:</label><br></br>
            <input type='text' onChange={(e)=>{setName(e.target.value)}}></input><br></br>
            <label>EMAIL:</label><br></br>
            <input type='email' onChange={(e)=>{setEmail(e.target.value)}}></input><br></br>
            <label>PASSWORD:</label><br></br>
            <input type='password' onChange={(e)=>{setPassword(e.target.value)}}></input><br></br>
            <button type='submit'>SUBMIT</button>
        </form>
    </div>
  )
}
