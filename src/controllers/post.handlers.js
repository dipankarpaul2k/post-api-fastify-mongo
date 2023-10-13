import Post from "../models/post.model.js";

export async function getAllPost(req, reply) {
  try {
    const posts = await Post.find();
    return reply.send(posts);
  } catch (error) {
    return reply.status(500).send(error);
  }
}

export async function getPostById(req, reply) {
  try {
    const post = await Post.findById(req.params.postId);
    return reply.send(post);
  } catch (error) {
    return reply.status(500).send(error);
  }
}

export async function createPost(req, reply) {
  try {
    const post = new Post(req.body);
    const result = await post.save();
    return reply.send(result);
  } catch (error) {
    return reply.status(500).send(error);
  }
}

export async function updatePost(req, reply) {
  try {
    const updatePost = await Post.findByIdAndUpdate(
      req.params.postId,
      req.body,
      {
        new: true,
      }
    );
    return reply.send(updatePost);
  } catch (error) {
    return reply.status(500).send(error);
  }
}

export async function deletePost(req, reply) {
  try {
    await Post.findByIdAndDelete(req.params.postId);
    return reply
      .status(203)
      .send(`Post with id ${req.params.postId} has been deleted successfully.`);
  } catch (error) {
    return reply.status(500).send(error);
  }
}
