import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import UAE from "@/app/models/Uae";
import { verifyAdmin } from "@/lib/verifyAdmin";

export async function GET(request: NextRequest) {
    try {
        // const isAdmin = await verifyAdmin(request);
        // if (!isAdmin) {
        //     return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        // }
        await connectDB();
        const uae = await UAE.find({});
        if (!uae) {
            return NextResponse.json({ message: "Not found" }, { status: 404 });
        }
        return NextResponse.json({data:uae,message:"UAE fetched successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
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
        const uae = await UAE.create({"firstSection.mainTitle":body.title});
        if (!uae) {
            return NextResponse.json({ message: "Creation failed" }, { status: 404 });
        }
        return NextResponse.json({data:uae,message:"UAE added successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}