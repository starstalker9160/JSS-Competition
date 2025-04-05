document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    handleNavToggle = () => {  
        nav.dataset.transitionable = "true";
        nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";
    }

    window.matchMedia("(max-width: 800px)").onchange = e => {
        nav.dataset.transitionable = "false";
        nav.dataset.toggled = "false";
    };
});