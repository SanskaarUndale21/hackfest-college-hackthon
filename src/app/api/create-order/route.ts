import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(req: Request) {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
      key_secret: process.env.RAZORPAY_KEY_SECRET || "",
    });

    const { amount } = await req.json(); // amount should be in rupees, so we multiply by 100 for paise
    const order = await razorpay.orders.create({
      amount: amount * 100, 
      currency: "INR",
      receipt: "receipt_" + Math.random().toString(36).substring(7),
    });
    
    return NextResponse.json(order);
  } catch (error: any) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json(
      { error: "Failed to create order", details: error.message },
      { status: 500 }
    );
  }
}
