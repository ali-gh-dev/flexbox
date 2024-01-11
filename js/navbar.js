const navBtn = document.getElementById("nav-toggle")
const navLinks = document.getElementById("nav-links")

// show navbar links
navBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show-links");
})


// ****************** smooth scroll ******************
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        navLinks.classList.remove("show-links");

        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        let position = element.offsetTop - 62;

        window.scrollTo({
            left: 0,
            top: position,
            behavior: "smooth"
        });
    });
});
