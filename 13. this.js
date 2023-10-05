//import { application } from "express";

const user = {
    name: "John Doe",
    username: "johndoe",
    followers: 1000,
    getProfile: function () {
        console.log(`Profile of ${this.username}: ${this.followers} followers`);
    },
    print: print_username
};

user.getProfile(); // Output: Profile of johndoe: 1000 followers

function print_username(){
    console.log(this.username);
}

//const print_user = print_username.bind(user);
//print_user();

user.print();
print_username.apply(user);
print_username.call(user);