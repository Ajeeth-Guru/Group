import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Admin.css'

export default function Admin() {
    const[list,setList]=useState([])
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[list1,setList1]=useState([])
    const[error,setError]=useState('')
    const[isRunning,setIsrunning]=useState(false)
    useEffect(()=>{
        axios.get('http://localhost:3001/user')
        .then(res=>{setList(res.data)})
        .catch(err=>{console.log(err)})

        axios.get('http://localhost:3001/admin')
      .then(res=>{setList1(res.data)})
      .catch(err=>{console.log(err)})
    },[])
    const handleSubmit=async (e)=>{
      // e.preventDefault()
      const admin=list1.find(x=>x.email=== email)
      if(admin){
        if(admin.password === password){
          setIsrunning(true)
        }else{
          setError('password is incorrect')
        }
        }else{
          setError('email is incorrect')
        }
      }
    
  return (
    <div>
    <p id='admin' className='mt-5'>ADMIN PAGE</p>
    
  {!isRunning?(<form id='form' onSubmit={handleSubmit}>
  <label id='label'>Email:</label><br></br>
  <input id='input' type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input><br></br>
  <label id='label'>Passowrd:</label><br></br>
  <input id='input' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input><br></br>
  <button id='btnn-sub' type='submit'>OK</button>
  </form>):(<></>)}
  <h1>{error}</h1>
    {isRunning?(<table  className='table table-bordered border-secondary table-dark mt-5' >
    <thead>
      <tr>
      <th>NAME</th>
      <th>BLOOD GROUP</th>
      <th>EMAIL</th>
      <th>PHONE NUMBER</th>
      <th>AGE</th>
      <th>GENDER</th>
      <th>DISTRICT</th>
      <th>CITY</th></tr>
    </thead>
    <tbody>
      {list.map(x=>
       <tr>
       <td>{x.name}</td>
       <td>{x.blood}</td>
       <td>{x.email}</td>
       <td>{x.mobile}</td>
       <td>{x.age}</td>
       <td>{x.gender}</td>
       <td>{x.district}</td>
       <td>{x.city}</td>

       </tr>
      )}
     
    </tbody>
  </table>):(<></>)}
  {isRunning?(<button className=' btn btn-danger' onClick={()=>{setIsrunning(false)}}>EXIT</button>):(<></>)}    
</div>
  )
}
