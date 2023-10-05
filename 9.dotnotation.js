const user = {
    name: "John Doe",
    username: "johndoe",
    followers: 1000
};

console.log(user.name); // Output: John Doe

user.followers += 100; // Increment followers count
console.log(user.followers); // Output: 1100

user["last_name"] = "Jackson";
console.log(user);
console.log(user.last_name);