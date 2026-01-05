class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="container">
                <div class="row position-relative">
                    <div class="logo-side col-12 col-md-6 col-lg-3">
                        <div class="position-relative">
                            <a class="navbar-brand d-flex align-items-center" href="/index.html">
                                <img src="imgs/logo.webp" alt="شعار مسابقات الرماية السنوية" class="logo"/>
                                <p class="mb-0 ps-2">
                                    <span class="d-block">مسابقات الرماية السنوية</span>
                                    <span>Annual Shooting Competitions</span>
                                </p>
                            </a>
                            <p class="mt-2 mb-0">
                                تنظم قيادة الوحدات المساندة مسابقات الرماية السنوية الرابع عشر لعام 2026/2025 والتي تعد من أهم المسابقات الرائدة في الدولة...
                                <a href="#" class="main-links card-link fw-bold">أقرأ المزيد</a>
                            </p>
                            <div class="visitors-num p-2 mt-2 text-white text-center">
                                <i class="fa-solid fa-user"></i>
                                <span>عدد الـزوار:</span>
                                <span class="fw-bold">268653</span>
                            </div>
                        </div>
                    </div>
                    <div class="links-side col-12 col-md-6 col-lg-4">
                        <div class="heading mb-3 text-center">
                            <h2 class="fw-bold position-relative mb-0 fs-6 ms-4">روابط سريعة</h2>
                            <svg width="130" height="24" viewBox="0 0 130 24" xmlns="http://www.w3.org/2000/svg" class="position-relative">
                                <rect x="10" y="11" width="80" height="2" rx="1" fill="#ab7037"/>
                                <rect x="90" y="7" width="16" height="10" rx="2" fill="#ab7037"/>
                            </svg>
                        </div>
                        <div class="d-flex justify-content-evenly align-items-center">
                            <ul class="position-relative">
                                <li>
                                    <a href="#" class="main-links fw-bold d-flex align-items-center">
                                        <svg width="16" height="16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" class="target-icon ms-2 position-relative me-1">
                                            <circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="3" fill="none"/>
                                            <circle cx="32" cy="32" r="16" stroke="currentColor" stroke-width="3" fill="none"/>
                                            <circle cx="32" cy="32" r="6" fill="currentColor"/>
                                            <line x1="32" y1="2" x2="32" y2="14" stroke="currentColor" stroke-width="2"/>
                                            <line x1="32" y1="50" x2="32" y2="62" stroke="currentColor" stroke-width="2"/>
                                            <line x1="2" y1="32" x2="14" y2="32" stroke="currentColor" stroke-width="2"/>
                                            <line x1="50" y1="32" x2="62" y2="32" stroke="currentColor" stroke-width="2"/>
                                        </svg>
                                        الرئيسية
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="main-links fw-bold d-flex align-items-center">
                                        <svg width="16" height="16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" class="target-icon ms-2 position-relative me-1">
                                            <circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="3" fill="none"/>
                                            <circle cx="32" cy="32" r="16" stroke="currentColor" stroke-width="3" fill="none"/>
                                            <circle cx="32" cy="32" r="6" fill="currentColor"/>
                                            <line x1="32" y1="2" x2="32" y2="14" stroke="currentColor" stroke-width="2"/>
                                            <line x1="32" y1="50" x2="32" y2="62" stroke="currentColor" stroke-width="2"/>
                                            <line x1="2" y1="32" x2="14" y2="32" stroke="currentColor" stroke-width="2"/>
                                            <line x1="50" y1="32" x2="62" y2="32" stroke="currentColor" stroke-width="2"/>
                                        </svg>
                                        المسابقات
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="main-links fw-bold d-flex align-items-center">
                                        <svg width="16" height="16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" class="target-icon ms-2 position-relative me-1">
                                            <circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="3" fill="none"/>
                                            <circle cx="32" cy="32" r="16" stroke="currentColor" stroke-width="3" fill="none"/>
                                            <circle cx="32" cy="32" r="6" fill="currentColor"/>
                                            <line x1="32" y1="2" x2="32" y2="14" stroke="currentColor" stroke-width="2"/>
                                            <line x1="32" y1="50" x2="32" y2="62" stroke="currentColor" stroke-width="2"/>
                                            <line x1="2" y1="32" x2="14" y2="32" stroke="currentColor" stroke-width="2"/>
                                            <line x1="50" y1="32" x2="62" y2="32" stroke="currentColor" stroke-width="2"/>
                                        </svg>
                                        من أقوال القائد
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="main-links fw-bold d-flex align-items-center">
                                        <svg width="16" height="16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" class="target-icon ms-2 position-relative me-1">
                                            <circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="3" fill="none"/>
                                            <circle cx="32" cy="32" r="16" stroke="currentColor" stroke-width="3" fill="none"/>
                                            <circle cx="32" cy="32" r="6" fill="currentColor"/>
                                            <line x1="32" y1="2" x2="32" y2="14" stroke="currentColor" stroke-width="2"/>
                                            <line x1="32" y1="50" x2="32" y2="62" stroke="currentColor" stroke-width="2"/>
                                            <line x1="2" y1="32" x2="14" y2="32" stroke="currentColor" stroke-width="2"/>
                                            <line x1="50" y1="32" x2="62" y2="32" stroke="currentColor" stroke-width="2"/>
                                        </svg>
                                        أنواع المسابقات
                                    </a>
                                </li>
                            </ul>
                            <ul class="position-relative">
                                <li>
                                    <a href="#" class="main-links fw-bold d-flex align-items-center">
                                        <svg width="16" height="16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" class="target-icon ms-2 position-relative me-1">
                                            <circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="3" fill="none"/>
                                            <circle cx="32" cy="32" r="16" stroke="currentColor" stroke-width="3" fill="none"/>
                                            <circle cx="32" cy="32" r="6" fill="currentColor"/>
                                            <line x1="32" y1="2" x2="32" y2="14" stroke="currentColor" stroke-width="2"/>
                                            <line x1="32" y1="50" x2="32" y2="62" stroke="currentColor" stroke-width="2"/>
                                            <line x1="2" y1="32" x2="14" y2="32" stroke="currentColor" stroke-width="2"/>
                                            <line x1="50" y1="32" x2="62" y2="32" stroke="currentColor" stroke-width="2"/>
                                        </svg>
                                        التسجيل للمشاركة في المسابقات
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="main-links fw-bold d-flex align-items-center">
                                        <svg width="16" height="16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" class="target-icon ms-2 position-relative me-1">
                                            <circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="3" fill="none"/>
                                            <circle cx="32" cy="32" r="16" stroke="currentColor" stroke-width="3" fill="none"/>
                                            <circle cx="32" cy="32" r="6" fill="currentColor"/>
                                            <line x1="32" y1="2" x2="32" y2="14" stroke="currentColor" stroke-width="2"/>
                                            <line x1="32" y1="50" x2="32" y2="62" stroke="currentColor" stroke-width="2"/>
                                            <line x1="2" y1="32" x2="14" y2="32" stroke="currentColor" stroke-width="2"/>
                                            <line x1="50" y1="32" x2="62" y2="32" stroke="currentColor" stroke-width="2"/>
                                        </svg>
                                        المسابقات والإعلام
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="main-links fw-bold d-flex align-items-center">
                                        <svg width="16" height="16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" class="target-icon ms-2 position-relative me-1">
                                            <circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="3" fill="none"/>
                                            <circle cx="32" cy="32" r="16" stroke="currentColor" stroke-width="3" fill="none"/>
                                            <circle cx="32" cy="32" r="6" fill="currentColor"/>
                                            <line x1="32" y1="2" x2="32" y2="14" stroke="currentColor" stroke-width="2"/>
                                            <line x1="32" y1="50" x2="32" y2="62" stroke="currentColor" stroke-width="2"/>
                                            <line x1="2" y1="32" x2="14" y2="32" stroke="currentColor" stroke-width="2"/>
                                            <line x1="50" y1="32" x2="62" y2="32" stroke="currentColor" stroke-width="2"/>
                                        </svg>
                                        النشرات اليومية
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="main-links fw-bold d-flex align-items-center">
                                        <svg width="16" height="16" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" class="target-icon ms-2 position-relative me-1">
                                            <circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="3" fill="none"/>
                                            <circle cx="32" cy="32" r="16" stroke="currentColor" stroke-width="3" fill="none"/>
                                            <circle cx="32" cy="32" r="6" fill="currentColor"/>
                                            <line x1="32" y1="2" x2="32" y2="14" stroke="currentColor" stroke-width="2"/>
                                            <line x1="32" y1="50" x2="32" y2="62" stroke="currentColor" stroke-width="2"/>
                                            <line x1="2" y1="32" x2="14" y2="32" stroke="currentColor" stroke-width="2"/>
                                            <line x1="50" y1="32" x2="62" y2="32" stroke="currentColor" stroke-width="2"/>
                                        </svg>
                                        معرض المسابقات
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="contacts-side col-12 col-md-6 col-lg-2">
                        <div class="heading mb-3 text-center">
                            <h2 class="fw-bold position-relative mb-0 fs-6">اتصل بنا</h2>
                            <svg width="90" height="24" viewBox="0 0 90 24" xmlns="http://www.w3.org/2000/svg" class="position-relative rotated-heading-icon">
                                <rect x="6" y="11" width="48" height="2" rx="1" fill="#ab7037"/>
                                <rect x="54" y="8" width="14" height="8" rx="2" fill="#ab7037"/>
                            </svg>
                        </div>
                        <div class="contacts mx-auto">
                            <ul>
                                <li>
                                    <div class="main-links fw-bold d-flex justify-content-start align-items-center gap-1">
                                        <i class="fa-solid fa-phone fs-5"></i>
                                        <a href="tel:+0509995267">لتواصل النساء<br/>0509995267</a><br/>
                                    </div>
                                </li>
                                <li>
                                    <div class="main-links fw-bold d-flex justify-content-start align-items-center gap-1">
                                        <i class="fa-solid fa-phone fs-5"></i>
                                        <a href="tel:+0566803261">لتواصل الرجال<br/>0566803261</a>
                                    </div>
                                </li>
                                <li>
                                    <div class="main-links fw-bold d-flex justify-content-start align-items-center gap-1">
                                        <i class="fa-solid fa-envelope fs-5"></i>
                                        <a href="mailto:info@rmaya.ae">info@rmaya.ae</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="d-flex align-items-center justify-content-center flex-column mb-1 mt-3 gap-2">
                            <div class="heading">
                                <h2 class="fw-bold position-relative mb-0 fs-6">تابعونا على:</h2>
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
                    <div class="location-side col-12 col-md-6 col-lg-3 text-center">
                        <div class="heading mb-3 text-center">
                            <h2 class="fw-bold position-relative mb-0 fs-6 ms-4">موقعنا على الخريطة</h2>
                            <svg width="165" height="24" viewBox="0 0 165 24" xmlns="http://www.w3.org/2000/svg" class="position-relative">
                                <rect x="8" y="11" width="108" height="2" rx="1" fill="#ab7037"/>
                                <rect x="116" y="8" width="18" height="8" rx="2" fill="#ab7037"/>
                            </svg>
                        </div>
                        <iframe class="rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116113.49389604182!2d54.729634299246506!3d24.570322606162833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc7cc2e9341971108!2sAbu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1765978871568!5m2!1sen!2sus"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div class="mt-2 text-center">موقع المسابقات
                            <span class="d-block fw-bold mt-1">مجمع الريف للرماية - أبوظبي</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright position-relative text-white p-2 fw-bold d-flex justify-content-between align-items-center">
                <p class="mb-0 d-inline">جميع الحقوق محفوظة مسابقات الرماية <span class="copyright-year"></span></p>
                <p class="mb-0 d-inline">
                    <a href="https://esmart-vision.com" target="_blank"><img src="imgs/logo_4.png" alt="Smart Vision Logo"/></a>
                    Powered by
                </p>
            </div>
        </footer>
        `
    }
}

customElements.define("app-footer", AppFooter)