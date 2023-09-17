// DEFINING API END POINTS USING NEXT
// Its a lambda function

import { connectToDB } from "@/utils/database";
import Posts from "@/models/posts";

export const POST = async (request) => {
  const { userId, description, tags } = await request.json();

  try {
    await connectToDB();
    const newPost = new Posts({
      creator: userId,
      description,
      tags,
    });

    await newPost.save();

    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    console.error("Error creating a new post:", error);
    return new Response("Failed to create a New Post", { status: 500 });
  }
};
