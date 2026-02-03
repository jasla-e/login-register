const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");
const togglePassword = document.getElementById("togglePassword");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  errorMsg.textContent = "";

  if (!email || !password) {
    errorMsg.textContent = "All fields are required";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorMsg.textContent = "Enter a valid email address";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const validUser = users.find(
    user => user.email === email && user.password === password
  );

  if (!validUser) {
    errorMsg.textContent = "Invalid email or password";
    return;
  }

  alert("Login successful!");
  window.location.href = "dash.html";
});

// Show / Hide password
togglePassword.addEventListener("click", () => {
  passwordInput.type =
    passwordInput.type === "password" ? "text" : "password";
  togglePassword.classList.toggle("fa-eye-slash");
});

// Clear error while typing
emailInput.addEventListener("input", () => errorMsg.textContent = "");
passwordInput.addEventListener("input", () => errorMsg.textContent = "");









