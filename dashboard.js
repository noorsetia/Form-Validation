document.addEventListener("DOMContentLoaded", function () {
    // 🔹 Get user email from localStorage
    let userEmail = localStorage.getItem("userEmail");

    // 🔹 If user is not logged in, redirect to login page
    if (!userEmail) {
        alert("You are not logged in. Redirecting to login page...");
        window.location.href = "index.html";
    }

    // 🔹 Display user email on the dashboard
    document.getElementById("userEmail").textContent = userEmail;

    // 🔹 Logout functionality
    document.getElementById("logoutBtn").addEventListener("click", function () {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userPassword");
        window.location.href = "index.html";
    });

    // ======================= 🌍 Language Translation Code =========================
    const translations = {
        en: {
            dashboardTitle: "Welcome to Your Dashboard",
            dashboardDesc: "Here you can manage your account and explore features.",
            logout: "Logout",
        },
        hi: {
            dashboardTitle: "आपके डैशबोर्ड में स्वागत है",
            dashboardDesc: "यहाँ आप अपने खाते का प्रबंधन कर सकते हैं और सुविधाओं का पता लगा सकते हैं।",
            logout: "लॉग आउट",
        }
    };

    const languageSelector = document.getElementById("languageSelector");

    function changeLanguage(lang) {
        document.getElementById("dashboardTitle").textContent = translations[lang].dashboardTitle;
        document.getElementById("dashboardDesc").textContent = translations[lang].dashboardDesc;
        document.getElementById("logoutBtn").textContent = translations[lang].logout;

        // Save selected language to localStorage
        localStorage.setItem("language", lang);
    }

    // 🔹 Detect language change
    languageSelector.addEventListener("change", function () {
        const selectedLang = languageSelector.value;
        changeLanguage(selectedLang);
    });

    // 🔹 Load saved language from localStorage (default to English)
    const savedLang = localStorage.getItem("language") || "en";
    languageSelector.value = savedLang;
    changeLanguage(savedLang);
});
