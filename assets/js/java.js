document.addEventListener("DOMContentLoaded", function() {
    var images = [
        "./assets/img/manjar.jpg" ,
        "./assets/img/romanito.jpg",
        "./assets/img/cala.png"
    ];

    var currentIndex = 0; 

    function showImage() {
        var imageContainer = document.getElementById("carousel-image");
        imageContainer.src = images[currentIndex];
    }


    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length; 
        showImage();
    }


    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length; 
        showImage();
    }

    showImage();

    document.getElementById("prev-button").addEventListener("click", showPrevImage);
    document.getElementById("next-button").addEventListener("click", showNextImage);
});
