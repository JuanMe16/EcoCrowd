import { prisma } from "@/database/prisma";
import { NextRequest, NextResponse } from "next/server";

const queryAllGroups = async (page: number, pageNumber: number) => await prisma.group.findMany({ skip: (page - 1) * pageNumber, take: pageNumber });

const querySelectedGroups = async (id: number, page: number, pageNumber: number) => await prisma.group.findMany({ where: { members: { some: { id: id } } }, skip: (page - 1) * pageNumber, take: pageNumber });

//Endpoint to give a list of groups with pagination.
export async function GET(request: NextRequest) {
    let groupsFound = [];
    const queryParams = request.nextUrl.searchParams;
    const userId = parseInt(queryParams.get("user") || "0");
    const pageParam = parseInt(queryParams.get("page") || "1");
    const pageNumberParam = parseInt(queryParams.get("page_number") || "5");
    if (userId) {
        groupsFound = await querySelectedGroups(userId, pageParam, pageNumberParam)
    } else {
        groupsFound = await queryAllGroups(pageParam, pageNumberParam);
    }
    return NextResponse.json({ message: groupsFound }, { status: 200 });
}