/* ================= DARK / LIGHT MODE ================= */

const themeButton = document.getElementById("theme-toggle");


// Check saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeButton.textContent = "☀️";
}


// Change theme
themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    const darkMode =
        document.body.classList.contains("dark");


    if (darkMode) {

        themeButton.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeButton.textContent = "🌙";

        localStorage.setItem("theme", "light");
    }

});



/* ================= LANGUAGE ================= */

const languageButton =
    document.getElementById("language-toggle");


let currentLanguage =
    localStorage.getItem("language") || "en";


function changeLanguage(language) {

    currentLanguage = language;


    // Change HTML direction
    document.documentElement.lang = language;

    document.documentElement.dir =
        language === "ar" ? "rtl" : "ltr";


    document.body.dir =
        language === "ar" ? "rtl" : "ltr";


    // Find all translatable elements
    const elements =
        document.querySelectorAll("[data-en]");


    elements.forEach(function (element) {

        element.textContent =
            element.getAttribute(`data-${language}`);

    });


    // Change button
    languageButton.textContent =
        language === "en" ? "AR" : "EN";


    // Save language
    localStorage.setItem("language", language);
}


// Load language
changeLanguage(currentLanguage);


// Switch language
languageButton.addEventListener("click", function () {

    const newLanguage =
        currentLanguage === "en" ? "ar" : "en";

    changeLanguage(newLanguage);

});



/* ================= CONTACT FORM ================= */

const contactForm =
    document.querySelector(".contact-form");


contactForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    alert(
        currentLanguage === "en"
        ? "Thank you! Your message has been received."
        : "شكراً لك! تم استلام رسالتك."
    );

});
