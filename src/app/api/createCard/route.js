import { connectDatabase } from "../../../../lib/database";
import CreateCard from "../../../../models/createCard";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request) {
    try {
        const { symbol, title, urlName, urlLink, detail, width, height } = await request.json();

        await connectDatabase();

        const newCard = await CreateCard.create({ symbol, title, url: [urlName, urlLink], detail, width, height });

        revalidatePath("/");
        revalidatePath("/admin");

        return NextResponse.json({ message: "Card created.", data: newCard }, { status: 201 });
    } catch (error) {
        console.error("Error creating card:", error);
        return NextResponse.json(
            { message: "Failed to create card.", error: error.message }, 
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        await connectDatabase();
        const cards = await CreateCard.find({});
        return NextResponse.json({ cards }, { status: 200 });
    } catch (error) {
        console.error("Error fetching cards:", error);
        return NextResponse.json(
            { message: "Failed to fetch cards", error: error.message },
            { status: 500 }
        );
    }
}