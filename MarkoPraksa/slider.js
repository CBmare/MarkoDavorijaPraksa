document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".slider-img");
    let currentImageIndex = 0;
  
    function showImage(index) {
      images[currentImageIndex].classList.add("hidden");
      currentImageIndex = index;
      images[currentImageIndex].classList.remove("hidden");
    }
  
    document.getElementById("prevBtn").addEventListener("click", function() {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      showImage(currentImageIndex);
    });
  
    document.getElementById("nextBtn").addEventListener("click", function() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      showImage(currentImageIndex);
    });
  });
  