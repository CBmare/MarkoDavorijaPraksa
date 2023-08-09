let showPopup = true;

function closePopup() {
  document.querySelector('.popup-container').style.display = 'none';
}

function showPopupAfterScroll() {
  if (showPopup) {
    setTimeout(function () {
      document.querySelector('.popup-container').style.display = 'block';
    }, 3000); // Show the popup after 5 seconds (5000 milliseconds) of scrolling

    showPopup = false; // To ensure the popup is shown only once
  }
}

window.addEventListener('scroll', showPopupAfterScroll);
