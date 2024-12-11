// Select elements for password visibility toggle
const eyeIcons = document.querySelectorAll(".eye-icon");
const passwordFields = document.querySelectorAll(".password");

// Toggle password visibility
eyeIcons.forEach((eyeIcon, index) => {
  eyeIcon.addEventListener("click", () => {
    const passwordField = passwordFields[index];
    if (passwordField.type === "password") {
      passwordField.type = "text";
      eyeIcon.classList.replace("bx-hide", "bx-show");
    } else {
      passwordField.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    }
  });
});

// Handle form switching between login and signup
const loginLink = document.querySelector(".signup-link");
const signupLink = document.querySelector(".login-link");
const loginForm = document.querySelector(".form.login");
const signupForm = document.querySelector(".form.signup");

loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.display = "none";
  signupForm.style.display = "block";
});

signupLink.addEventListener("click", (e) => {
  e.preventDefault();
  signupForm.style.display = "none";
  loginForm.style.display = "block";
});

// Optional: Form submission handling (if needed for demo purposes)
const loginButton = loginForm.querySelector("button");
const signupButton = signupForm.querySelector("button");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const isConfirmed = confirm(
    "Login form submitted. Click OK to proceed to Home page."
  );
  if (isConfirmed) {
    window.location.href = "./Menu.html";
  }
});

signupButton.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Signup form submitted");
});
