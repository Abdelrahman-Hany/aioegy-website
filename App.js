let swiper = new Swiper('.mySwiper', {
    effect: 'fade',
    loop: true,             
    autoplay: {
        delay: 2000,     
        disableOnInteraction: false, 
    },
    fadeEffect: {
        crossFade: true,  
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchTerm = searchInput.value.trim();

        if (searchTerm) {
            // Perform search action or redirect to search results page
            console.log('Search term:', searchTerm);
            // Example: Redirect to a search results page
            window.location.href = `/search?query=${encodeURIComponent(searchTerm)}`;
        } else {
            alert('Please enter a search term.');
        }
    });

    // Dropdown menu toggle for Defense and Civil sections
    const defenseDropdown = document.getElementById('defenseDropdown');
    const civilDropdown = document.getElementById('civilDropdown');

    defenseDropdown.addEventListener('mouseenter', function() {
        this.classList.add('show');
        this.nextElementSibling.classList.add('show');
    });

    defenseDropdown.addEventListener('mouseleave', function() {
        this.classList.remove('show');
        this.nextElementSibling.classList.remove('show');
    });

    civilDropdown.addEventListener('mouseenter', function() {
        this.classList.add('show');
        this.nextElementSibling.classList.add('show');
    });

    civilDropdown.addEventListener('mouseleave', function() {
        this.classList.remove('show');
        this.nextElementSibling.classList.remove('show');
    });
});
