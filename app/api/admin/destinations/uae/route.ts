import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import UAE from "@/app/models/Uae";
import { verifyAdmin } from "@/lib/verifyAdmin";


export async function GET() {
    try {
        await connectDB();
        const uae = await UAE.findOne({});
        if (!uae) {
            return NextResponse.json({ message: "UAE not found" }, { status: 404 });
        }
        return NextResponse.json({data:uae,message:"UAE fetched successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const body = await request.json();
        const isAdmin = await verifyAdmin(request);
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        await connectDB();
        const uae = await UAE.findOneAndUpdate({}, body,{upsert:true,new:true});
        if (!uae) {
            return NextResponse.json({ message: "UAE not found" }, { status: 404 });
        }
        return NextResponse.json({data:uae,message:"UAE updated successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}