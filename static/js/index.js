document.addEventListener("DOMContentLoaded", () => {
    let activeIndex = 0;
    const slides = document.getElementsByTagName("article");

    handleLeftClick = () => {
        const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;

        const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
                nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

        currentSlide.dataset.status = "after";
        nextSlide.dataset.status = "becoming-active-from-before";
        setTimeout(() => {
            nextSlide.dataset.status = "active";
            activeIndex = nextIndex;
        });
    }

    handleRightClick = () => {
        const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;

        const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
                nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

                currentSlide.dataset.status = "before";
        nextSlide.dataset.status = "becoming-active-from-after";
        setTimeout(() => {
            nextSlide.dataset.status = "active";
            activeIndex = nextIndex;
        });
    }


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