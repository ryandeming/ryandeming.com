import.meta.glob([
    '../images/**',
    '../fonts/**',
]);

// This is all you.

// on scroll add active class to header-nav
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("header-nav").classList.add('active');
    } else {
        document.getElementById("header-nav").classList.remove('active');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('background-video');
    const placeholder = document.getElementById('video-placeholder');
    console.log('dom content loaded');

    // Add event listeners for debugging
    video.addEventListener('loadeddata', function() {
        console.log('Video data loaded');
    });

    video.addEventListener('loadedmetadata', function() {
        console.log('can play');
        placeholder.style.display = 'none';
        video.style.display = 'block';
        video.play();
    });

    video.addEventListener('error', function(e) {
        console.error('Video error:', e);
    });

    // Fallback for Safari
    setTimeout(function() {
        if (video.readyState >= 3) { // HAVE_FUTURE_DATA
            console.log('Fallback: Video ready state is sufficient');
            placeholder.style.display = 'none';
            video.style.display = 'block';
            video.play();
        } else {
            console.log('Fallback: Video not ready, showing placeholder');
        }
    }, 1600);

    const navItems = document.querySelectorAll('.nav-item');
    const portfolioImages = document.querySelectorAll('.portfolio-image');
    const projectDescriptions = document.querySelectorAll('.project-description');

    navItems.forEach(navItem => {
        navItem.addEventListener('click', function() {
            const id = this.getAttribute('data-id');

            // Remove active class from all nav items
            navItems.forEach(item => item.classList.remove('active'));
            

            // Remove active class from all portfolio images
            portfolioImages.forEach(image => {
                image.classList.remove('active')
                image.classList.remove('fade-in');
            });
            // Add active class to the corresponding portfolio image
            const portfolioImage = document.querySelector(`.portfolio-image[data-id="${id}"]`);

            // Remove active class from all project descriptions
            projectDescriptions.forEach(description => {
                description.classList.remove('active')
                description.classList.remove('fade-in');
            });

            // Add active class to the corresponding project description
            const projectDescription = document.querySelector(`.project-description[data-id="${id}"]`);
            if(!portfolioImage || !projectDescription) return;
            this.classList.add('active');
            portfolioImage.classList.add('active');
            projectDescription.classList.add('active');

            setTimeout(() => {
                portfolioImage.classList.add('fade-in');
                projectDescription.classList.add('fade-in');
            }, 10);
        });
    });
});