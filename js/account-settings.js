const username = document.querySelectorAll(".username")
const settingsForm = document.querySelector("#settings form")
const password = document.querySelector(".dashboard-pass-input")
const confirmPassword = document.querySelector(".confirm-dashboard-pass-input")
const matchesPassAlert = document.querySelector(".matches-pass-alert")
const showPassBtn = document.querySelectorAll(".show-pass-btn")

username.forEach(u => u.textContent = `مرحباً`)

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
settingsForm.addEventListener("submit", (e) => {
    if (password.value !== confirmPassword.value) {
        e.preventDefault()
        matchesPassAlert.classList.remove("d-none")
    } else {
        matchesPassAlert.classList.add("d-none")
    }
})