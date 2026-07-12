// Mengisytiharkan butang "Back to Top"
const mybutton = document.getElementById("myBtn");

// Mengesan aktiviti skrol pengguna menggunakan Event Listener
window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  // Butang muncul hanya selepas skrol melebihi 300px ke bawah
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Fungsi untuk skrol naik ke atas secara lancar (smooth)
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
