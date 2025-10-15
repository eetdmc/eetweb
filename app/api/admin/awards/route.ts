import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Award from "@/app/models/Award";
import { verifyAdmin } from "@/lib/verifyAdmin";


export async function GET() {
    try {
        await connectDB();
        const award = await Award.findOne({});
        if (!award) {
            return NextResponse.json({ message: "Award not found" }, { status: 404 });
        }
        return NextResponse.json({data:award,message:"Award fetched successfully"}, { status: 200 });
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
        const award = await Award.findOneAndUpdate({}, body,{upsert:true,new:true});
        if (!award) {
            return NextResponse.json({ message: "Award not found" }, { status: 404 });
        }
        return NextResponse.json({data:award,message:"Award updated successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}