import { query } from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

const response = NextResponse;

export async function POST(request: Request) {
    const body = await request.json();
    const { email, password } = body;

    console.log(email, password);

    const user = await query(`SELECT * FROM users WHERE email = $1`, [email]);

    if (!user.rows.length) {
        return response.json({ message: "User not found" }, { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(
        password,
        user.rows[0].password
    );

    if (!isPasswordValid) {
        return response.json(
            { message: "Invalid credentials" },
            { status: 401 }
        );
    }

    return response.json(
        {
            message: "Login successful",
            user: {
                id: user.rows[0].id,
                name: user.rows[0].name,
                email: user.rows[0].email,
            },
        },
        { status: 200 }
    );
}
