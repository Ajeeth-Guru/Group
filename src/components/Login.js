import React, { useEffect, useState } from 'react'
import axios from'axios'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const navigate=useNavigate()
    const auth=useAuth()
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[error,setError]=useState("")
    const[list,setList]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/user')
        .then(res=>{setList(res.data)})
    },[])
    const handleSubmit=(e)=>{
        e.preventDefault()
        const user=list.find(x=>x.email===email)
        if(user){
            if(user.password===password){
                auth?.login(user.name)
                navigate('/')
            }else{
                setError('password is incorrect')
            }
        }else{
            setError('email is incorrect')
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>EMAIL:</label><br></br>
            <input type='email' onChange={(e)=>{setEmail(e.target.value)}}></input><br></br>
            <label>PASSWORD:</label><br></br>
            <input type='password' onChange={(e)=>{setPassword(e.target.value)}}></input><br></br>
            <button type='submit'>SUBMIT</button>
        </form>
        {error}
    </div>
  )
}
