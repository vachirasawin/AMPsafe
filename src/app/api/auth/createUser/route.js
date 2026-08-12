import { NextResponse } from "next/server";
import { connectDatabase } from "../../../../../lib/database";
import Authentication from "../../../../../models/authentication";
import bcrypt from "bcryptjs";

export async function POST(request) {
    try {
        const { firstname, lastname, email, username, password, access } = await request.json();
        const hashedPassword = await bcrypt.hash(password, 10);

        await connectDatabase();
        await Authentication.create({ firstname, lastname, email, username, password: hashedPassword, access });

        return NextResponse.json({ message: "User registered." }, { status: 201 });
    } catch(error) {
        return NextResponse.json({ message: "An error occured while registrating the user." }, { status: 500 });
    }
}