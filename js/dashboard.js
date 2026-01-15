const mainMenuLinks = document.querySelectorAll(".main-menu .navbar-nav li a:not(.navbar-logout a)")
const username = document.querySelector(".username")
const sidebarTabs = document.querySelectorAll(".sidebar-tab")
const sidebarDropdown = document.querySelectorAll(".sidebar-drop-down")
const trackingDropdown = document.querySelectorAll(".shooting-permit-sidebar-tab ul li a")
const ordersDropdown = document.querySelectorAll(".events-permit-sidebar-tab ul li a")
const sections = document.querySelectorAll("main section")
const trackingCards = document.querySelectorAll(".cards .content div")
const tableHeader = document.querySelector(".table-header")
const tablesContainer = document.getElementById("tables-container")
const noOrders = document.getElementById("no-orders-container")
const newOrderBtn = document.querySelectorAll(".new-order-btn")
const forms = document.querySelectorAll(".orders .forms form") 
const formFileInputs = document.querySelectorAll("form input[type='file']")
const dateInputs = document.querySelectorAll("form input[type='date']")
const settingsForm = document.querySelector("#settings form")
const password = document.querySelector(".dashboard-pass-input")
const confirmPassword = document.querySelector(".confirm-dashboard-pass-input")
const matchesPassAlert = document.querySelector(".matches-pass-alert")
const showPassBtn = document.querySelectorAll(".show-pass-btn")
let orders;
let parentTabDatasetFromNestedTab;

const usernameFromLS = JSON.parse(window.localStorage.getItem("username")).username.split("@")[0]
username.textContent = `مرحبا ${usernameFromLS}`


// Sidebar and Navbar 

function resetAllNested() {
    sidebarDropdown.forEach(t => t.classList.remove("active"))
}

function activateFirstNestedTab(tab) {
    if (!tab.classList.contains("dropdown")) return
    const firstNested = tab.querySelector(".sidebar-drop-down")
    if(firstNested) firstNested.classList.add("active")
}

function handleTabs(tabs) {
    tabs.forEach((tab) => {
        tab.addEventListener("click", (e) => {
            e.preventDefault()

            const activetedTab = tab.dataset.activeNested
            if(activetedTab) {
                const targetNestedTap = [...sidebarDropdown].filter(t => t.dataset.type === tab.dataset.activeNested)
                sidebarDropdown.forEach(t => t.classList.remove("active"))
                targetNestedTap.forEach(t => t.classList.add("active"))                
            } else if(!activetedTab) {
                resetAllNested()
                activateFirstNestedTab(tab)
            }
            tabs.forEach(t => t.classList.remove("active"))
            tab.classList.add("active")

            const target = tab.dataset.target
            sections.forEach((s) => s.classList.add("d-none"))
            if(target) {
                document.getElementById(target).classList.remove("d-none")
            }
        })
    })
}

handleTabs(sidebarTabs)
handleTabs(mainMenuLinks)

sidebarDropdown.forEach(pill => {
    pill.addEventListener("click", (e) => {
        e.preventDefault()
        e.stopPropagation()
        const parentTab = pill.closest(".sidebar-tab")
        parentTab.dataset.activeNested = pill.dataset.type
        sidebarTabs.forEach(t => t.classList.remove("active"))
        parentTab.classList.add("active")        
        resetAllNested()
        pill.classList.add("active")
    })
})

trackingDropdown.forEach(pill => {
    pill.addEventListener("click", (e) => {
        e.preventDefault()
        sections.forEach(s => s.classList.add("d-none"));
        document.querySelector(".tracking").classList.remove("d-none")
        const type = pill.dataset.type
        renderStats(type)
        renderTable(type)
    })
})

ordersDropdown.forEach(pill => {
    pill.addEventListener("click", (e) => {
        e.preventDefault()
        sections.forEach(s => s.classList.add("d-none"));
        document.querySelector(".orders").classList.remove("d-none")
        const type = pill.dataset.type
        forms.forEach(form => form.classList.add("d-none"))
        document.getElementById(type).classList.remove("d-none")
    })
})

let dashboardState = {
  currentSection: "tracking",
  orderType: null
};

function applyDashboardState() {

  sections.forEach(s => s.classList.add("d-none"));
  
  document.getElementById(dashboardState.currentSection).classList.remove("d-none");
  document.querySelectorAll(`[data-target="${dashboardState.currentSection}"]`).forEach(t => t.classList.add("active"));
  
  if (dashboardState.currentSection === "orders") {
      
    sidebarTabs.forEach(t => t.classList.remove("active"))
    mainMenuLinks.forEach(t => t.classList.remove("active"));
    sidebarDropdown.forEach(t => t.classList.remove("active"));

    const activePill = [...ordersDropdown].filter(p => p.dataset.type === dashboardState.orderType);
    if(activePill.length > 0) {
        activePill.forEach(p => {
            p.classList.add("active");
            p.closest(".sidebar-tab")?.classList.add("active")
        })
    }

    forms.forEach(f => f.classList.add("d-none"));
    document.getElementById(dashboardState.orderType)?.classList.remove("d-none");
  }

}

newOrderBtn.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    dashboardState.currentSection = "orders";
    dashboardState.orderType = btn.dataset.target;

    applyDashboardState();
  });
});

// Tracking Section

async function fetchOrders() {
    try {
        const res = await fetch("/data/data.json")
        const data = await res.json()
        orders = data.requestTypes        
        renderStats("shooting_permit")
        renderTable("shooting_permit")
    } catch(err) {
        console.log(err);
    }
}

function getRequestType(type) {
    return orders.find(item => item.type === type)
}

function renderStats(type) {
    const requestType = getRequestType(type)

    document.getElementById("totalOrders").textContent = requestType.stats.total
    document.getElementById("completedOrders").textContent = requestType.stats.completed
    document.getElementById("inProgressOrders").textContent = requestType.stats.in_progress
}

function renderTable(type) {
    const requestType = getRequestType(type)
    const ordersTbody = document.getElementById("ordersTbody")

    if(!requestType.orders || requestType.orders.length === 0) {
        tablesContainer.classList.add("d-none")
        noOrders.classList.remove("d-none")
        trackingCards.forEach(c => c.classList.add("opacity-50"))
    } else {
        noOrders.classList.add("d-none")
        tablesContainer.classList.remove("d-none")
        trackingCards.forEach(c => c.classList.remove("opacity-50"))
    
        ordersTbody.innerHTML = ``
        requestType.orders.forEach(order => {
            const tr = document.createElement("tr")
    
            tr.innerHTML = `
                <td>${order.date}</td>
                <td>${order.subject}</td>
                <td>${order.status}</td>
                <td>${order.fees}</td>
                <td class="text-start">
                    <i class="fa-solid fa-circle-info fa-lg" title="عرض التفاصيل"></i>
                    ${order.fees === "تم" ? `<i class="fa-solid fa-receipt fa-lg" title="إيصال رسوم الطلب"></i>` : ""}
                </td>
            `
            
            ordersTbody.appendChild(tr)
        })
        
    }

    tableHeader.textContent = requestType.title
    newOrderBtn.forEach(btn => btn.dataset.target = `${requestType.type}_request`)
}

// Orders Section

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

// Documents Section

async function fetchDocs () {
    const docsTbody = document.getElementById("docs-tables-container")

    try {
        const res = await fetch("/data/data.json")
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

document.addEventListener("DOMContentLoaded", () => {
    fetchOrders()
    fetchDocs()
})