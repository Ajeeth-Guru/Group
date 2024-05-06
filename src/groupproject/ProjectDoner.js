import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import'./Doner.css'
export default function ProjectDoner() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[mobile,setmobile]=useState('')
    const[blood,setBlood]=useState('')
    const[city,setCity]=useState('')
    const[age,setAge]=useState('')
    const[gender,setGender]=useState('')
    const[district,setDistrict]=useState('')
    const navigate=useNavigate()
const handleSubmit=(e)=>{
    
    axios.post('http://localhost:3001/user',{name,email,mobile,blood,age,gender,district,city})
    .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)})
    alert('Uploded successfully')
    navigate('/Projecthome')
}
    

  return (
    <div>
      
    <section className='body'>
    <div id='div'>
       <img className='img-fluid' src='https://cdni.iconscout.com/illustration/premium/thumb/boy-donating-blood-6358731-5270679.png'></img>
     </div>
     
    <form onSubmit={handleSubmit}>
    
         <label>Name:</label><br></br>
         <input placeholder='Enter Your Name' className='input' type='text' required={true} onChange={(e)=>{setName(e.target.value)}}></input><br></br>
         <label>Email:</label><br></br>
         <input placeholder='Enter Mail ID' className='input' type='email'required={true} onChange={(e)=>{setEmail(e.target.value)}}></input><br></br>
         <label>Mobile Number:</label><br></br>
         <input placeholder='Enter Mobile Number' className='input' type='number'required={true} onChange={(e)=>{setmobile(e.target.value)}}></input><br></br>
         <label>Blood Group:</label><br></br>
         <select id='select' required={true} onChange={(e)=>{setBlood(e.currentTarget.value)}}>
           <option>SELECT BLOOD GROUP</option>
         <option value="A+">A+</option>
         <option value="A-">A-</option>
         <option value="AB+">AB+</option>
         <option value="AB-">AB-</option>
         <option value="B+">B+</option>
         <option value="B-">B-</option>
         <option value="O+">O+</option>
         <option value="O-">O-</option>
         </select><br></br>
         <label>Age:</label><br></br>
         <input placeholder='Enter Your Age' className='input' type='text'required={true} onChange={(e)=>{setAge(e.target.value)}}></input><br></br>
         <label>Gender:</label><br></br>
         <select id='select1'  onChange={(e)=>{setAge(e.target.value)}}>
           <option value=''>Select gender</option>
           <option value='male'>Male</option>
           <option value='female'>FeMale</option>
           <option value='others'>Others</option>
         </select><br></br>
         <label>District:</label><br></br>
         <input placeholder='Enter Your District' className='input' type='text'required={true} onChange={(e)=>{setDistrict(e.target.value)}}></input><br></br>
         <label>City:</label><br></br>
         <input placeholder='Enter Your City' className='input' type='text'required={true} onChange={(e)=>{setCity(e.target.value)}}></input><br></br>
         <button className='btnn' type='submit'>Submit</button>
         
     </form>
   
     
    </section>
 </div>
  )
}
