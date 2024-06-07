import { real } from '@/app/util/data'
import { NextResponse } from 'next/server';
import fs from 'fs';

 export function GET() {
    const data = real;
    return NextResponse.json({ data }, { status: 200})
}

export async function POST(req,res) {
    let { id,name,age,email,password } = await req.json();

    if(!id || !name || !age || !email || !password) {
        return NextResponse.json( {result: "field required"}, {status:401});
    } else {
        real.push({id,name,age,email,password});

        const updatedUsersArray = real;

        const updatedData = JSON.stringify(updatedUsersArray,null,2);

        fs.writeFileSync("./app/util/data.js",`export const real = ${updatedData};`,"utf-8");

        return NextResponse.json({success: "User successfully registered"})
    }
}

export async function PUT(req,res) {
    let { id,name,age,email,password } = await req.json();

    const userIndex = real.findIndex((user) => user.id === id);

    if(userIndex === -1) {
        return NextResponse.json({result : "User not found"}, {status:404});
    }
   
    if (name) {
        real[userIndex].name = name;
    }
    if (age) {
        real[userIndex].age = age;
    }
    if (email) {
        real[userIndex].email = email;
    }
    if (password) {
        real[userIndex].password = password;
    }
    const updatedUsersArray = real;
    const updatedData = JSON.stringify(updatedUsersArray,null,2);

        fs.writeFileSync("./app/util/data.js",`export const real = ${updatedData};`,"utf-8");

        return NextResponse.json({success: "Successfully updated user data"});
}


