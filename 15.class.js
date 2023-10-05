class User {
    constructor(name, username) {
        this.name = name;
        this.username = username;
        this.followers = 0;
        this.posts = [];
    }

    follow(user) {
        this.followers++;
        console.log(`${this.username} started following ${user.username}`);
    }
}

const user1 = new User("John Doe", "johndoe");
const user2 = new User("Jane Smith", "janesmith");

user1.follow(user2); // Output: johndoe started following janesmith
console.log(user1.name);
console.log(user2.username);