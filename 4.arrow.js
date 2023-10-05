const ourThis = this;

submitButton.addEventListener("click",
function() {
    const commentText = commentInput.value;
    submitComment(commentText);
});



const handleClick =     ()=> {
    const commentText = commentInput.value;
    submitComment(commentText);
}

submitButton.addEventListener("click", handleClick);
