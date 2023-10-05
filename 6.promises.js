//1
/*
function fetchUserData(userId) {
    // Simulate an API call to fetch user data
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = {
                id: userId,
                name: "fatemeh",
                followers: 1005
            };
            if(user) {
                resolve(user);
            } else{
                reject("not found");
            }
        }, 2000);
    });
}

const userId = 123;
fetchUserData(userId)
    .then(user =>{
        console.log("user: ", user);
    })
    .catch(error => {
        console.log("Error: ", error);
    });
*/

//2
function fetchUserData(userId) {
    // Simulate an API call to fetch user data
    const res = fetch("http://localhost:3000/user");
    return res;
    
}

    const userId = 123;
    fetchUserData(userId)
    .then(res => {
        res.json().then(user=>{
            console.log("User:", user);      
        })
    })
    .catch(error => {
        console.error("Error:", error);
    });
