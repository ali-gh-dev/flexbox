const navBtn = document.getElementById("nav-toggle")
const navLinks = document.getElementById("nav-links")

// show navbar links
navBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show-links");
})

