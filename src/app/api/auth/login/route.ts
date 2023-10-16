import { NextResponse } from "next/server";
import { prisma } from "@/database/prisma";
import { LoginRequest } from "@/interfaces/auth";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
    const { email, password }: LoginRequest = await request.json();
    if (!email || !password) {
        return NextResponse.json({ error: "Malformed Body." });
    }
    const userFound = await prisma.user.findUnique({ where: { email: email } });
    if (!userFound) {
        return NextResponse.json({ error: "Email is not registered." });
    }
    const compareResult = await bcrypt.compare(password, userFound.password);
    if (compareResult) {
        return NextResponse.json({ ok: "Successfully logged." });
    }
    return NextResponse.json({ ok: "Incorrect password." });
}