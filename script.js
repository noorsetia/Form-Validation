document.addEventListener("DOMContentLoaded", function () {
    // Password Toggle Functionality
    document.querySelector(".togglePassword").addEventListener("click", function () {
        let passwordField = document.getElementById("password");
        let type = passwordField.type === "password" ? "text" : "password";
        passwordField.type = type;

        // Toggle button text/icon
        this.textContent = type === "password" ? "👁️" : "🙈";
    });

    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        let isValid = true;

        // Name Validation
        const name = document.getElementById("name").value.trim();
        const nameError = document.getElementById("nameError");
        if (name.length < 3) {
            nameError.textContent = "Name must be at least 3 characters!";
            nameError.style.visibility = "visible";
            isValid = false;
        } else {
            nameError.style.visibility = "hidden";
        }

        // Email Validation
        const email = document.getElementById("email").value.trim();
        const emailError = document.getElementById("emailError");
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = "Enter a valid email!";
            emailError.style.visibility = "visible";
            isValid = false;
        } else {
            emailError.style.visibility = "hidden";
        }

        // Contact Number Validation (Must start with + and have 10-15 digits)
        const contact = document.getElementById("contact").value.trim();
        const contactError = document.getElementById("contactError");
        const contactPattern = /^\+\d{1,4}\s\d{10,15}$/;
        if (!contactPattern.test(contact)) {
            contactError.textContent = "Use format: +91 9876543210";
            contactError.style.visibility = "visible";
            isValid = false;
        } else {
            contactError.style.visibility = "hidden";
        }

        // Password Validation
        const password = document.getElementById("password").value.trim();
        const passwordError = document.getElementById("passwordError");
        if (password.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters!";
            passwordError.style.visibility = "visible";
            isValid = false;
        } else {
            passwordError.style.visibility = "hidden";
        }

        // If all validations pass, save user data and redirect to login
        if (isValid) {
            // Store user details in localStorage (mock signup)
            const user = { name, email, contact, password };
            localStorage.setItem("user", JSON.stringify(user));

            alert("Sign up successful! Redirecting to login...");
            window.location.href = "login.html"; // Redirect to login page
        }
    });
});

