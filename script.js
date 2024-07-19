window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.5)';
    }
});
