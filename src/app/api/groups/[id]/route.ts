import { prisma } from "@/database/prisma";
import { NextResponse } from "next/server";

//Endpoint to select a single group information.
export async function GET(request: Request) {
    return NextResponse.json({message: "Group"}, {status: 200});
}

//Endpoint to create a new group.
export async function POST(request: Request) {
    return NextResponse.json({message: "Group created"}, {status: 201});
}

//Endpoint to replace information on a group.
export async function PUT(request: Request) {
    return NextResponse.json({message: "Updated group"}, {status: 200});
}

//Endpoint to delete a group.
export async function DELETE(request: Request) {
    return NextResponse.json({message: "Deleted group"}, {status: 200});
}