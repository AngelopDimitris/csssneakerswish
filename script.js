function shareOnTwitter() {
    const url = encodeURIComponent('https://www.sneakerswish.com');  //website URL
    const text = encodeURIComponent('Check out SneakerSwish for amazing sneakers!');  
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    window.open(twitterUrl, 'twitter-share-dialog', 'width=800,height=600');
}

function shareOnFacebook() {
    const url = encodeURIComponent('https://www.sneakerswish.com');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, 'facebook-share-dialog', 'width=800,height=600');
}
// Lightbox functionality
document.querySelectorAll('.gallery-container img').forEach(img => {
    img.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.style.position = 'fixed';
        lightbox.style.top = '0';
        lightbox.style.left = '0';
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.background = 'rgba(0, 0, 0, 0.8)';
        lightbox.style.display = 'flex';
        lightbox.style.alignItems = 'center';
        lightbox.style.justifyContent = 'center';
        lightbox.style.cursor = 'zoom-out';
        document.body.appendChild(lightbox);

        const imgClone = document.createElement('img');
        imgClone.src = img.src;
        imgClone.style.maxWidth = '90%';
        imgClone.style.maxHeight = '90%';
        lightbox.appendChild(imgClone);

        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});
// Add event listeners to all images
document.querySelectorAll('.gallery-image').forEach(img => {
    img.addEventListener('click', function () {
        // Find the parent gallery-item container
        const galleryItem = this.closest('.gallery-item');
        const info = galleryItem.querySelector('.info');

        // Toggle the visibility of the .info section
        info.style.display = info.style.display === 'none' || info.style.display === '' ? 'block' : 'none';
    });
});
