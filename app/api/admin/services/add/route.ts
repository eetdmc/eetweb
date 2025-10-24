import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Mice from "@/app/models/Mice";
import { verifyAdmin } from "@/lib/verifyAdmin";

export async function GET() {
  try {
    // const isAdmin = await verifyAdmin(request);
    // if (!isAdmin) {
    //     return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    // }
    await connectDB();
    const mice = await Mice.find({});
    if (!mice) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }
    return NextResponse.json(
      { data: mice, message: "Services fetched successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const isAdmin = await verifyAdmin(request);
    if (!isAdmin) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    await connectDB();
    const mice = await Mice.create({ "firstSection.mainTitle": body.title });
    if (!mice) {
      return NextResponse.json({ message: "Creation failed" }, { status: 404 });
    }
    return NextResponse.json(
      { data: mice, message: "Service added successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
