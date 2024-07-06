document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', e => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
    });

    // Load more button functionality
    document.querySelector('.load-more').addEventListener('click', () => {
        alert('Loading more projects...');
        // Implement load more functionality as needed
    });

    // Floating elements
    const floatingElements = document.querySelectorAll('.hobbies-cards .card');
    window.addEventListener('scroll', () => {
        floatingElements.forEach(el => {
            el.style.transform = `translateY(${window.scrollY * 0.5}px)`;
        });
    });
});
