document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("catalog-grid");
  if (!grid) return;

  const products = [
    { name: "Block", slug: "block" },
    { name: "Desert", slug: "desert" },
    { name: "Essence", slug: "essence" },
    { name: "Flow", slug: "flow" },
    { name: "Maze", slug: "maze" },
    { name: "Playfields", slug: "playfields" },
    { name: "Spectre", slug: "spectre" },
    { name: "Square", slug: "square" },
    { name: "Step up", slug: "step-up" },
    { name: "Structure", slug: "structure" },
    { name: "Broom", slug: "broom" },
    { name: "Lane Street", slug: "lane-street" },
  ];

  grid.innerHTML = products
    .map(
      (p) => `
    <a href="/products/carpet-tile-detail.html?product=${p.slug}"
       class="catalog-link">

      <article class="catalog-card">
        <div class="product-thumb"></div>
        <p>Nylon Carpet Tiles</p>
        <h3>${p.name}</h3>
      </article>

    </a>
  `
    )
    .join("");
});
