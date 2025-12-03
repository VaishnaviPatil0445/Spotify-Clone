// Toggle sidebar on mobile
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');

    if (window.innerWidth <= 576) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target) && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    }
});

// Update volume when clicking on volume bar
document.addEventListener('DOMContentLoaded', function() {
    const volumeBar = document.querySelector('.volume-bar');
    if (volumeBar) {
        volumeBar.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            const volumeProgress = this.querySelector('.volume-progress');
            volumeProgress.style.width = `${pos * 100}%`;
        });
    }

    // Update progress bar when clicking
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        progressBar.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            const progress = this.querySelector('.progress');
            progress.style.width = `${pos * 100}%`;
        });
    }

    // Like button functionality
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-regular');
            icon.classList.toggle('fa-solid');
        });
    });

    // Play/Pause button functionality
    const playBtn = document.querySelector('.play-btn');
    if (playBtn) {
        playBtn.addEventListener('click', function() {
            if (this.classList.contains('fa-play')) {
                this.classList.remove('fa-play');
                this.classList.add('fa-pause');
            } else {
                this.classList.remove('fa-pause');
                this.classList.add('fa-play');
            }
        });
    }

    // Create menu toggle button for mobile
    if (window.innerWidth <= 576) {
        const menuToggle = document.createElement('button');
        menuToggle.classList.add('menu-toggle');
        menuToggle.innerHTML = '&#9776;'; // Hamburger icon
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleSidebar();
        });
        document.body.appendChild(menuToggle);
    }

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 576) {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.remove('active');

            // Remove menu toggle if exists
            const menuToggle = document.querySelector('.menu-toggle');
            if (menuToggle) {
                menuToggle.remove();
            }
        } else {
            // Add menu toggle for mobile
            if (!document.querySelector('.menu-toggle')) {
                const menuToggle = document.createElement('button');
                menuToggle.classList.add('menu-toggle');
                menuToggle.innerHTML = '&#9776;'; // Hamburger icon
                menuToggle.addEventListener('click', function(e) {
                    e.stopPropagation();
                    toggleSidebar();
                });
                document.body.appendChild(menuToggle);
            }
        }
    });
});