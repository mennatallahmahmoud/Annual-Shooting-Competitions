const username = document.querySelectorAll(".username")
const dateInputs = document.querySelectorAll("form input[type='date']")
const formFileInputs = document.querySelectorAll("form input[type='file']")

username.forEach(u => u.textContent = `مرحباً`)


dateInputs.forEach((input) => {    
    const today = new Date().toISOString().split("T")[0]
    input.min = today
})

formFileInputs.forEach((input) => {
    const label = document.querySelector(`label[for="${input.id}"]`)
    const text = label.querySelector(".file-text")

    const MAX_SIZE = 2 * 1024 * 1024;
    const alert = document.createElement("span")
    alert.textContent = `يجب أن يكون الملف أقل من 2 م.ب`
    alert.style.color = '#c90000'
    alert.style.fontSize = '10px'
    alert.style.display = 'none'
    
    input.after(alert)

    input.addEventListener("change", () => {
        if (!input.files.length) return;

        if (input.files[0].size > MAX_SIZE) {
            alert.style.display = 'block'
            input.value = ''
        } else {
            alert.style.display = 'none'
            text.textContent = input.files[0].name
        }
    })
})
