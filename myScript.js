// ==========================================================================
// 1. PENGISYTIHARAN ELEMEN DOM
// ==========================================================================
const mybutton = document.getElementById("myBtn");
const navbar = document.querySelector(".navbar-modern");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

// ==========================================================================
// 2. EVENT LISTENERS
// ==========================================================================
// Mengesan aktiviti skrol pengguna
window.addEventListener('scroll', () => {
  handleBackToTopButton();
  handleNavbarStyles();
});

// Mengesan klik pada menu navigasi untuk fungsi auto-close pada mobile
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Semak jika menu sedang terbuka di paparan mobile menggunakan Bootstrap utility
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      // Trigger klik pada butang toggler untuk menutup menu secara automatik
      const navbarToggler = document.querySelector(".navbar-toggler");
      if (navbarToggler) navbarToggler.click();
    }
  });
});

// ==========================================================================
// 3. FUNGSI SKROL UTAMA
// ==========================================================================
/**
 * Fungsi untuk memaparkan/menyembunyikan butang "Back to Top"
 */
function handleBackToTopButton() {
  const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
  
  if (scrollPosition > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

/**
 * Fungsi untuk menukar stail Navbar secara dinamik semasa skrol
 */
function handleNavbarStyles() {
  if (!navbar) return;

  const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
  
  if (scrollPosition > 50) {
    navbar.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.08)";
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
  } else {
    navbar.style.boxShadow = "none";
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.85)";
  }
}

// ==========================================================================
// 4. FUNGSI INTERAKSI KLIK (ACTION FUNCTIONS)
// ==========================================================================
/**
 * Fungsi untuk skrol naik ke atas secara lancar (smooth scroll)
 */
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
