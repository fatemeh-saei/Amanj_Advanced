function User(name, username) {
    this.name = name;
    this.username = username;
    this.followers = 0;
    this.posts = [];
}

User.prototype.follow = function (user) {
    this.followers++;
    console.log(`${this.username} started following ${user.username}`);
};

const user1 = new User("John Doe", "johndoe");
const user2 = new User("Jane Smith", "janesmith");

//console.log(user1);
//console.log(user2);

//user1.follow(user2); // Output: johndoe started following janesmith
//console.log(user1);

for (let item in user1) {
    if (user1.hasOwnProperty(item)){
        console.log(item, user1[item])
    }
}

Object.keys(user1).forEach(item=>{
    console.log(item,user1[item])
})

for (let item of Object.keys(user1)){
    console.log(item, user1[item])
}
