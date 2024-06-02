import { NextResponse } from "next/server";
import { real } from "@/app/util/data";

export function GET() {
    return NextResponse.json({real});
}