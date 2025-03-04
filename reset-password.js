document.addEventListener("DOMContentLoaded", function () {
    const resetForm = document.getElementById("resetPasswordForm");
    const emailInput = document.getElementById("email");
    const newPasswordInput = document.getElementById("newPassword");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    // document.querySelector(".togglePassword").addEventListener("click", function () {
    //     let passwordField = document.getElementById("password");
    //     let type = passwordField.type === "password" ? "text" : "password";
    //     passwordField.type = type;

    //     // Toggle button text/icon
    //     this.textContent = type === "password" ? "👁️" : "🙈";
    // });

    resetForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let email = emailInput.value.trim();
        let newPassword = newPasswordInput.value.trim();
        let confirmPassword = confirmPasswordInput.value.trim();

        // Simple email validation (checks if it contains '@')
        if (!email.includes("@")) {
            emailError.textContent = "Enter a valid email!";
            emailError.style.visibility = "visible";
            return;
        } else {
            emailError.style.visibility = "hidden";
        }

        if (newPassword.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters!";
            passwordError.style.visibility = "visible";
            return;
        } else {
            passwordError.style.visibility = "hidden";
        }

        if (newPassword !== confirmPassword) {
            confirmPasswordError.textContent = "Passwords do not match!";
            confirmPasswordError.style.visibility = "visible";
            return;
        } else {
            confirmPasswordError.style.visibility = "hidden";
        }

        // Store the new password in localStorage (for demo purposes)
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", newPassword);

        alert("Password updated successfully! Redirecting to login...");
        window.location.href = "login.html";
    });
});
