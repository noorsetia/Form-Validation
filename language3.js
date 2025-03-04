document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("languageSelector");

    // Language translations
    const translations = {
        en: {
            loginTitle: "Login",
            loginHeading: "Login",
            email: "Email:",
            password: "Password:",
            loginButton: "Login",
            forgotPassword: "Forgot Password?"
        },
        hi: {
            loginTitle: "लॉगिन",
            loginHeading: "लॉगिन करें",
            email: "ईमेल:",
            password: "पासवर्ड:",
            loginButton: "लॉगिन",
            forgotPassword: "पासवर्ड भूल गए?"
        }
    };

    function updateLanguage(lang) {
        document.querySelectorAll("[data-translate]").forEach((element) => {
            const key = element.getAttribute("data-translate");
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    languageSelector.addEventListener("change", function () {
        updateLanguage(this.value);
    });

    // Set default language
    updateLanguage("en");
});
