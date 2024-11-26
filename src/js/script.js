// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default link behavior
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
// Lightbox functionality for gallery
document.querySelectorAll('.gallery img').forEach(image => {
    image.addEventListener('click', () => {
        // Create lightbox overlay
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        document.body.appendChild(lightbox);

        // Add the clicked image to the lightbox
        const img = document.createElement('img');
        img.src = image.src;
        lightbox.appendChild(img);

        // Close the lightbox when clicked
        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});
// Form validation for the contact form
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', event => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        event.preventDefault(); // Prevent form submission
        alert('Please fill in all fields.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        event.preventDefault();
        alert('Please enter a valid email address.');
    }
});
// Update the footer year dynamically
const footerYear = document.querySelector('footer p');
footerYear.textContent = `© ${new Date().getFullYear()} Blog Website`;
// Load more posts functionality
let currentPosts = 2; // Initial number of posts displayed
const loadMoreBtn = document.createElement('button');
loadMoreBtn.textContent = 'Load More';
document.querySelector('main section').appendChild(loadMoreBtn);

loadMoreBtn.addEventListener('click', () => {
    const posts = document.querySelectorAll('article');
    for (let i = currentPosts; i < currentPosts + 2 && i < posts.length; i++) {
        posts[i].style.display = 'block';
    }
    currentPosts += 2;
    if (currentPosts >= posts.length) {
        loadMoreBtn.style.display = 'none'; // Hide button if no more posts
    }
});
// Scroll-to-top button functionality
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = '↑ Top';
scrollTopBtn.classList.add('scroll-top');
document.body.appendChild(scrollTopBtn);

scrollTopBtn.style.display = 'none'; // Initially hidden

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
