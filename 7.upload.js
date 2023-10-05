function uploadImage(image) {
    return new Promise((resolve, reject) => {
      // Simulate image upload process
        setTimeout(() => {
            const uploadedImageUrl = "https://example.com/uploads/image.jpg";
            if (uploadedImageUrl) {
                resolve(uploadedImageUrl);
            } else {
                reject("Image upload failed");
            }
        }, 3000);
    });
}

const image = 'file.png';
uploadImage(image)
    .then(uploadedImageUrl => {
    console.log("Image uploaded successfully:", uploadedImageUrl);
    })
    .catch(error => {
        console.error("Error uploading image:", error);
    });