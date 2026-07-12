// ==========================================================================
// 1. PENGISYTIHARAN ELEMEN DOM
// ==========================================================================
const mybutton = document.getElementById("myBtn");
const navbar = document.querySelector(".navbar-modern");

// ==========================================================================
// 2. EVENT LISTENER & FUNGSI SKROL UTAMA
// ==========================================================================
window.addEventListener('scroll', () => {
  handleBackToTopButton();
  handleNavbarStyles();
});

/**
 * Fungsi untuk memaparkan/menyembunyikan butang "Back to Top"
 */
function handleBackToTopButton() {
  const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
  
  // Butang muncul hanya selepas skrol melebihi 300px ke bawah
  if (scrollPosition > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

/**
 * Fungsi untuk menukar stail Navbar secara dinamik semasa skrol
 * Memberikan impak UI yang lebih premium dan hidup
 */
function handleNavbarStyles() {
  if (!navbar) return; // Mengelakkan ralat sekiranya elemen navbar tiada

  const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
  
  if (scrollPosition > 50) {
    // Apabila skrol ke bawah, tambah bayang-bayang dan kurangkan ketelusan sedikit
    navbar.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.08)";
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
  } else {
    // Kembali kepada keadaan asal di bahagian paling atas (Hero section)
    navbar.style.boxShadow = "none";
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.85)";
  }
}

// ==========================================================================
// 3. FUNGSI INTERAKSI KLIK (ACTION FUNCTIONS)
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
