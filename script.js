// THE HAMBURGER 
// Get elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Show the menu on hamburger click
hamburger.addEventListener('click', () => {
    navLinks.classList.add('active');
});

// Hide the menu when the mouse leaves the links
navLinks.addEventListener('mouseleave', () => {
    navLinks.classList.remove('active');
});

