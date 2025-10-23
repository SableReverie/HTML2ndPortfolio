
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
	navLinks.classList.toggle('active');
	hamburger.innerHTML = navLinks.classList.contains('active') 
		? '<i class="fas fa-times"></i>' 
		: '<i class="fas fa-bars"></i>';
});


document.querySelectorAll('.nav-links a').forEach(link => {
	link.addEventListener('click', () => {
		navLinks.classList.remove('active');
		hamburger.innerHTML = '<i class="fas fa-bars"></i>';
	});
});

// Header scroll effect
window.addEventListener('scroll', () => {
	const header = document.querySelector('header');
	const backToTop = document.querySelector('.back-to-top');

	if (window.scrollY > 100) {
		header.classList.add('scrolled');
		backToTop.classList.add('active');
	} else {
		header.classList.remove('scrolled');
		backToTop.classList.remove('active');
	}
});

// Back to top functionality
document.querySelector('.back-to-top').addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
	e.preventDefault();

	// Get form values
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const subject = document.getElementById('subject').value;
	const message = document.getElementById('message').value;

	// In a real application, you would send this data to a server
	// For this example, we'll just show an alert
	alert(`Thank you for your message, ${name}! I'll get back to you soon.`);

	// Reset form
	this.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();

		const targetId = this.getAttribute('href');
		if (targetId === '#') return;

		const targetElement = document.querySelector(targetId);
		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop - 80,
				behavior: 'smooth'
			});
		}
	});
});

// Add animation on scroll
const observerOptions = {
	threshold: 0.1,
	rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('animate-in');
		}
	});
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-card, .project-card, .about-content, .contact-container').forEach(el => {
	observer.observe(el);
});

