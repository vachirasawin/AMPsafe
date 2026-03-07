import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import DevicesLog from "../../../../models/devicesLog";

export async function POST(request) {
    try {
        const { name, value, status } = await request.json();

        await connectMongoDB();
        await DevicesLog.create({ name, value, status });

        return NextResponse.json({ message: "Device log recorded successfully." }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "An error occurred while recording the device log." }, { status: 500 });
    }
}