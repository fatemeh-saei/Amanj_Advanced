const posts =  [
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
    {
        id: 123,
        name: "Cool Post",
        likes: 123
    },
];

function getPostFromDatabase(postId){
return posts.find(post=>post.id ===postId);
}

function updateLikesCount(post){
post.likes +=1;
}

function submitComment(post, commentText){
post['comment'] = commentText;
}

function createPostActions(postId) {
const like = () => {
    const post = getPostFromDatabase(postId);
    updateLikesCount(post);
    console.log("Liked post:", post);
};

const comment = (commentText) => {
    const post = getPostFromDatabase(postId);
    submitComment(post, commentText);
    console.log("Commented on post:", post);
};

return {
    like,
    comment
};
}



const postId = 123;
const postActions = createPostActions(postId);

postActions.like();
postActions.comment("Great post!");


postActions.like();
postActions.like();


const postOneActions = createPostActions(1);
postOneActions.like();