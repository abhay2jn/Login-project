import { real } from '@/app/util/data'
import { NextResponse } from 'next/server';
import React from 'react'

 export function GET() {
    const data = real;
    return NextResponse.json({ data }, { status: 200})
}


