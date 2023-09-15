// DEFINING API END POINTS USING NEXT

import { connectToDB } from "@/utils/database";
import Posts from "@/models/posts";

export const POST = async (req) => {
  const { userId, description, tags } = await req.json();

  try {
    await connectToDB();
    const newPost = new Posts({
      creator: userId,
      tags,
    });

    await newPost.save();

    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {}
};
