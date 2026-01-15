class AppNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            
        <nav class="navbar navbar-expand-md d-none d-md-block sub-menu position-relative">
            <div class="container-fluid text-center">
                <div class="register auth-btns d-flex justify-content-center align-items-center">
                    <button class="btn overflow-hidden d-flex gap-1 align-items-center justify-content-between border-0 mx-auto p-2">
                        <i class="fa-solid fa-right-to-bracket fa-xs text-white"></i>
                        <a href="login.html" class="main-links card-link fw-bold text-white">تسجيل الدخول</a>
                    </button>
                    <button class="btn overflow-hidden d-flex gap-1 align-items-center justify-content-between border-0 mx-auto p-2">
                        <i class="fa-solid fa-user-plus fa-xs text-white"></i>
                        <a href="register.html" class="main-links card-link fw-bold text-white">حساب جديد</a>
                    </button>
                </div>
                <div class="register logout-btn d-flex justify-content-center align-items-center d-none">
                    <button class="btn overflow-hidden d-flex gap-1 align-items-center justify-content-between border-0 mx-auto p-2">
                        <i class="fa-solid fa-right-from-bracket fa-xs text-white"></i>
                        <a href="login.html" class="main-links card-link fw-bold text-white">تسجيل الخروج</a>
                    </button>
                </div>
                <p id="date" class="text-white mb-0"></p>
            </div>
        </nav>


        <nav class="navbar navbar-expand-lg p-0 middle-menu position-relative">
            <div class="container position-relative py-1">
                <a class="navbar-brand d-flex align-items-center" href="index.html">
                    <img src="imgs/logo.webp" alt="شعار مسابقات الرماية السنوية" class="logo"/>
                    <p class="mb-0 ps-2">
                        <span class="d-block">مسابقات الرماية السنوية</span>
                        <span>Annual Shooting Competitions</span>
                    </p>
                </a>
                <div class="middle-menu-side flex-row align-items-center d-none d-lg-flex">
                    <div id="navbarSupportedContent">
                        <form class="d-flex search-form rounded-2" role="search">
                            <input class="form-control bg-transparent rounded-0 border-0" type="search" placeholder="كلمة البحث" aria-label="Search"/>
                            <button class="btn search-btn rounded-0" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                    <ul class="navbar-nav social-icons flex-row gap-1">
                        <li><a href="https://www.instagram.com" target="_blank">
                            <i class="fa-brands fa-instagram fa-lg"></i>
                        </a></li>
                        <li><a href="https://www.x.com" target="_blank">
                            <i class="fa-brands fa-x-twitter fa-lg"></i>
                        </a></li>
                        <li><a href="https://www.snapchat.com" target="_blank">
                            <i class="fa-brands fa-snapchat fa-lg"></i>
                        </a></li>
                    </ul>
                </div>
            </div>
        </nav>

        
        <nav class="navbar navbar-expand-lg main-menu position-relative">
            <div class="container position-relative">
                <button class="navbar-toggler d-flex border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa-solid fa-bars-staggered navbar-fa-icon d-lg-none"></i>
                    <i class="fa-solid fa-xmark d-lg-none"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav mx-auto align-items-center">
                        <li class="nav-item">
                            <a class="nav-link active d-none d-lg-block" aria-current="page" href="index.html"><i class="fa-solid fa-house fa-lg"></i></a>
                            <a class="nav-link menu-links active d-lg-none" href="index.html" >
                                الرئيسية
                            </a>
                        </li>
                        <li class="nav-item dropdown position-relative">
                            <a class="nav-link menu-links dropdown-toggle" href="#" >
                                المسابقات
                            </a>
                            <ul class="dropDown-menu border-0 position-absolute p-3 rounded-2 d-none ">
                                <li class="mb-2"><a class="dropdown-item menu-links" href="#">
                                    <i class="fa-solid fa-angle-left"></i>
                                    تاريخ المسابقات</a></li>
                                <li><a class="dropdown-item menu-links" href="#">
                                    <i class="fa-solid fa-angle-left"></i>تعريف المسابقات</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link menu-links" href="#">من أقوال القائد</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link menu-links" href="#">أنواع المسابقات</a>
                        </li>
                        <li class="nav-item dropdown position-relative">
                            <a class="nav-link menu-links dropdown-toggle" href="#" >
                                التسجيل للمشاركة في المسابقات
                            </a>
                            <ul class="dropDown-menu border-0 position-absolute p-3 rounded-2 d-none ">
                                <li class="mb-2"><a class="dropdown-item menu-links" href="#">
                                    <i class="fa-solid fa-angle-left"></i>شروط التسجيل</a></li>
                                <li class="mb-2"><a class="dropdown-item menu-links" href="#">
                                    <i class="fa-solid fa-angle-left"></i>تسجيل فردي</a></li>
                                <li><a class="dropdown-item menu-links" href="#">
                                    <i class="fa-solid fa-angle-left"></i>تسجيل فرق إسقاط الصحون</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown position-relative">
                            <a class="nav-link menu-links dropdown-toggle" href="#" >
                                المسابقات والإعلام
                            </a>
                            <ul class="dropDown-menu border-0 position-absolute p-3 rounded-2 d-none ">
                                <li class="mb-2"><a class="dropdown-item menu-links" href="#">
                                    <i class="fa-solid fa-angle-left"></i>معرض الصور</a></li>
                                <li class="mb-2"><a class="dropdown-item menu-links" href="#">
                                    <i class="fa-solid fa-angle-left"></i>معرض الفيديو</a></li>
                                <li><a class="dropdown-item menu-links" href="#">
                                    <i class="fa-solid fa-angle-left"></i>أخبارنا</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link menu-links" href="#">النشرات اليومية</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link menu-links" href="#">معرض المسابقات</a>
                        </li>
                        <li class="nav-item dropdown position-relative">
                            <a class="nav-link menu-links dropdown-toggle" href="#" >
                                اتصل بنا
                            </a>
                            <ul class="dropDown-menu border-0 position-absolute p-3 rounded-2 d-none ">
                                <li class="mb-2"><a class="dropdown-item menu-links text-white" href="#">
                                    <i class="fa-solid fa-angle-left"></i>معلومات الاتصال</a></li>
                                <li><a class="dropdown-item menu-links text-white" href="#">
                                    <i class="fa-solid fa-angle-left"></i>خريطة الموقع</a></li>
                            </ul>
                        </li>
                        <hr class="w-100 d-md-none">
                        <li class="nav-item register-btns-small-screen d-flex d-md-none">
                            <a href="login.html" class="dropdown-item menu-links nav-link card-link fw-bold p-0">
                            <i class="fa-solid fa-right-to-bracket fa-xs"></i>
                            تسجيل الدخول</a>
                        </li>
                        <li class="nav-item register-btns-small-screen d-md-none">
                            <a href="register.html" class="dropdown-item menu-links nav-link card-link fw-bold">
                            <i class="fa-solid fa-user-plus fa-xs"></i>
                            حساب جديد</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        `
    }
}
customElements.define("app-navbar", AppNavbar)


// const authBtns = document.querySelector(".auth-btns")
// const logoutBtn = document.querySelector(".logout-btn")

// if(window.location.pathname.includes("dashboard") && authBtns && logoutBtn) {
//     logoutBtn.classList.remove("d-none")
//     authBtns.classList.add("d-none")
// } else {
//     logoutBtn.classList.add("d-none")
//     authBtns.classList.remove("d-none")
// }
