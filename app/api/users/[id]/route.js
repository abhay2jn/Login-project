import { real } from "@/app/util/data";
import { NextResponse } from "next/server";
import { Result } from "postcss";


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