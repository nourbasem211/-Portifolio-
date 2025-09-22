// This script demonstrates basic form handling and a simple scroll effect.

// 1. Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Simple form submission handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission

        // In a real-world scenario, you would send this data to a backend server.
        // For this template, we'll just log it and show an alert.

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        console.log('Form data:', data);
        alert('Thank you for your message! I will get back to you soon.');

        contactForm.reset(); // Resets the form fields
    });
}


const galleryImages = document.querySelectorAll(".project-gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;


galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage(currentIndex);
    lightbox.classList.add("active");
  });
});

function showImage(index) {
  lightboxImg.src = galleryImages[index].src;
}


closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});


nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage(currentIndex);
});


lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});


document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.classList.remove("active");
  }
  if (e.key === "ArrowRight") {
    nextBtn.click();
  }
  if (e.key === "ArrowLeft") {
    prevBtn.click();
  }
});


