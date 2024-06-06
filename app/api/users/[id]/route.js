import { real } from "@/app/util/data";
import { NextResponse } from "next/server";
import fs from "fs";


export async function GET(_,res) {
    const {id} = await res.params;
    const user = real.filter((u) => u.id === id);
    return NextResponse.json({user});
} 

export async function POST(req,res) {
    let {name,email,password} = await req.json();
    const {id} = await res.params;

    const  {
        name: uName,
        email: uEmail,
        password: uPassword,
    } = real.find((u) => u.id === id);
    if (uName === name && uEmail === email && uPassword === password) {
        return NextResponse.json({result : "Successfully Logged In"});
    } else if (!name || !email || !password) {
        return NextResponse.json({result : "fill all the input fields correctly"});
    } else {
        return NextResponse.json({ result : "Invalid"});
    }
}

export async function DELETE(req,res) {
    const { id } = await res.params;

    const userIndex = real.findIndex((user) => user.id === id);

    if(userIndex === -1) {
        return NextResponse.json({result : "User not found"}, { status : 404});
    }


real.splice(userIndex, 1);


const updatedUsersArray = real;

const updatedData = JSON.stringify(updatedUsersArray,null,2);

fs.writeFileSync("./app/util/data.js",`export const real = ${updatedData};`,"utf-8");

return NextResponse.json({success: "Successfully deleted the user"});
}