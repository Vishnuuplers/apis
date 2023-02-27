import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Apidetails() {
    
    const URL = "https://jsonplaceholder.typicode.com/users";

    const params = useParams();
    

    const [userdetail, setUserdetail] = useState(false);
    
    const loadUserdetail = async () => {
        const res = await axios.get(`${URL}/${params.id}`)
        console.log(res.data);
        setUserdetail(res.data);
        // console.log(users)
    }

    useEffect(()=>{
        loadUserdetail();
    },[])

  return (
   <section className='api-detail-section'> 
   
   <div className="wrapper">

    <h2>API detail page</h2>


    <div className="api-details">
        <p>Hii.. my name is  {userdetail.name} and below are my details</p>
        <p>Email: <a href={`mailto:${userdetail.email}`}> {userdetail.email}</a></p>
        <p>Phone: <a href={`tel:${userdetail.phone }`}> {userdetail.phone } </a> </p>
        <p>Website:  <a target='_blank' href={`https://${userdetail.website}`}>{userdetail.website} </a> </p>
        <p>City: {userdetail?.address?.city}</p>
    </div>

   </div>
   
    </section>
  )
}
