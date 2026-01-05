const scrollToTop = document.querySelector(".scroll-to-top")


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    slidesPerView: 5,
    spaceBetween: 20,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
        reverseDirection: true,
        pauseOnMouseEnter: true
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4 },
        1200: { slidesPerView: 5 } 
    }
});

gsap.registerPlugin(ScrollTrigger);

gsap.to("#welcome-sec", {
  scrollTrigger: {
    trigger: "#welcome-sec", 
    start: "top 80%",
    toggleActions: "play none none none"
  },
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power2.out"
});
gsap.to("#events-sec", {
  scrollTrigger: {
    trigger: "#events-sec", 
    start: "top 80%", 
    toggleActions: "play none none none"
  },
  opacity: 1,
  y: 0,
  duration: 1.5,
  ease: "power2.out"
});
gsap.to("#images-sec", {
  scrollTrigger: {
    trigger: "#images-sec", 
    start: "top 80%", 
    toggleActions: "play none none none"
  },
  opacity: 1,
  x: 0,
  duration: 1.5,
  ease: "power2.out"
});
gsap.to("#videos-sec", {
  scrollTrigger: {
    trigger: "#videos-sec",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  opacity: 1,
  y: 0,
  duration: 1.5,
  ease: "power2.out"
});

window.addEventListener("scroll", () => {
  if(window.scrollY > 800) {
    scrollToTop.classList.add("show")
  } else {
    scrollToTop.classList.remove("show")
  }
})

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
})