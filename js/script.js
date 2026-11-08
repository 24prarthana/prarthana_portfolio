// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
});


// CLOSE MOBILE MENU AFTER CLICKING A LINK
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


// TYPING ANIMATION
const typingText = document.getElementById("typingText");

const roles = [
    "Python Developer",
    "Data Analyst",
    "Backend Developer",
    "Problem Solver"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (!deleting) {
        typingText.textContent = currentRole.substring(
            0,
            characterIndex + 1
        );

        characterIndex++;

        if (characterIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1300);
            return;
        }

    } else {
        typingText.textContent = currentRole.substring(
            0,
            characterIndex - 1
        );

        characterIndex--;

        if (characterIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 45 : 85);
}

typeEffect();


// SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observerInstance.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    observer.observe(element);
});


// CURRENT YEAR IN FOOTER
document.getElementById("currentYear").textContent =
    new Date().getFullYear();


// COPY GITHUB LINK
const copyButton = document.getElementById("copyGithub");
const copyMessage = document.getElementById("copyMessage");

copyButton.addEventListener("click", async () => {
    const githubURL = "https://github.com/24prarthana";

    try {
        await navigator.clipboard.writeText(githubURL);
        copyMessage.textContent = "GitHub link copied successfully!";
    } catch (error) {
        copyMessage.textContent =
            "Copy unavailable. Visit github.com/24prarthana";
    }
});


// ACTIVE NAVIGATION LINK
const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 130;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navigationLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});