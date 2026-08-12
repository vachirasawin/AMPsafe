import { connectDatabase } from "../../../../../../lib/database";
import CreateLink from "../../../../../../models/createLink";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
    try {
        const { id } = await params;

        await connectDatabase();

        const deletedLink = await CreateLink.findByIdAndDelete(id);

        if (!deletedLink) {
            return NextResponse.json({ message: "Link not found." }, { status: 404 });
        }

        return NextResponse.json({ message: "Link deleted successfully." }, { status: 200 });
    } catch (error) {
        console.error("Error deleting link:", error);
        return NextResponse.json(
            { message: "Failed to delete link.", error: error.message },
            { status: 500 }
        );
    }
}