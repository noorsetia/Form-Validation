document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        en: {
            pageTitle: "Welcome to Your Dashboard",
            logout: "Logout",
            name: "Name:",
            email: "Email:",
            password: "Password:",
            signup: "Sign Up",
            login: "Login",
            resetPassword: "Reset Password",
        },
        hi: {
            pageTitle: "आपके डैशबोर्ड में स्वागत है",
            logout: "लॉग आउट",
            name: "नाम:",
            email: "ईमेल:",
            password: "पासवर्ड:",
            signup: "साइन अप करें",
            login: "लॉगिन करें",
            resetPassword: "पासवर्ड रीसेट करें",
        }
    };

    const languageSelector = document.getElementById("languageSelector");

    function changeLanguage(lang) {
        document.getElementById("pageTitle").textContent = translations[lang].pageTitle;
        document.getElementById("logoutBtn").textContent = translations[lang].logout;
        document.getElementById("nameLabel").textContent = translations[lang].name;
        document.getElementById("emailLabel").textContent = translations[lang].email;
        document.getElementById("passwordLabel").textContent = translations[lang].password;
        document.getElementById("signupBtn").textContent = translations[lang].signup;
    }

    // Detect language change
    languageSelector.addEventListener("change", function () {
        const selectedLang = languageSelector.value;
        localStorage.setItem("language", selectedLang);
        changeLanguage(selectedLang);
    });

    // Load saved language
    const savedLang = localStorage.getItem("language") || "en";
    languageSelector.value = savedLang;
    changeLanguage(savedLang);
});
