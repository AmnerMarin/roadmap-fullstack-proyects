document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    const popup = document.querySelector(".cookie-popup");
    const btn = document.querySelector(".btn-aceptar");

    let listaDeCookies = document.cookie;

    let consent = listaDeCookies.includes("avisado=si");

    if (!consent) {
        popup.classList.remove("hidden");
        main.setAttribute("inert", "");
    } else {
        popup.classList.add("hidden");
        main.removeAttribute("inert");
    }

    btn.addEventListener("click", () => {
        document.cookie = "avisado=si; max-age=31536000; path=/";
        popup.classList.add("hidden");
        main.removeAttribute("inert");
    });
});


//localStorage
// document.addEventListener("DOMContentLoaded", () => {

//     const main = document.querySelector("main");

//     const popup = document.querySelector(".cookie-popup");

//     const btn = document.querySelector(".btn-aceptar");



//     let consent = localStorage.getItem("avisado");



//     if (!consent) {

//         popup.classList.remove("hidden");

//         main.setAttribute("inert", "");

//     } else {

//         popup.classList.add("hidden");

//         main.removeAttribute("inert");

//     }



//     btn.addEventListener("click", () => {

//         localStorage.setItem("avisado", "si");

//         popup.classList.add("hidden");

//         main.removeAttribute("inert");



//     })

// });


//comment:  localStorage.removeItem("avisado");
//comment:  location.reload();