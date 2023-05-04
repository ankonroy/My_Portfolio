// SIDE MENU ANIMATION
const tglrBtn = document.querySelector(".toggler");
const overlay = document.querySelector(".overlay");

function toggleSideMenu() {
    if ((overlay.style.width == `80%`)) overlay.style.width = `0%`;
    else overlay.style.width = `80%`;
}

// TYPING ANIMATION

var typed = new Typed("#element", {
    strings: ["Frontend Developer", "Programmer", "Problem Solver"],
    typeSpeed: 50,
    loop: true,
});

// DOWNLOAD RESUME

function downloadResume() {
    window.alert("Resume is comming soon");
}

function showProj() {
    window.alert("Projects are comming soon");
}