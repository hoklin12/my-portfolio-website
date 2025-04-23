// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".nav-links")
  
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navLinks.classList.toggle("active")
    })
  
    // Close mobile menu when a nav link is clicked
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navLinks.classList.remove("active")
      })
    })
  
    // Project Filtering
    const filterBtns = document.querySelectorAll(".filter-btn")
    const projectCards = document.querySelectorAll(".project-card")
  
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        // Remove active class from all buttons
        filterBtns.forEach((btn) => btn.classList.remove("active"))
        // Add active class to clicked button
        this.classList.add("active")
  
        const filter = this.getAttribute("data-filter")
  
        projectCards.forEach((card) => {
          if (filter === "all" || card.getAttribute("data-category") === filter) {
            card.style.display = "block"
          } else {
            card.style.display = "none"
          }
        })
      })
    })
  
    // Animate skill bars on scroll
    const skillSection = document.querySelector(".skills")
    const progressBars = document.querySelectorAll(".progress-line span")
  
    function showProgress() {
      progressBars.forEach((progressBar) => {
        const value = progressBar.dataset.percent
        progressBar.style.width = value
      })
    }
  
    window.addEventListener("scroll", () => {
      const sectionPos = skillSection.getBoundingClientRect().top
      const screenPos = window.innerHeight / 1.3
  
      if (sectionPos < screenPos) {
        showProgress()
      }
    })
  
    // Form submission
    const contactForm = document.getElementById("contactForm")
  
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
  
      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value
  
      // Here you would typically send the form data to a server
      // For this example, we'll just log it to the console
      console.log("Form submitted:", { name, email, subject, message })
  
      // Show success message (in a real app, do this after successful submission)
      alert("Thank you for your message! I will get back to you soon.")
  
      // Reset the form
      contactForm.reset()
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for header height
            behavior: "smooth",
          })
        }
      })
    })
  
    // Add scroll animation for elements
    const fadeInElements = document.querySelectorAll(".project-card, .about-content, .contact-content")
  
    function checkFade() {
      fadeInElements.forEach((element) => {
        const elementPos = element.getBoundingClientRect().top
        const screenPos = window.innerHeight / 1.3
  
        if (elementPos < screenPos) {
          element.style.opacity = "1"
          element.style.transform = "translateY(0)"
        }
      })
    }
  
    // Set initial styles for fade in elements
    fadeInElements.forEach((element) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(20px)"
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    })
  
    // Check fade on scroll
    window.addEventListener("scroll", checkFade)
    // Check fade on initial load
    window.addEventListener("load", checkFade)
  
    // Highlight active navigation link based on scroll position
    function highlightActiveNavLink() {
      // Get all sections that have corresponding nav links
      const sections = document.querySelectorAll("section[id]")
  
      // Get current scroll position
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop
  
      // Loop through sections to find the one currently in view
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100 // Offset for header
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // Remove active class from all nav links
          document.querySelectorAll(".nav-links a").forEach((link) => {
            link.classList.remove("active-link")
          })
  
          // Add active class to corresponding nav link
          document.querySelector(`.nav-links a[href="#${sectionId}"]`).classList.add("active-link")
        }
      })
    }
  
    // Add click event to nav links to add active class
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", function () {
        // Remove active class from all links
        document.querySelectorAll(".nav-links a").forEach((l) => {
          l.classList.remove("active-link")
        })
  
        // Add active class to clicked link
        this.classList.add("active-link")
      })
    })
  
    // Call the highlight function on scroll
    window.addEventListener("scroll", highlightActiveNavLink)
  
    // Call it on page load too
    window.addEventListener("load", highlightActiveNavLink)
  })
  