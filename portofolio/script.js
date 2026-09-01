// === MENU HP ===
const tombolMenu = document.getElementById('tombolMenu');
const navMenu = document.querySelector('.nav-menu');

tombolMenu.addEventListener('click', () => {
    navMenu.classList.toggle('tampil');
});

// === TUTUP MENU SAAT DIKLIK LINK ===
const semuaLink = navMenu.querySelectorAll('a');
semuaLink.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('tampil');
    });
});

// === KIRIM PESAN KONTAK ===
const formulir = document.querySelector('.formulir-kontak');
if (formulir) {
    formulir.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Pesan berhasil dikirim! Terima kasih sudah menghubungi saya 😊');
        formulir.reset();
    });
}
// Fungsi menampilkan gambar saat kartu diklik
function tampilkanGambar(lokasiGambar) {
    const kotak = document.getElementById('kotakGambar');
    const gambar = document.getElementById('gambarProyek');
    
    gambar.src = lokasiGambar; // Memuat gambar sesuai kartu
    kotak.style.display = 'flex'; // Menampilkan kotak gambar
    document.body.style.overflow = 'hidden'; // Mengunci layar agar tidak digulir
}

// Fungsi menutup gambar
function tutupGambar() {
    const kotak = document.getElementById('kotakGambar');
    kotak.style.display = 'none'; // Menyembunyikan kotak gambar
    document.body.style.overflow = 'auto'; // Mengembalikan gulir halaman
}

// Opsional: Klik latar belakang untuk menutup
document.addEventListener('click', function(e) {
    const kotak = document.getElementById('kotakGambar');
    if (e.target === kotak) {
        tutupGambar();
    }
});
// Jalankan animasi setelah halaman selesai dimuat
window.addEventListener('load', function () {
    const semuaBar = document.querySelectorAll('.progress-bar');

    semuaBar.forEach(function (bar) {
        const targetPersen = parseInt(bar.getAttribute('data-percent'));
        const teksPersen = bar.querySelector('.percent-text');
        let sekarang = 0;

        // Beri jeda sedikit sebelum mulai
        setTimeout(function () {
            // Lebar bar langsung beranimasi
            bar.style.width = targetPersen + '%';

            // Angka persen bertambah perlahan
            const hitungMundur = setInterval(function () {
                sekarang++;
                teksPersen.textContent = sekarang + '%';
                if (sekarang >= targetPersen) {
                    clearInterval(hitungMundur);
                }
            }, 15); // Kecepatan angka naik
        }, 300);
    });
});