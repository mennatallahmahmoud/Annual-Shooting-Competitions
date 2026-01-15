const date = document.getElementById("date")
const middleMenu = document.querySelector(".middle-menu")
const mainMenu = document.querySelector(".main-menu")
const menuLinks = document.querySelectorAll(".main-menu .navbar-nav li a")
const navBtn = document.querySelector(".main-menu .navbar-toggler")
const copyrightYear = document.querySelector(".copyright-year")


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

if(!date) return
if(date) {
  date.textContent = fullDate;
}



menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    menuLinks.forEach((l) => {
        l.classList.remove("active")
    })
    e.target.classList.add("active")
  })
})

if(navBtn) {
  navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("open")
  })
}



copyrightYear.textContent = `© ${new Date().getFullYear()} - 2017`

