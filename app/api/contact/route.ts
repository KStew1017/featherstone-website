import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { name, phone, message } = await req.json();
        const contact = await prisma.contact.create({
            data: {
                name,
                phone,
                message
            }
        });
      
         console.log(contact);
      
         return NextResponse.json({ status: "success", data: contact });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ status: "error", message: error });
    }
}
