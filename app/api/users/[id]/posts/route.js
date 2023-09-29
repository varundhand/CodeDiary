import { connectToDB } from "@/utils/database";
import Posts from "@/models/posts";

export const GET = async (request , {params}) => {  // params are present when we pass dynamic url in the request, here the 'id' is dynamic parameter
  try {
    await connectToDB();

    const posts = await Posts.find({
        creator: params.id
    }).populate("creator");

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch posts", { status: 500 });
  }
};
