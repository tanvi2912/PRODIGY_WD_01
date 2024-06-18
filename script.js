document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const collectionsLink = document.querySelector('a[href="#collections"]');
    const collectionsHeading = document.getElementById('collections-heading');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    collectionsLink.addEventListener('click', (e) => {
        e.preventDefault();
        const collectionsSection = document.getElementById('collections');
        collectionsSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            collectionsHeading.classList.add('visible');
        }, 300); // Adjust timeout as needed to synchronize with scrolling
    
    });
    
});
