// Sample product data
const products = [
  {
    name: "iPhone 13 Pro Max",
    price: 490,
    category: "iphone",
    image: "https://files.catbox.moe/example1.jpg"
  },
  {
    name: "Samsung S22 Ultra",
    price: 280,
    category: "samsung",
    image: "https://files.catbox.moe/example2.jpg"
  },
  {
    name: "Techno Spark 10",
    price: 150,
    category: "techno",
    image: "https://files.catbox.moe/example3.jpg"
  }
  // You can add more products here
];

// Display products by category
function filterProducts(category) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  const filtered = products.filter(p => p.category === category);

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="p.image" alt="{p.name}">
      <h3>p.name</h3>
      <p>${p.price}</p>
    `;
    container.appendChild(card);
  });
}

// Show update messages
function showUpdates() {
  const container = document.getElementById("product-list");
  container.innerHTML = `
    <div class="updates">
  <h2>Latest Store Updates</h2>
      <ul>
        <li>📦 Fresh stock arriving weekly.</li>
        <li>💵 Price drops on selected models.</li>
        <li>🛒 Visit Century Mall M1-46 or call Fanty on 0783497146.</li>
      </ul>
    </div>
  `;
}
function showModal(imageUrl, name, price) {
  const modalHtml = `
    <div class="modal-overlay" onclick="closeModal()">
      <div class="modal-content" onclick="event.stopPropagation()">
        <img src="imageUrl" alt="{name}">
        <h2>name</h2>
        <p>Price:${price}</p>
        <button onclick="closeModal()">Close</button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHtml);
}

function closeModal() {
  const modal = document.querySelector(".modal-overlay");
  if (modal) modal.remove();
}s

