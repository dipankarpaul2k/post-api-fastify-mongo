import * as postController from "../controllers/post.handlers.js";

function postRoutes(fastify, opts, done) {
  fastify.get("/", postController.getAllPost);
  fastify.get("/:postId", postController.getPostById);
  fastify.post("/", postController.createPost);
  fastify.put("/:postId", postController.updatePost);
  fastify.delete("/:postId", postController.deletePost);
  done();
}

export default postRoutes;
