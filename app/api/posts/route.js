import { connectToDB } from "@/utils/database";
import Posts from "@/models/posts";

export const GET = async (request) => {
  try {
    await connectToDB();

    const posts = await Posts.find({}).populate("creator");

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch posts", { status: 500 });
  }
};
