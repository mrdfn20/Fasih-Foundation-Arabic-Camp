<!-- kode dengan event domcontentloaded that worked pada multiple swiper -->
<script>
  document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      slidesPerView: 3,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var swiper2 = new Swiper(".mySwiper2", {
      spaceBetween: 30,
      slidesPerView: 3,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });
</script>

DOMContentLoaded adalah sebuah event yang terjadi ketika seluruh HTML di dalam dokumen telah selesai di-load dan di-parse oleh browser, tanpa harus menunggu file-file eksternal (misalnya gambar) selesai di-load. Dengan menggunakan event DOMContentLoaded, Anda dapat mengeksekusi kode JavaScript setelah struktur HTML selesai di-load, sehingga memungkinkan Anda untuk melakukan manipulasi atau interaksi dengan elemen-elemen HTML secara aman.
