// Smooth Scroll
      
const links = document.querySelectorAll(".banner-arrow");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
}

// Pop-Up
function openPopUp() {
    document.getElementById("pop-up").style.display = "block";
}

function closePopUp() {
    document.getElementById("pop-up").style.display = "none";
}

// Mobile-Menu
function openMobMenu() {
    document.getElementById("mob-menu").style.display = "block";
}

function closeMobMenu() {
    document.getElementById("mob-menu").style.display = "none";
}