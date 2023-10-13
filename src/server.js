import Fastify from "fastify";
import dotenv from "dotenv";
import mongoose from "mongoose";

const fastify = Fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

// start dotenv config file
dotenv.config();

// connect to database
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => fastify.log.info("Connected to the database"))
  .catch((e) => fastify.log.info("Error connecting to database", e));

// import and register routes
import postRoutes from "./routes/post.routes.js";
fastify.register(postRoutes, { prefix: "/posts" });

// start the server
const PORT = process.env.PORT || 5000;
const startServer = async () => {
  try {
    await fastify.listen({ port: PORT });
    fastify.log.info(`Server listening post ${PORT}`);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};
startServer();

// gracefully terminate or interupt the signal
["SIGINT", "SIGTERM"].forEach((signal) => {
  process.on(signal, async () => {
    await fastify.close();
    process.exit(0);
  });
});
