// Mobile Menu Toggle
document.getElementById("mobile-menu").addEventListener("click", function () {
  let navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
});

// Search Box Toggle
function toggleSearch() {
  let searchBox = document.getElementById("searchBox");
  searchBox.classList.toggle("show");
}

// Close the search box if clicking outside
document.addEventListener("click", function (event) {
  let searchBox = document.getElementById("searchBox");
  let searchIcon = document.querySelector(".search-icon");

  if (!searchBox.contains(event.target) && !searchIcon.contains(event.target)) {
    searchBox.classList.remove("show");
  }
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// after hero section

document.addEventListener("DOMContentLoaded", () => {
  const ingredients = document.querySelectorAll(".ingredient");
  const productImage = document.querySelector(".product-image");

  // Add hover effect for ingredients
  ingredients.forEach((ingredient) => {
    ingredient.addEventListener("mouseenter", () => {
      ingredients.forEach((ing) => {
        if (ing !== ingredient) {
          ing.style.opacity = "0.5";
        }
      });
      productImage.style.transform = "translate(-50%, -50%) scale(0.95)";
    });

    ingredient.addEventListener("mouseleave", () => {
      ingredients.forEach((ing) => {
        ing.style.opacity = "1";
      });
      productImage.style.transform = "translate(-50%, -50%) scale(1)";
    });
  });

  // Add click handler for view ingredients button
  const viewIngredientsBtn = document.querySelector(".view-ingredients");
  viewIngredientsBtn.addEventListener("click", () => {
    // Animate ingredients
    ingredients.forEach((ingredient, index) => {
      setTimeout(() => {
        ingredient.style.transform = `
                    rotate(${index * 45}deg) 
                    translateX(200px) 
                    rotate(${-index * 45}deg)
                    scale(1.1)
                `;
        setTimeout(() => {
          ingredient.style.transform = `
                        rotate(${index * 45}deg) 
                        translateX(180px) 
                        rotate(${-index * 45}deg)
                        scale(1)
                    `;
        }, 300);
      }, index * 50);
    });
  });
});

// Handle flavor selection
document.querySelectorAll(".flavor-option input").forEach((input) => {
  input.addEventListener("change", function () {
    document.querySelectorAll(".flavor-option").forEach((option) => {
      option.classList.remove("active");
    });
    this.closest(".flavor-option").classList.add("active");
  });
});

// Handle subscription selection
document.querySelectorAll(".subscription-card input").forEach((input) => {
  input.addEventListener("change", function () {
    document.querySelectorAll(".subscription-card").forEach((card) => {
      card.classList.remove("active");
    });
    this.closest(".subscription-card").classList.add("active");
  });
});

// Add to cart button animation
// const addToCartBtn = document.querySelector(".add-to-cart-btn");
// addToCartBtn.addEventListener("click", function () {
//   this.style.transform = "scale(0.95)";
//   setTimeout(() => {
//     this.style.transform = "scale(1)";
//   }, 200);
// });

// Sticky navigation
const navbar = document.querySelector(".navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    navbar.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !navbar.classList.contains("scroll-down")) {
    navbar.classList.remove("scroll-up");
    navbar.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    navbar.classList.contains("scroll-down")
  ) {
    navbar.classList.remove("scroll-down");
    navbar.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
});

// Newsletter form submission
document.querySelectorAll(".newsletter-form, .footer-form").forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    // Here you would typically send the email to your server
    alert("Thank you for subscribing! Check your email for confirmation.");
    this.reset();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".faq-question");
  const seeAllFAQs = document.querySelector(".see-all-faqs");
  const getInTouch = document.querySelector(".get-in-touch");

  // Function to toggle individual FAQ
  const toggleFAQ = (question) => {
    const answer = question.nextElementSibling;
    const isActive = question.classList.contains("active");

    // Close all FAQs
    faqQuestions.forEach((q) => {
      q.classList.remove("active");
      q.nextElementSibling.classList.remove("active");
    });

    // If the clicked FAQ wasn't active, open it
    if (!isActive) {
      question.classList.add("active");
      answer.classList.add("active");
    }
  };

  // Add click event to each FAQ question
  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => toggleFAQ(question));
  });

  // Get in touch button click handler
  getInTouch.addEventListener("click", () => {
    console.log("Get in touch clicked");
  });
});

// CART section

document.addEventListener("DOMContentLoaded", () => {
  // Gallery functionality
  const mainImage = document.querySelector(".main-image img");
  const thumbnails = document.querySelectorAll(".thumbnails img");
  const dots = document.querySelectorAll(".dot");
  const prevButton = document.querySelector(".nav-button.prev");
  const nextButton = document.querySelector(".nav-button.next");
  let currentIndex = 0;

  function updateGallery(index) {
    // Update main image
    mainImage.src = thumbnails[index].src;

    // Update thumbnails
    thumbnails.forEach((thumb) => thumb.classList.remove("active"));
    thumbnails[index].classList.add("active");

    // Update dots
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");

    // Update navigation buttons
    prevButton.disabled = index === 0;
    nextButton.disabled = index === thumbnails.length - 1;

    currentIndex = index;
  }

  // Thumbnail click handlers
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => updateGallery(index));
  });

  // Dot click handlers
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => updateGallery(index));
  });

  // Navigation button handlers
  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      updateGallery(currentIndex - 1);
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentIndex < thumbnails.length - 1) {
      updateGallery(currentIndex + 1);
    }
  });

  // Product selection functionality
  const flavorRadios = document.querySelectorAll('input[name="flavor"]');
  const purchaseTypeRadios = document.querySelectorAll(
    'input[name="purchase-type"]'
  );
  const addToCartButton = document.querySelector(".add-to-cart");

  // Cart URL mapping
  const cartUrls = {
    original: {
      "single-subscription": "/cart/original-single-sub",
      "double-subscription": "/cart/original-double-sub",
      "try-once": "/cart/original-once",
    },
    matcha: {
      "single-subscription": "/cart/matcha-single-sub",
      "double-subscription": "/cart/matcha-double-sub",
      "try-once": "/cart/matcha-once",
    },
    cacao: {
      "single-subscription": "/cart/cacao-single-sub",
      "double-subscription": "/cart/cacao-double-sub",
      "try-once": "/cart/cacao-once",
    },
  };

  function updateAddToCartUrl() {
    const selectedFlavor = document.querySelector(
      'input[name="flavor"]:checked'
    ).value;
    const selectedPurchaseType = document.querySelector(
      'input[name="purchase-type"]:checked'
    ).value;
    addToCartButton.href = cartUrls[selectedFlavor][selectedPurchaseType];
  }

  // Add change event listeners to all radio buttons
  flavorRadios.forEach((radio) => {
    radio.addEventListener("change", updateAddToCartUrl);
  });

  purchaseTypeRadios.forEach((radio) => {
    radio.addEventListener("change", updateAddToCartUrl);
  });

  // Initialize cart URL
  updateAddToCartUrl();
  // Initialize gallery
  updateGallery(0);
});

// After cart
document.addEventListener("DOMContentLoaded", () => {
  // Add smooth scroll animation for the CTA button
  const ctaButton = document.querySelector(".cta-button");

  ctaButton.addEventListener("click", () => {
    // You can add your purchase or trial logic here
    alert("Thank you for your interest! Purchase functionality coming soon.");
  });

  // Add animation for benefit cards
  const benefitCards = document.querySelectorAll(".benefit-card");

  benefitCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 200);
  });
});

// Subscription section
document.addEventListener("DOMContentLoaded", () => {
  const subscribeButton = document.querySelector(".subscribe-button");

  subscribeButton.addEventListener("click", () => {
    // Add subscription logic here
    alert(
      "Thank you for your interest! Subscription functionality coming soon."
    );
  });

  // Add hover effect for benefit tags
  const benefitTags = document.querySelectorAll(".benefit-tag");

  benefitTags.forEach((tag) => {
    tag.addEventListener("mouseenter", () => {
      tag.style.transform = "scale(1.05)";
      tag.style.transition = "transform 0.2s ease";
    });

    tag.addEventListener("mouseleave", () => {
      tag.style.transform = "scale(1)";
    });
  });
});

// video section
document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.querySelector(".play-button");
  const ctaButton = document.querySelector(".cta-button");

  playButton.addEventListener("click", () => {
    // Add video play functionality here
    alert("Video player functionality coming soon!");
  });

  ctaButton.addEventListener("click", () => {
    // Add CTA functionality here
    alert("Testimonials page coming soon!");
  });

  // Add hover effects for steps
  const steps = document.querySelectorAll(".step");

  steps.forEach((step) => {
    step.addEventListener("mouseenter", () => {
      step.style.transform = "translateX(10px)";
      step.style.transition = "transform 0.3s ease";
    });

    step.addEventListener("mouseleave", () => {
      step.style.transform = "translateX(0)";
    });
  });
});

// status section

document.addEventListener("DOMContentLoaded", () => {
  const stats = document.querySelectorAll(".percentage");
  let animated = false;

  const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      element.textContent = `${current}%`;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  // Intersection Observer for animation trigger
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          stats.forEach((stat) => {
            const targetValue = parseInt(stat.getAttribute("data-target"));
            animateValue(stat, 0, targetValue, 2000);
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  // Observe the stats container instead of individual stats
  observer.observe(document.querySelector(".stats-container"));

  // Add hover effect for stat items
  const statItems = document.querySelectorAll(".stat-item");
  statItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "translateY(-10px)";
    });

    item.addEventListener("mouseleave", () => {
      item.style.transform = "translateY(0)";
    });
  });
});

// After status section

// import "./style.css";
// import javascriptLogo from "./javascript.svg";
// import viteLogo from "/vite.svg";
// import { setupCounter } from "./counter.js";

// document.querySelector("#app").innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `;

// setupCounter(document.querySelector("#counter"));

// Testimonials
const track = document.querySelector(".testimonials-track");
const cards = document.querySelectorAll(".testimonial-card");
const nextButton = document.querySelector(".nav-button.next");
const prevButton = document.querySelector(".nav-button.prev");
const dots = document.querySelectorAll(".dot");

document.addEventListener("DOMContentLoaded", () => {
  // Video player functionality
  const playButton = document.querySelector(".play-button");
  playButton.addEventListener("click", () => {
    console.log("Play video clicked");
  });

  // Testimonials carousel functionality

  let currentIndex = 0;
  const visibleCards = 3;
  const maxIndex = Math.max(0, cards.length - visibleCards);

  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 20; // Including gap
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle(
        "active",
        index === Math.floor(currentIndex / visibleCards)
      );
    });

    // Update button states
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex >= maxIndex;

    // Update button opacity
    prevButton.style.opacity = currentIndex === 0 ? "0.5" : "1";
    nextButton.style.opacity = currentIndex >= maxIndex ? "0.5" : "1";
  }

  nextButton.addEventListener("click", () => {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index * visibleCards;
      if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
      }
      updateCarousel();
    });
  });

  // Initialize carousel
  updateCarousel();

  // Handle responsive behavior
  let timeoutId;
  window.addEventListener("resize", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      updateCarousel();
    }, 100);
  });
});
