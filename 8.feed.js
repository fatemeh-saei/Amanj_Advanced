function loadUserFeed(userId) {
    return new Promise((resolve, reject) => {
      // Simulate loading user's feed data
        setTimeout(() => {
            const feedData = [];
            if (feedData) {
                resolve(feedData);
            } else {
                reject("Failed to load user feed");
            }
        }, 2000);
    });
}

const userId = 123;
loadUserFeed(userId)
    .then(feedData => {
        console.log("User feed loaded successfully:", feedData);
    })
    .catch(error => {
        console.error("Error loading user feed:", error);
    });