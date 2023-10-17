import { NextResponse } from "next/server";
import { prisma } from "@/database/prisma";
import { LoginRequest } from "@/interfaces/auth";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//Login Backend endpoint to sign in and returns the token to be saved in the localStorage.
export async function POST(request: Request) {
    const { email, password }: LoginRequest = await request.json();
    const response = NextResponse.next();
    if (!email || !password) {
        return NextResponse.json({ error: "Malformed Body."});
    }
    const userFound = await prisma.user.findUnique({ where: { email: email } });
    if (!userFound) {
        return NextResponse.json({ error: "Email is not registered." });
    }
    const compareResult = await bcrypt.compare(password, userFound.password);
    if (compareResult) {
        const token = jwt.sign({ email, password }, process.env.SECRET_KEY, { expiresIn: "2h" });
        return NextResponse.json({ token: token });
    }
    return NextResponse.json({ error: "Incorrect password." });
}