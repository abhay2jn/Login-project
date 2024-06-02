import { NextResponse } from "next/server";

export async function POST(req,res) {
    let{name,age} =await req.json();
    if (!name || !age) {
        return NextResponse.json({error:"not found"},{status:400});
    }
    return NextResponse.json({
        res: "verified, User logged in successfully",
        ok:true,
    },{
        status:202
    });
}