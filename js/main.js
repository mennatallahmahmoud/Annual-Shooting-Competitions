const date = document.getElementById("date")
const middleMenu = document.querySelector(".middle-menu")
const mainMenu = document.querySelector(".main-menu")
const menuLinks = document.querySelectorAll(".main-menu .navbar-nav li a")
const menuBtn = document.querySelector(".main-menu .navbar-toggler")
const copyrightYear = document.querySelector(".copyright-year")
const scrollToTop = document.querySelector(".scroll-to-top")

const months = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيه", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
const today = new Date()
const day = today.getDate()
const month = months[today.getMonth()]
const year = today.getFullYear()
const options = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
  timeZone: 'Asia/Dubai'
}
const locale = 'ar-AE-u-ca-islamic';
const hijriDate = new Intl.DateTimeFormat(locale, options).format(today)
const fullDate = `${hijriDate} - ${day} ${month} ${year} م`
date.textContent = fullDate;



menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    menuLinks.forEach((l) => {
        l.classList.remove("active")
    })
    e.target.classList.add("active")
  })
})



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
    0: { slidesPerView: 2 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 4 },
    1200: { slidesPerView: 5 } 
  }
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

copyrightYear.textContent = `${new Date().getFullYear()} - 2017 ©`