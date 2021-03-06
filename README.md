# Spleets

Simple url shortener Application with Typescript

# Pre-requisite

1. You need to have [Node.js](https://nodejs.org/en/) installed.
2. You should also install [VS Code](https://code.visualstudio.com/)

3. Install [MongoDB](https://docs.mongodb.com/manual/installation/)

4. Install [Postman](https://www.getpostman.com/apps)

# Running the application locally

1. Clone this repository

   `git clone https://github.com/Vectormike/psychic-parakeet.git`

2. Install dependencies

   `cd psychic-parakeet`

   `npm install`

3. Create a `.env` file with the same variables as `.env.example` in this repository.
   Please note that `MONGO_URL` is the connection url for MongoDB.

4. Start your MongoDB server

   `mongod`

5. Build the application

   `npm run build-ts`

6. Start the application

   `npm run start`

7. Endpoints can be accessed on `localhost:5000`.
