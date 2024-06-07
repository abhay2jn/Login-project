"use client";
import {Button,Input} from "@material-tailwind/react"
import { useState } from "react";


function UpdateUser() {
const [id,setId] = useState("");
const [name,setName] = useState("");
const [age,setAge] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleSubmit = async(e) => {
    e.preventDefault();
    if(!id) {
        alert("Provide Specific User ID");
        return;
    }
    const requestedData = {id};

    if(name) {
        requestedData.name = name;
    }
    if(age) {
        requestedData.age = age;
    }
    if(email) {
        requestedData.email = email;
    }
    if(password) {
        requestedData.password = password;
    }
    try {
        const response = await fetch("api/users",{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestedData),
        });
        if(response.ok) {
            alert("Successfully Updated the Information of User");
            clearform();
        } else {
            const data = await response.json()
            alert(data.result || "something went wrong");
        }
    } catch(error) {
        alert(error);
        return;
    }
}

const clearform = () => {
    setId("");
    setName("");
    setAge("");
    setEmail("");
    setPassword("");
}
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Input label="ID" type="text" placeholder="ID" value={id}
            onChange={(e) => setId(e.target.value)} /> <br />
            <Input label="Name" type="text" placeholder="Name" value={name}
            onChange={(e) => setName(e.target.value)} /> <br />
            <Input label="Age" type="number" placeholder="Age" value={age}
            onChange={(e) => setAge(e.target.value)} /> <br />
            <Input label="Email" type="text" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} /> <br />
            <Input label="Password" type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} /> <br />
            <Button className="mt-2" type="submit">Update</Button>
        </form>
    </div>
  )
}

export default UpdateUser