// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    fiveProd.classList.toggle('dark-mode');
  
    // Save the user's preference in local storage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);
  }
  
  // Check user preference on page load
  window.onload = function() {
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-mode');
    }
  };
  