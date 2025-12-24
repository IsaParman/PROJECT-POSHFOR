const slug = new URLSearchParams(window.location.search).get("product");

fetch(`/wp-json/wp/v2/carpet_tile?slug=${slug}&_embed`)
  .then(res => res.json())
  .then(data => {
    const product = data[0];

    document.querySelector(".product-main-image")
      .style.backgroundImage =
        `url(${product.acf.main_image.url})`;

    document.querySelector(".product-info h1")
      .innerHTML = `${product.title.rendered} | ${product.acf.product_code}`;
  });
