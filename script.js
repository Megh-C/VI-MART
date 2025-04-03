document.addEventListener('DOMContentLoaded', function() {
    // Get all slides
    const slides = document.querySelectorAll('.slide');
    const slideCount = slides.length;
    let currentIndex = 0;
    let slideShowInterval;
    const slideInterval = 5000; // 5 seconds between slides
    
    // Initialize slideshow
    function initSlideshow() {
        // Show first slide
        slides[currentIndex].classList.add('active');
        
        // Start automatic slideshow
        startSlideshow();
        
        // Add navigation event listeners if elements exist
        const prevBtn = document.querySelector('.prev-slide');
        const nextBtn = document.querySelector('.next-slide');
        const indicators = document.querySelectorAll('.slide-indicator');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                goToSlide(currentIndex - 1);
                resetInterval();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                goToSlide(currentIndex + 1);
                resetInterval();
            });
        }
        
        if (indicators.length > 0) {
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    goToSlide(index);
                    resetInterval();
                });
            });
        }
        
        // Pause on hover
        const slideshowContainer = document.querySelector('.slideshow-container');
        if (slideshowContainer) {
            slideshowContainer.addEventListener('mouseenter', pauseSlideshow);
            slideshowContainer.addEventListener('mouseleave', startSlideshow);
        }
    }
    
    // Go to specific slide
    function goToSlide(index) {
        // Wrap around if out of bounds
        if (index < 0) index = slideCount - 1;
        if (index >= slideCount) index = 0;
        
        // Hide current slide
        slides[currentIndex].classList.remove('active');
        
        // Show new slide
        slides[index].classList.add('active');
        currentIndex = index;
        
        // Update indicators if they exist
        updateIndicators();
    }
    
    // Go to next slide
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
    
    // Start automatic slideshow
    function startSlideshow() {
        if (slideShowInterval) clearInterval(slideShowInterval);
        slideShowInterval = setInterval(nextSlide, slideInterval);
    }
    
    // Pause slideshow
    function pauseSlideshow() {
        if (slideShowInterval) clearInterval(slideShowInterval);
    }
    
    // Reset interval timer
    function resetInterval() {
        pauseSlideshow();
        startSlideshow();
    }
    
    // Update slide indicators
    function updateIndicators() {
        const indicators = document.querySelectorAll('.slide-indicator');
        if (indicators.length > 0) {
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
        }
    }
    
    // Initialize the slideshow
    initSlideshow();
});
// Make sure the FFCS link is highlighted in nav
document.addEventListener('DOMContentLoaded', function() {
    // Get current page URL
    const currentPage = window.location.pathname.split('/').pop();
    
    // Highlight active link in navigation
    document.querySelectorAll('.dropdown-content a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
            // Also highlight the parent dropdown button
            const dropdownBtn = link.closest('.dropdown').querySelector('.dropbtn');
            dropdownBtn.style.backgroundColor = 'var(--secondary-dark)';
        }
    });
    
    // Rest of your existing JavaScript...
});