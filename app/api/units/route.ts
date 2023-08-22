import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET() {
    try {
        const units = await prisma.units.findMany();
        return NextResponse.json({ status: "success", data: units });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ status: "error", message: error });
    }
}
