function getAllPostsFromDatabase() {
    return [
        {
            id: 1,
            name: "New post",
            likes: 10
        },
        {
            id: 2,
            name: "Modern Post",
            likes: 2000
        },
        {
            id: 3,
            name: "JS Post",
            likes: 500
        },
    ]
}

function filterPosts(posts, filterFunction) {
    return posts.filter(filterFunction);
}

function isPopularPost(post) {
    return post.likes > 1000;
}

const allPosts = getAllPostsFromDatabase();

console.log("all posts are", allPosts);

const popularPosts = filterPosts(allPosts, isPopularPost);

function isNormalPost(post){
    return post.likes < 1000;
}

const normalPosts = filterPosts(allPosts, isNormalPost);

function isMPosts(post){
    return post.name.startsWith("M");
}
const mPosts = filterPosts(allPosts, isMPosts);

console.log("Popular posts", popularPosts);
console.log("Normal posts", normalPosts);
console.log("mPosts posts", mPosts);