const form = document.querySelector(".login-form form")
const loginEmail = document.querySelector(".login-email-input")
const loginPass = document.querySelector(".login-pass-input")
const showPassIcon = document.querySelector(".show-pass-icon")
const hidePassIcon = document.querySelector(".login-form .hide-pass-icon")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  if(loginEmail.value.trim() !== "" && loginPass.value.trim() !== "") {
    e.preventDefault()
    window.location.href = "dashboard.html"
    window.localStorage.setItem("username", JSON.stringify({username: loginEmail.value, isLogged: true}))
  }
})
showPassIcon.addEventListener("click", () => {
  showPassIcon.classList.add("d-none")
  loginPass.type = 'text'
  hidePassIcon.classList.remove("d-none")
})
hidePassIcon.addEventListener("click", () => {
  hidePassIcon.classList.add("d-none")
  loginPass.type = 'password'
  showPassIcon.classList.remove("d-none")
})

const responsive = gsap.matchMedia();

responsive.add("(min-width: 768px)", () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out"
    }
  });

  tl.fromTo(
    ".login-form",
    {
      rotateY: 40,
      scaleX: 0.75,
      opacity: 0,
      transformOrigin: "center center"
    },
    {
      rotateY: 0,
      scaleX: 1,
      opacity: 1,
      duration: 1.2
    }
  );

  return () => tl.kill();
});

