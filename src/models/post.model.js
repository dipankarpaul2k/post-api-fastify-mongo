import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
    required: true,
    trim: true,
  },
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
