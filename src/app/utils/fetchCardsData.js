import { connectDatabase } from "../../../lib/database";
import CreateCard from "../../../models/createCard";

export async function fetchCardsData() {
try {
    await connectDatabase();

    const cards = await CreateCard.find({}).lean();

    const formattedCards = cards.map((card) => ({
      ...card,
      _id: card._id.toString(),
      createdAt: card.createdAt?.toISOString(),
      updatedAt: card.updatedAt?.toISOString(),
    }));

    return formattedCards;
  } catch (error) {
    console.error("Error loading cards from database: ", error);
    return [];
  }
}