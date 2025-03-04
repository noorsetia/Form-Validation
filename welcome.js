document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");

    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            window.location.href = "login.html"; // Redirect to login page
        });
    }

    if (signupBtn) {
        signupBtn.addEventListener("click", function () {
            window.location.href = "index.html"; // Redirect to signup page
        });
    }
});


