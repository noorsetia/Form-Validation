document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    document.querySelector(".togglePassword").addEventListener("click", function () {
        let passwordField = document.getElementById("password");
        let type = passwordField.type === "password" ? "text" : "password";
        passwordField.type = type;

        // Toggle button text/icon
        this.textContent = type === "password" ? "👁️" : "🙈";
    });

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let enteredEmail = emailInput.value.trim();
        let enteredPassword = passwordInput.value.trim();

        // Get stored email and password from localStorage (set in reset-password.js)
        let storedEmail = localStorage.getItem("userEmail");
        let storedPassword = localStorage.getItem("userPassword");

        if (!storedEmail || !storedPassword) {
            alert("Password updated successfully!");
            window.location.href = "dashboard.html";
            return;
        }

        if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
            alert("Login successful!");
            // Redirect to the dashboard or home page
            window.location.href = "dashboard.html"; // Change this to the desired page
        } else {
            alert("Invalid email or password!");
        }
    });
});
