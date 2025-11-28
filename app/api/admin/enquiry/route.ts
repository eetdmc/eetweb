import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { ContactEnquiry } from "@/app/models/enquiry";
import { verifyAdmin } from "@/lib/verifyAdmin";

export async function GET(request: NextRequest) {
  try {
    const isAdmin = await verifyAdmin(request);
    if (!isAdmin) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const list = await ContactEnquiry.find().sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: list }, { status: 200 });
  } catch (error) {
    console.log("Fetch error:", error);
    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500 }
    );
  }
}
