import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import bcrypt from "bcryptjs";

export async function POST(request) {
    try {
        const { firstName, lastName, email, password } = await request.json();
        const hashedPassword = await bcrypt.hash(password, 10);

        await connectMongoDB();
        await User.create({ firstName, lastName, email, password: hashedPassword });

        return NextResponse.json({ message: "User registered successfully." }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "An error occurred while registering the user." }, { status: 500 });
    }
}