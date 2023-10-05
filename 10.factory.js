function createUser(name, username) {
    return {
        name,
        username,
        followers: 0,
        posts: []
    };
}

const user1 = createUser("John Doe", "johndoe");
const user2 = createUser("Jane Smith", "janesmith");

console.log(user1); // Output: { name: "John Doe", username: "johndoe", followers: 0, posts: [] }
console.log(user2); // Output: { name: "Jane Smith", username: "janesmith", followers: 0, posts: [] }