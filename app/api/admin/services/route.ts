import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Mice from "@/app/models/Mice";
import { verifyAdmin } from "@/lib/verifyAdmin";


export async function GET(request: NextRequest) {
    try {
        await connectDB();
        const id = request.nextUrl.searchParams.get("id");
        const mice = await Mice.findById(id);
        if (!mice) {
            return NextResponse.json({ message: "Service not found" }, { status: 404 });
        }
        return NextResponse.json({data:mice,message:"Service fetched successfully"}, { status: 200 });
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
        const id = request.nextUrl.searchParams.get("id");
        await connectDB();
        const mice = await Mice.findByIdAndUpdate(id, body,{upsert:true,new:true});
        if (!mice) {
            return NextResponse.json({ message: "Mice not found" }, { status: 404 });
        }
        return NextResponse.json({data:mice,message:"Mice updated successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const isAdmin = await verifyAdmin(request);
        if (!isAdmin) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        const id = request.nextUrl.searchParams.get("id");
        await connectDB();
        const mice = await Mice.findByIdAndDelete(id);
        if (!mice) {
            return NextResponse.json({ message: "Service not found" }, { status: 404 });
        }
        return NextResponse.json({data:mice,message:"Service deleted successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
