import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { ContactEnquiry } from "@/app/models/enquiry";

export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json();

    const saved = await ContactEnquiry.create(data);

    return NextResponse.json(
      { success: true, message: "Enquiry submitted", data: saved },
      { status: 201 }
    );
  } catch (error) {
    console.log("Submit error:", error);
    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500 }
    );
  }
}
