// 1. MOBILE MENU TOGGLE
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// 2. SEARCH FUNCTIONALITY
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');

if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
        const term = e.target.value.toLowerCase();
        
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const desc = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(term) || desc.includes(term)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// 3. CATEGORY FILTER
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add to clicked
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');

        cards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// 4. DOWNLOAD SIMULATION (MODAL)
const modal = document.getElementById('downloadModal');
const modalTitle = document.getElementById('modalTitle');

function startDownload(appName) {
    if (modal && modalTitle) {
        modal.style.display = 'flex';
        modalTitle.innerText = "Downloading " + appName;

        // Simulate a 2-second wait time
        setTimeout(() => {
            modal.style.display = 'none';
            alert('Download started for ' + appName + '!');
            // Here you would normally redirect: window.location.href = 'link-to-file';
        }, 2000);
    }
}

// Close modal if clicked outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}