import { NextResponse } from "next/server";
import { prisma } from "@/database/prisma";
import { RegisterRequest } from "@/interfaces/auth";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
    const { username, email, password }: RegisterRequest = await request.json();
    if (!email || !password) {
        return NextResponse.json({ error: "Malformed JSON values are missing." });
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    await prisma.user.create({
        data: {
            username: username || "",
            email: email,
            password: hashedPassword,
            age: 0,
            description: "",
            socials: ""
        }
    });
    return NextResponse.json({ ok: "Successfully registered!" });
}