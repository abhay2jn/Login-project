"use client";
import { real } from "@/app/util/data";
import {List,ListItem,Card} from "@material-tailwind/react"
import { useEffect, useState } from "react";

function AllUsers() {
    const [users,setUsers] = useState("");
    useEffect(() => {
        const fetchAlllUsers =  async() => {
            const response = await fetch("/api/users");
            const usersInfo = await response.json();
            setUsers(usersInfo.data);
        };
        fetchAlllUsers();
    },[])
  return (
    <div>{real && real.map((user) => (
        <Card key={user.id} className="mb-4">
            <List>
                <ListItem>{user.name}</ListItem>
            </List>
        </Card>
    ))}</div>
  )
}

export default AllUsers