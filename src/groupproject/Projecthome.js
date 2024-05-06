import React, { useEffect, useState } from 'react'
import './Home.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Projecthome() {
  const[count,setCount]=useState(0)
  const[list,setList]=useState([])
  const   navigate=useNavigate()
  useEffect(()=>{
    axios.get('http://localhost:3001/user')
    .then(res=>{setList(res.data)})
    .catch(err=>{console.log(err)})
    const total=list.length
    setCount(total)
  },[list,count])
  return(
  <div className=''>
        
  <section className='container'>
  <div className='content-1'>
  <p>Donate Blood Save Life !</p>
  <h1 id='after'>YOUR BLOOD CAN BRING </h1>
  <button onClick={()=>{navigate('/ProjectDoner')}}>Donate Now</button>

 </div>
 <div className='content-2'>
 <img src='https://static.vecteezy.com/system/resources/previews/004/449/815/original/blood-donation-2d-isolated-illustration-man-in-chair-on-blood-transfusion-donor-with-smiling-nurse-flat-characters-on-cartoon-background-charity-work-and-volunteering-colourful-scene-vector.jpg'></img>
 </div>
  </section>

 <div className='content-3'>
  <button id='btn1'>Doner's
  <br></br>{count}</button>
  <button id='btn2' onClick={()=>{navigate('/Projectwant')}}>Blood Availability</button>
  <button id='btn3' onClick={()=>{navigate('/ProjectDoner')}}>Doner Register</button>
  
  <img src='https://health.gov.tt/sites/default/files/styles/large/public/inline-images/Blood%20Bank%20logo%202022-03.png?itok=0H-a6QNb'></img>

 </div>
 <div>
 </div>
 
</div>
)
}
  

