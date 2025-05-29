// Presentation App Core Logic
class PresentationApp {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = document.querySelectorAll('.slide').length;
        // --- OMITTED_CODE_BLOCK_START --- (Original code, confirmed irrelevant to current <MODIFICATION_SUGGESTIONS> and any related <INSPECTOR_INFO> data pertinent to these suggestions. [Optional: brief note on what was omitted, e.g., " functions for unrelated feature X"]) ---
        // this.isAutoPlaying = false;
        // this.autoPlayInterval = null;
        // --- OMITTED_CODE_BLOCK_END ---

        this.init();
    }

    init() {
        this.setupSlides();
        this.setupNavigation();
        this.setupKeyboardControls();
        this.setupTouchControls();
        this.showSlide(0);
        this.updateProgress();
        this.createNavigationDots();
    }

    setupSlides() {
        const slides = document.querySelectorAll('.slide');
        slides.forEach((slide, index) => {
            slide.style.display = 'none';
            slide.classList.add('inactive');
        });
    }

    setupNavigation() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        prevBtn.addEventListener('click', () => this.previousSlide());
        nextBtn.addEventListener('click', () => this.nextSlide());

        // Show arrows on hover
        // --- OMITTED_CODE_BLOCK_START ---
        // document.addEventListener('mousemove', (e) => {
        //     if (e.clientX < 100) {
        //         prevBtn.style.opacity = '1';
        //     } else if (e.clientX > window.innerWidth - 100) {
        //         nextBtn.style.opacity = '1';
        //     } else {
        //         prevBtn.style.opacity = '0';
        //         nextBtn.style.opacity = '0';
        //     }
        // });
        // --- OMITTED_CODE_BLOCK_END ---
    }

    setupKeyboardControls() {
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    this.previousSlide();
                    break;
                case 'ArrowRight':
                case 'ArrowDown':
                case ' ': // Corrected line
                case 'Enter': // Corrected line
                    e.preventDefault();
                    this.nextSlide();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.goToSlide(0);
                    break;
                case 'End':
                    e.preventDefault();
                    this.goToSlide(this.totalSlides - 1);
                    break;
                // --- OMITTED_CODE_BLOCK_START ---
                // case 'Escape':
                // case 'f':
                // case 'F':
                // e.preventDefault();
                // this.toggleFullscreen();
                // break;
                // --- OMITTED_CODE_BLOCK_END ---
            }
        });
    }

    setupTouchControls() {
        let startX = 0;
        let startY = 0;
        let endX = 0;
        let endY = 0;

        document.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        document.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;

            const deltaX = endX - startX;
            const deltaY = endY - startY;

            // Minimum swipe distance
            if (Math.abs(deltaX) > 50 || Math.abs(deltaY) > 50) {
                if (Math.abs(deltaX) > Math.abs(deltaY)) {
                    // Horizontal swipe
                    if (deltaX > 0) {
                        this.previousSlide();
                    } else {
                        this.nextSlide();
                    }
                } else {
                    // Vertical swipe
                    if (deltaY > 0) {
                        this.previousSlide();
                    } else {
                        this.nextSlide();
                    }
                }
            }
        });
    }

    createNavigationDots() {
        const dotsContainer = document.getElementById('nav-dots');
        dotsContainer.innerHTML = '';

        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('button');
            dot.className = `w-3 h-3 rounded-full transition-all duration-300 ${
                i === this.currentSlide ? 'bg-white' : 'bg-white/40'
            }`;
            dot.addEventListener('click', () => this.goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    updateNavigationDots() {
        const dots = document.querySelectorAll('#nav-dots button');
        dots.forEach((dot, index) => {
            if (index === this.currentSlide) {
                dot.className = 'w-3 h-3 rounded-full transition-all duration-300 bg-white';
            } else {
                dot.className = 'w-3 h-3 rounded-full transition-all duration-300 bg-white/40';
            }
        });
    }

    showSlide(index) {
        const slides = document.querySelectorAll('.slide');

        // Hide all slides
        slides.forEach(slide => {
            slide.style.display = 'none';
            slide.classList.remove('active');
            slide.classList.add('inactive');
        });

        // Show current slide
        if (slides[index]) {
            slides[index].style.display = 'flex';
            slides[index].classList.remove('inactive');
            slides[index].classList.add('active');
            // --- OMITTED_CODE_BLOCK_START ---
            // Animate slide content
            // this.animateSlideContent(slides[index]);
            // --- OMITTED_CODE_BLOCK_END ---
        }

        this.updateNavigationDots();
    }
    // --- OMITTED_CODE_BLOCK_START ---
    // animateSlideContent(slide) {
    //     // Reset animations
    //     gsap.set(slide.querySelectorAll('*'), { opacity: 0, y: 30 });

    //     // Animate elements in sequence
    //     const timeline = gsap.timeline();

    //     timeline.to(slide, { opacity: 1, duration: 0.3 })
    //             .to(slide.querySelectorAll('h1, h2'), {
    //                 opacity: 1,
    //                 y: 0,
    //                 duration: 0.6,
    //                 stagger: 0.1,
    //                 ease: \"power2.out\"
    //             }, 0.1)
    //             .to(slide.querySelectorAll('p, div:not(h1):not(h2), ul, li'), {
    //                 opacity: 1,
    //                 y: 0,
    //                 duration: 0.5,
    //                 stagger: 0.05,
    //                 ease: \"power2.out\"
    //             }, 0.3);
    // }
    // --- OMITTED_CODE_BLOCK_END ---

    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.currentSlide++;
        } else {
            this.currentSlide = 0; // Loop back to first slide
        }
        this.showSlide(this.currentSlide);
        this.updateProgress();
    }

    previousSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
        } else {
            this.currentSlide = this.totalSlides - 1; // Go to last slide
        }
        this.showSlide(this.currentSlide);
        this.updateProgress();
    }

    goToSlide(index) {
        if (index >= 0 && index < this.totalSlides) {
            this.currentSlide = index;
            this.showSlide(this.currentSlide);
            this.updateProgress();
        }
    }

    updateProgress() {
        const progressBar = document.getElementById('progress-bar');
        const progress = ((this.currentSlide + 1) / this.totalSlides) * 100;
        progressBar.style.width = `${progress}%`;
    }
    // --- OMITTED_CODE_BLOCK_START ---
    // toggleFullscreen() {
    //     if (!document.fullscreenElement) {
    //         document.documentElement.requestFullscreen().catch(err => {
    //             console.log(`Error attempting to enable fullscreen: ${err.message}`);
    //         });
    //     } else {
    //         document.exitFullscreen();
    //     }
    // }

    // toggleOverview() {
    //     // Simple implementation - could be enhanced with a grid view
    //     const slideContainer = document.getElementById('slide-container');
    //     if (slideContainer.classList.contains('overview-mode')) {
    //         slideContainer.classList.remove('overview-mode');
    //         this.showSlide(this.currentSlide);
    //     } else {
    //         slideContainer.classList.add('overview-mode');
    //         // Show all slides in grid (simplified)
    //         const slides = document.querySelectorAll('.slide');
    //         slides.forEach(slide => {
    //             slide.style.display = 'flex';
    //         });
    //     }
    // }

    // startAutoPlay(interval = 5000) {
    //     this.isAutoPlaying = true;
    //     this.autoPlayInterval = setInterval(() => {
    //         this.nextSlide();
    //     }, interval);
    // }

    // stopAutoPlay() {
    //     this.isAutoPlaying = false;
    //     if (this.autoPlayInterval) {
    //         clearInterval(this.autoPlayInterval);
    //         this.autoPlayInterval = null;
    //     }
    // }

    // toggleAutoPlay() {
    //     if (this.isAutoPlaying) {
    //         this.stopAutoPlay();
    //     } else {
    //         this.startAutoPlay();
    //     }
    // }
    // --- OMITTED_CODE_BLOCK_END ---
}

// Initialize the presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const presentation = new PresentationApp();
    // --- OMITTED_CODE_BLOCK_START ---
    // Global access for debugging
    // window.presentation = presentation;
    // Handle visibility change (\n
    // --- OMITTED_CODE_BLOCK_END ---
});
