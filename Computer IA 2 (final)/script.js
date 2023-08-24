document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
  });
// JavaScript to open and close the modals
function openLoginModal() {
  document.getElementById('loginModal').style.display = 'block';
}

function openSignupModal() {
  document.getElementById('signupModal').style.display = 'block';
}

function openForgotPasswordModal() {
  document.getElementById('forgotPasswordModal').style.display = 'block';
}

function closeModal() {
  const modals = document.querySelectorAll('.modal');
  for (const modal of modals) {
    modal.style.display = 'none';
  }
}

// Close the modal when clicking outside the modal content
window.onclick = function (event) {
  const modals = document.querySelectorAll('.modal');
  for (const modal of modals) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
}

  const openFormButton = document.getElementById("open-form-button");

  openFormButton.addEventListener("click", function() {
    const formUrl = "https://www.google.com/";
    window.open(formUrl, "_blank");
  });

  
});

