document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        en: {
            welcomeTitle: "Welcome to Our Website",
            welcomeDesc: "Start your journey with us today.",
            signup: "Sign Up",
            login: "Login"
        },
        hi: {
            welcomeTitle: "हमारी वेबसाइट में आपका स्वागत है",
            welcomeDesc: "आज ही हमारे साथ अपनी यात्रा शुरू करें।",
            signup: "साइन अप करें",
            login: "लॉगिन करें"
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
