// This is all you.
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const portfolioImages = document.querySelectorAll('.portfolio-image');
    const projectDescriptions = document.querySelectorAll('.project-description');

    navItems.forEach(navItem => {
        navItem.addEventListener('click', function() {
            const id = this.getAttribute('data-id');

            // Remove active class from all nav items
            navItems.forEach(item => item.classList.remove('active'));
            

            // Remove active class from all portfolio images
            portfolioImages.forEach(image => image.classList.remove('active'));
            // Add active class to the corresponding portfolio image
            const portfolioImage = document.querySelector(`.portfolio-image[data-id="${id}"]`);

            // Remove active class from all project descriptions
            projectDescriptions.forEach(description => description.classList.remove('active'));
            // Add active class to the corresponding project description
            const projectDescription = document.querySelector(`.project-description[data-id="${id}"]`);
            if(!portfolioImage || !projectDescription) return;
            this.classList.add('active');
            portfolioImage.classList.add('active');
            projectDescription.classList.add('active');
            
        });
    });
});