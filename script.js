window.addEventListener('scroll', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const height = window.innerHeight;
        if (top < height - 100) {
            el.classList.add('visible');
        }
    });
});
