import { NextResponse } from "next/server";
import { prisma } from "@/database/prisma";
import { JWTHeader } from "@/interfaces/auth";
import jwt from "jsonwebtoken";

//Endpoint to describe the current user.
export async function GET(request: Request) {
    const token = request.headers.get("session");
    if (token) {
        try {
            const decodedJWT = jwt.verify(token, process.env.SECRET_KEY);
            const decodedToken = decodedJWT as JWTHeader;
            const foundUser = await prisma.user.findUnique({ where:{ email: decodedToken.email } });
            if (foundUser) {
                return NextResponse.json({ info: {email: foundUser.email, username: foundUser.username, createdAt: foundUser.creationDate, age: foundUser.age} });
            }
        } catch (err) {
            return NextResponse.json({error: "JWT Malformed."});
        }
    } else {
        return NextResponse.json({error: "You are not authenticated."});
    }
    return NextResponse.json({error: "User not found."});
}