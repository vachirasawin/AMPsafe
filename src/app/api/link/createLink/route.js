import { connectDatabase } from "../../../../../lib/database";
import CreateLink from "../../../../../models/createLink";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request) {
    try {
        const { urlName, urlLink, access } = await request.json();

        await connectDatabase();

        const newLink = await CreateLink.create({ url: [urlName, urlLink], access });

        revalidatePath("/");
        revalidatePath("/admin");

        return NextResponse.json({ message: "Link created.", data: newLink }, { status: 201 });
    } catch (error) {
        console.error("Error creating link:", error);
        return NextResponse.json(
            { message: "Failed to create link.", error: error.message }, 
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        await connectDatabase();
        const links = await CreateLink.find({});
        return NextResponse.json({ links }, { status: 200 });
    } catch (error) {
        console.error("Error fetching links:", error);
        return NextResponse.json(
            { message: "Failed to fetch links", error: error.message },
            { status: 500 }
        );
    }
}