function User(name, username) {
    this.name = name;
    this.username = username;
    this.followers = 0;
    this.posts = [];
}

const user1 = new User("John Doe", "johndoe");
const user2 = new User("Jane Smith", "janesmith");

console.log(user1); // Output: User { name: "John Doe", username: "johndoe", followers: 0, posts: [] }
console.log(user2); // Output: User { name: "Jane Smith", username: "janesmith", followers: 0, posts: [] }