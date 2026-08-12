import { connectDatabase } from "../../../lib/database";
import Authentication from "../../../models/authentication";

export async function fetchUserData() {
  try {
    await connectDatabase();

    const users = await Authentication.find({}).lean();

    const formattedUsers = users.map((user) => ({
      ...user,
      _id: user._id.toString(),
      createdAt: user.createdAt?.toISOString(),
      updatedAt: user.updatedAt?.toISOString(),
    }));

    return formattedUsers;
  } catch (error) {
    console.error("Error loading users from database: ", error);
    return [];
  }
}