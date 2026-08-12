import { NextResponse } from "next/server";
import { connectDatabase } from "../../../../../../../lib/database";
import Authentication from "../../../../../../../models/authentication";

export async function PUT(req, context) {
    try {
        const { id } = await context.params;

        if (!id) {
            return NextResponse.json(
                { message: "ไม่พบ ID ใน Request" },
                { status: 400 }
            );
        }

        const { firstname, lastname, username, email, access } = await req.json();

        await connectDatabase();

        const updatedUser = await Authentication.findByIdAndUpdate(
            id,
            { firstname, lastname, username, email, access },
            { new: true }
        );

        if (!updatedUser) {
            return NextResponse.json(
                { message: "ไม่พบข้อมูลผู้ใช้งาน" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: "แก้ไขข้อมูลสำเร็จ", user: updatedUser },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json(
            { message: "เกิดความผิดพลาดในการแก้ไขข้อมูล" },
            { status: 500 }
        );
    }
}