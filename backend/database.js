const { MongoClient } = require("mongodb");

// sets up db connection by logging in using my env uri, then prints out collections in our database
async function connectDB() {
  try {
    const uri = process.env.ATLAS_URI;
    const client = new MongoClient(uri);

    await client.connect();
    console.log("successfully connected to database!");

    const db = client.db("AnimeTracker");

    const collections = await db.collections();

    collections.forEach((collection) =>
      console.log(collection.s.namespace.collection)
    );

    return db;
  } catch (e) {
    console.error("MongoDB connection error:", e);
  }
}
module.exports = connectDB;
