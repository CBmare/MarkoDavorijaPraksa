document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
  
    popup.style.display = "block";
  
    closePopup.addEventListener("click", function() {
      popup.style.display = "none";
    });
  });
  