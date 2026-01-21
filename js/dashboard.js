const username = document.querySelectorAll(".username")
const trackingDropdown = document.querySelectorAll(".tracking-sidebar-tab ul li a")
const trackingCards = document.querySelectorAll(".cards .content div")
const tableHeader = document.querySelector(".table-header")
const tablesContainer = document.getElementById("tables-container")
const noOrders = document.getElementById("no-orders-container")
const newOrderBtn = document.querySelectorAll(".new-order-btn")
const trackingTitleSvg = document.querySelector(".tracking-title-svg rect:first-child")
let orders;
let currentTrackingType;


username.forEach(u => u.textContent = `مرحباً`)


trackingDropdown.forEach(pill => {
    pill.addEventListener("click", (e) => {
        e.preventDefault()
        e.stopPropagation()
        const type = pill.dataset.type
        currentTrackingType = type
        renderStats(type)
        renderTable(type)
        trackingDropdown.forEach(a => a.classList.remove("active"))
        pill.classList.add("active")
    })
})


async function fetchOrders() {
    try {
        const res = await fetch("data/data.json")
        const data = await res.json()
        orders = data.requestTypes        
    } catch(err) {
        console.log(err);
    }
}

async function initOrders() {
    await fetchOrders()
    currentTrackingType = "shooting_permit"
    renderStats(currentTrackingType)
    renderTable(currentTrackingType)
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
    if (requestType.type === "facility_booking") {
        trackingTitleSvg.setAttribute("x", "140")
    } else if(requestType.type === "billboard_booking") {
        trackingTitleSvg.setAttribute("x", "80")
    } else {
        trackingTitleSvg.setAttribute("x", "110")
    }
    newOrderBtn.forEach(btn => {
        if (requestType.type === "shooting_permit") {
            btn.href = "shooting-permit.html"
        } else if (requestType.type === "events_permit") {
            btn.href = "events-permit.html"
        } else if (requestType.type === "facility_booking") {
            btn.href = "facility-booking.html"
        } else if (requestType.type === "billboard_booking") {
            btn.href = "billboard-booking.html"
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    initOrders()
    fetchOrders()
})