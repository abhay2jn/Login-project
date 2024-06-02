"use client";
import React, { useState } from 'react'

function addnewuser() {
    const [name,setName] =useState("");
    const [age,setAge] = useState("");

    async function addnewuserhandler() {
        let response = await fetch("api/users", {
            method: 'POST',
            body: JSON.stringify({name,age}),
        })
        response = await response.json();
        if (response.ok) {
            alert("succesfully created the user");
        } else {
            alert("error u do write something wrong in code");
        }

    }
  return (
    <div>
        <input type='text' onChange={ e => setName(e.target.value)} value={name} placeholder='Enter your name' className='ml-2 mr-4 mt-4 border' />
        <br/>
        <input type='number' onChange={ e => setAge(e.target.value)} value={age} placeholder='Enter your age' className='ml-2 mr-4 mt-4 border' />
        <br />
        <button className='bg-black text-white border p-2 m-4' onClick={addnewuserhandler}>Add new user</button>
    </div>
  )
}

export default addnewuser;