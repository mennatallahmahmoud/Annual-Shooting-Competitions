
const username = document.querySelectorAll(".username")
const formFileInputs = document.querySelectorAll("form input[type='file']")


username.forEach(u => u.textContent = `مرحباً`)

async function fetchDocs () {
    const docsTbody = document.getElementById("docs-tables-container")

    try {
        const res = await fetch("data/data.json")
        const data = await res.json()
        const docs = data.docs
        if (!docs || docs.length === 0) {
            document.querySelector("#documents .tables").classList.add("d-none")
            document.getElementById("no-docs-container").classList.remove("d-none")
        } else {
            docs.forEach(doc => {
                const tr = document.createElement("tr")
                tr.innerHTML = `
                    <td>${doc.docName}</td>
                    <td>${doc.docDate}</td>
                    <td>
                        <i class="fa-solid fa-circle-info fa-lg" title="عرض الملف"></i>
                        <i class="fa-solid fa-trash-can fa-lg" title="مسح الملف"></i>
                    </td>
                `
                docsTbody.appendChild(tr)
            })
        }


    } catch(err) {
        console.log(err);
    }
}

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

document.addEventListener("DOMContentLoaded", () => {
    fetchDocs()
})
