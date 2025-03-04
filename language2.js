document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        en: {
            signupTitle: "Sign Up",
            signup: "Sign Up",
            fullName: "Full Name:",
            email: "Email:",
            contactNumber: "Contact Number:",
            password: "Password:",
            loginPrompt: "Already have an account?",
            loginHere: "Login here"
        },
        hi: {
            signupTitle: "साइन अप",
            signup: "साइन अप करें",
            fullName: "पूरा नाम:",
            email: "ईमेल:",
            contactNumber: "संपर्क नंबर:",
            password: "पासवर्ड:",
            loginPrompt: "पहले से खाता है?",
            loginHere: "यहाँ लॉगिन करें"
        }
    };

    const languageSelector = document.getElementById("languageSelector");

    function changeLanguage(lang) {
        document.querySelectorAll("[data-translate]").forEach((element) => {
            let key = element.getAttribute("data-translate");
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        localStorage.setItem("language", lang);
    }

    if (languageSelector) {
        languageSelector.addEventListener("change", function () {
            const selectedLang = languageSelector.value;
            changeLanguage(selectedLang);
        });
    }

    // Load saved language from localStorage
    const savedLang = localStorage.getItem("language") || "en";
    if (languageSelector) {
        languageSelector.value = savedLang;
    }
    changeLanguage(savedLang);
});
