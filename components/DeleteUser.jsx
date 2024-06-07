"use client";
import { Button , Input } from "@material-tailwind/react";
import { Ruthie } from "next/font/google";
import { useState } from "react";



function DeleteUser() {
    const [id,setId]= useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(!id) {
            alert("Provide ID for Delete the User");
            return;
        }
        try {
            const response = await fetch(`api/users/${id}`,{
                method: "DELETE",
            });
            if(response.ok) {
                alert("Successfully Deleted the User");
                clearform();
            } else {
                alert("something went wrong");
                return;
            }
        } catch(error) {
            alert(error);
            return;
        }
    }
    const clearform = () => {
        setId("");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Input label="User ID" type="text" placeholder="User ID" value={id}
            onChange={(e) => setId(e.target.value)} />
            <Button className="mt-2" type="submit">Delete</Button>
        </form>
    </div>
  )
}

export default DeleteUser