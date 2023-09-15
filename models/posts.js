import { Schema, model, models } from "mongoose";

const PostsSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User", // one to many relationship i.e. the User can create multiple posts
  },
  posts: {
    type: String,
    required: [true, "The Post is requied."],
  },
  tags: {
    type: String,
    required: [true, "Tags are required."],
  },
});

const Posts = models.Posts || model("Posts", PostsSchema);

export default Posts;
