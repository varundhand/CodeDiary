import { connectToDB } from "@/utils/database";
import Posts from "@/models/posts";

// Defining 3 endpoints for Individual Post
// GET (read)
export const GET = async (request , {params}) => {  // params are present when we pass dynamic url in the request, here the 'id' is dynamic parameter
  try {
    await connectToDB();

    const post = await Posts.findById(params.id).populate("creator");
    if (!post) return new Response("Post not found :/", {status: 404})

    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch post", { status: 500 });
  }
};

// PATCH (update)
export const PATCH = async ( request, {params}) => {
    const {post, tag} = await request.json()

    try{
        const existngPost = await Posts.findById(params.id)
        if (!existngPost)return new Response('Post Not Found ;-;', {status: 404})
        existngPost.post = post; // post and tag which the client is sending via request.json()
        existngPost.tag = tag;

        await existngPost.save()
        return new Response(JSON.stringify(existngPost), {status:200})
    }catch(error){
        return new Response('Failed to update the post', {status: 500})
    }
}

// DELETE (delete)
export const DELETE = async (request,params) => {
    try{
        await connectToDB()
        await Posts.findByIdAndRemove(params.id)

        return new Response("Post Deleted Successfully!" , {status: 200})
    }catch(error){
        return new Response('Unable to Delete at the moment :/', {status:500})
    }
}