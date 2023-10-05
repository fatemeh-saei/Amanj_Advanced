const user = {
    name: "John Doe",
    username: "johndoe",
    followers: 1000
};

console.log(user.hasOwnProperty("name")); // Output: true
console.log(user.hasOwnProperty("age")); // Output: false

let mylist = [1,20,30];

for (let key in user){
    console.log(key, user[key]);
}

for (let item of mylist){
    console.log(item);
}