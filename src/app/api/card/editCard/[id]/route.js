import { connectDatabase } from "../../../../../../lib/database";
import CreateCard from "../../../../../../models/createCard";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    try {
        const { id } = await params;
        const { symbol, title, urlName, urlLink, detail, width, height } = await request.json();

        await connectDatabase();

        const updatedCard = await CreateCard.findByIdAndUpdate(
            id,
            { symbol, title, url: [urlName, urlLink], detail, width, height },
            { new: true }
        );

        if (!updatedCard) {
            return NextResponse.json({ message: "Card not found." }, { status: 404 });
        }

        return NextResponse.json({ message: "Card updated successfully.", data: updatedCard }, { status: 200 });
    } catch (error) {
        console.error("Error updating card:", error);
        return NextResponse.json({ message: "Failed to update card.", error: error.message }, { status: 500 });
    }
}