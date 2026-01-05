const form = document.querySelector(".register-form form")
const password = document.querySelector(".register-form form .signup-pass-input")
const confirmPassword = document.querySelector(".register-form form .confirm-signup-pass-input")
const matchesPassAlert = document.querySelector(".register-form form .matches-pass-alert")
const showPassBtn = document.querySelectorAll(".show-pass-btn")

showPassBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        const parent = btn.parentElement
        const input = parent.querySelector("input")
        const showPass = parent.querySelector(".show-pass-icon")
        const hidePass = parent.querySelector(".hide-pass-icon")

        if (input.type === "password") {
            input.type = "text"
            showPass.classList.add("d-none")
            hidePass.classList.remove("d-none")
        } else {
            input.type = "password"
            showPass.classList.remove("d-none")
            hidePass.classList.add("d-none")
        }
    })
})

form.addEventListener("submit", (e) => {
    if (password.value !== confirmPassword.value) {
        e.preventDefault()
        matchesPassAlert.classList.remove("d-none")
    } else {
        matchesPassAlert.classList.add("d-none")
    }
})

const responsive = gsap.matchMedia();

responsive.add("(min-width: 768px)", () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out"
    }
  });

  tl.fromTo(
    ".register-form",
    {
      rotateY: -40,
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