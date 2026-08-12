import { connectDatabase } from "../../../lib/database";
import CreateLink from "../../../models/createLink";

export async function fetchNavbarLink() {
try {
    await connectDatabase();

    const links = await CreateLink.find({}).lean();

    const formattedLinks = links.map((link) => ({
      ...link,
      _id: link._id.toString(),
      createdAt: link.createdAt?.toISOString(),
      updatedAt: link.updatedAt?.toISOString(),
    }));

    return formattedLinks;
  } catch (error) {
    console.error("Error loading links from database: ", error);
    return [];
  }
}