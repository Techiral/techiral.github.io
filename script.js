document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Pop-out and hover effects for project cards
    const projectCards = document.querySelectorAll('.project-cards .card');
    projectCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.classList.add('pop-out');
        });
        card.addEventListener('mouseout', function() {
            this.classList.remove('pop-out');
        });
    });
});
