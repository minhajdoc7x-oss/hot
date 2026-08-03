/* ==========================================
   LOADING SCREEN
========================================== */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 800);
});

/* ==========================================
   MOUSE GLOW
========================================== */

const glow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* Close menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});

/* ==========================================
   STICKY NAVBAR EFFECT
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(0,0,0,.75)";
        navbar.style.backdropFilter = "blur(25px)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

    } else {

        navbar.style.background = "rgba(255,255,255,.06)";
        navbar.style.boxShadow = "none";

    }

});

/* ==========================================
   SCROLL REVEAL
========================================== */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

/* ==========================================
   PARALLAX HERO IMAGE
========================================== */

const heroImage = document.querySelector(".hero-image");

window.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    heroImage.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

/* ==========================================
   RESET HERO IMAGE
========================================== */

window.addEventListener("mouseleave", () => {

    heroImage.style.transform =
        "rotateY(0deg) rotateX(0deg)";

});

/* ==========================================
   SIMPLE FADE-IN DELAY
========================================== */

document.querySelectorAll(".service-card, .gallery-item, .testimonial, .glass-card")
.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.08}s`;

});

/* ==========================================
   YEAR (Optional)
========================================== */

const year = new Date().getFullYear();

const footerText = document.querySelector(".footer-content p");

if (footerText) {

    footerText.innerHTML =
        `© ${year} Your Name. All Rights Reserved.`;

}

console.log("Ultra Premium Portfolio Loaded Successfully ✨");
