// nanti bisa dipakai untuk:
// - klik thumbnail ganti gambar utama
// - load data dari JSON / WP
const params = new URLSearchParams(window.location.search);
const productSlug = params.get("product");

console.log("PRODUCT SLUG:", productSlug);

// sementara: hanya untuk cek
if (!productSlug) {
  alert("Product not found");
}

document.querySelectorAll(".product-thumbnails .thumb").forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const main = document.querySelector(".product-main-image");
    main.style.backgroundImage = thumb.style.backgroundImage;
  });
});
