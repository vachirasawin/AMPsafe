import { connectDatabase } from "../../../../../lib/database";
import CreateCard from "../../../../../models/createCard";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
    try {
        const { id } = await params;

        await connectDatabase();

        const deletedCard = await CreateCard.findByIdAndDelete(id);

        if (!deletedCard) {
            return NextResponse.json({ message: "Card not found." }, { status: 404 });
        }

        return NextResponse.json({ message: "Card deleted successfully." }, { status: 200 });
    } catch (error) {
        console.error("Error deleting card:", error);
        return NextResponse.json(
            { message: "Failed to delete card.", error: error.message },
            { status: 500 }
        );
    }
}