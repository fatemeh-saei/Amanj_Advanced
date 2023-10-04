import { Collection } from "mongodb";
import { connectToCluster } from "./mongo.js";

async function handleNewPost(post) {
    // Perform some processing on the post (e.g., sanitization, validation)
    await savePostToDatabase(post);
    displayNewPost(post);
}

async function savePostToDatabase(post) {
    // Save the post data to the database
    let mongoClient = await connectToCluster();
    const db = mongoClient.db("social");
    const collection = db.collection("posts");
    await collection.insertOne(post);
    console.log("Save post to database");
}

function displayNewPost(post) {
    // Display the new post on the user's feed
    console.log("displaying new post")
}

const newPost = {
    user: "JohnDoe",
    content: "Just had a great day at the beach!",
    timestamp: Date.now()
};

await handleNewPost(newPost); 