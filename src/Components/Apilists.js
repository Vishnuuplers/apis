import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Apilists() {

    const URL = "https://jsonplaceholder.typicode.com/users";

    const [users, setUsers] = useState([])


     const loadUsers = async () => {
            const res = await axios.get(`${URL}`)
            console.log(res.data);
            setUsers(res.data);
            // console.log(users)
        }

    useEffect(() => {
        // async function loadUsers() {
        //     const response = await fetch(`${URL}`);
        //     if(!response.ok) {
        //         // oups! something went wrong
        //         return;
        //     }
    
        //     const newusers = await response.json();
        //     setUsers(newusers);
        // }
    
        loadUsers();
   }, [])
    

  return (
    <section className="apilist-section">
        <div className="wrapper">
            <div className="section-title">
                <h2>API lists</h2>
                <div className="api-container">
                {users.map((item, index)=> {
                    return(
                       <div className="api-single" key={index}>
                            <div className="api-inner">
                             <p> Name: {item.name} </p>
                             <p> Email: {item.email}</p>
                            
                             <a href={`/${item.id}`}>More details</a>
                            </div>
                       </div>
                    )
                })}
            </div>
            </div>
        </div>
    </section>
  )
}
