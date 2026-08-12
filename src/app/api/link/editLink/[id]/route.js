import { connectDatabase } from "../../../../../../lib/database";
import CreateLink from "../../../../../../models/createLink";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    try {
        const { id } = await params;
        const { urlName, urlLink, access } = await request.json();

        await connectDatabase();

        const updatedLink = await CreateLink.findByIdAndUpdate(
            id,
            { url: [urlName, urlLink], access },
            { new: true }
        );

        if (!updatedLink) {
            return NextResponse.json({ message: "Link not found." }, { status: 404 });
        }

        return NextResponse.json({ message: "Link updated successfully.", data: updatedLink }, { status: 200 });
    } catch (error) {
        console.error("Error updating link:", error);
        return NextResponse.json({ message: "Failed to update link.", error: error.message }, { status: 500 });
    }
}