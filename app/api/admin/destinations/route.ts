import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import UAE from "@/app/models/Uae";
import { verifyAdmin } from "@/lib/verifyAdmin";


export async function GET(request: NextRequest) {
    try {
        await connectDB();
        const id = request.nextUrl.searchParams.get("id");
        const slug = request.nextUrl.searchParams.get("slug");
        if(id){
            const uae = await UAE.findById(id);
            if (!uae) {
                return NextResponse.json({ message: "Destination not found" }, { status: 404 });
            }
            return NextResponse.json({data:uae,message:"Destination fetched successfully"}, { status: 200 });
        }
        if(slug){
            const uae = await UAE.findOne({"firstSection.slug":slug});
            if (!uae) {
                return NextResponse.json({ message: "Destination not found" }, { status: 404 });
            }
            return NextResponse.json({data:uae,message:"Destination fetched successfully"}, { status: 200 });
        }
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
        const uae = await UAE.findByIdAndUpdate(id, body,{upsert:true,new:true});
        if (!uae) {
            return NextResponse.json({ message: "Destination not found" }, { status: 404 });
        }
        return NextResponse.json({data:uae,message:"Destination updated successfully"}, { status: 200 });
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
        const uae = await UAE.findByIdAndDelete(id);
        if (!uae) {
            return NextResponse.json({ message: "Destination not found" }, { status: 404 });
        }
        return NextResponse.json({data:uae,message:"Destination deleted successfully"}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
