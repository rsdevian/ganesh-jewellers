import { NextResponse } from "next/server";
import { query } from "@/utils/db";
import bcrypt from "bcryptjs";

const response = NextResponse;

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();

        if (!name || !email || !password) {
            return response.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }

        // Check if user exists
        const userCheck = await query("SELECT id FROM users WHERE email = $1", [
            email,
        ]);

        if (userCheck.rows.length > 0) {
            return response.json(
                { error: "User already exists." },
                { status: 409 }
            );
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert new user
        await query(
            'INSERT INTO users (name, email, password, "created_at", "updated_at") VALUES ($1, $2, $3, NOW(), NOW())',
            [name, email, hashedPassword]
        );

        return response.json(
            { message: "User registered successfully.", user: { name, email } },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Registration error:", error);
        return response.json(
            { error: "Internal server error." },
            { status: 500 }
        );
    }
}
