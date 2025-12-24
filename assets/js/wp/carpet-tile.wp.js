document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("catalog-grid");
    if (!grid) return;
  
    const API = "https://your-domain.com/wp-json/wp/v2/carpet_tiles";
  
    fetch(`${API}?_embed&per_page=12`)
      .then(res => res.json())
      .then(data => {
        grid.innerHTML = data.map(item => `
          <article class="catalog-card">
          <div class="product-thumb"
          style="background-image:url(${item._embedded['wp:featuredmedia'][0].source_url})">
            </div>
            <p>Nylon Carpet Tiles</p>
            <h3>${item.title.rendered}</h3>
          </article>
        `).join("");
      });
  });
  