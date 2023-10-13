# A simple post api using fastify, mongodb_atlas and mongoose

It is a simple api that I built for practicing CURD operations, but if you still want to try it out, then follow the steps mentioned below 👇

## Installation & Usage

- Fork the repository in your account in Github.
- Make project directory and go inside the directory.
- Clone the repository.
- Install dependencies.
- Start or run your API on the local machine.

```shell
# Make a directory
mkdir posts-api-fastify-mongoose

# go inside the directory
cd posts-api-fastify-mongoose

# Clone the repo
git clone https://github.com/...(repo url)

# Install dependencies
npm install

# Start the API
npm start

# Access the API in your web browser
http://localhost:5000/posts
```

## Endpoints

### GET method

```shell
# Get all the posts
localhost:5000/posts

# Get a single post
localhost:5000/posts/:postId
```

### POST method

```shell
# Add a new post
localhost:5000/posts
```

### PATCH method

```shell
# Update a single post
localhost:5000/posts/:postId
```

### DELETE method

```shell
# Uelete a single post
localhost:5000/posts/:postId
```

## Dependencies

Here are some of the major dependencies I have used in this project:

```json
  "dependencies": {
    "dotenv": "^16.3.1",
    "fastify": "^4.24.0",
    "mongoose": "^7.6.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.1",
    "pino-pretty": "^10.2.3"
  }
```

## Author

Dipankar Paul 😊 | Contact me 👉 dipankarpaul2k@gmail.com 
