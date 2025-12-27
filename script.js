// Product data by category
const products = {
  iphone: [
// iPhone Products
{
  name: "iPhone X",
  price: 180,
  category: "iphone",
  image: "https://your-image-url.com/iphonex.jpg"
},
{
  name: "iPhone XR",
  price: 210,
  category: "iphone",
  image: "https://your-image-url.com/iphonexr.jpg"
},
{
  name: "iPhone 11 64GB",
  price: 240,
  category: "iphone",
  image: "https://your-image-url.com/iphone11-64.jpg"
},
{
  name: "iPhone 11 128GB",
  price: 260,
  category: "iphone",
  image: "https://your-image-url.com/iphone11-128.jpg"
},
{
  name: "iPhone 11 Pro Max 256GB",
  price: 330,
  category: "iphone",
  image: "https://your-image-url.com/iphone11promax.jpg"
},
{
  name: "iPhone 12 128GB",
  price: 280,
  category: "iphone",
  image: "https://files.catbox.moe/jgqq6t.jpg"
},
{
  name: "iPhone 12 Pro",
  price: 380,
  category: "iphone",
  image: "https://files.catbox.moe/rs4uuv.jpg"
},
{
  name: "iPhone 12 Pro Max 128GB",
  price: 390,
  category: "iphone",
  image: "https://your-image-url.com/iphone12promax128.jpg"
},
{
  name: "iPhone 12 Pro Max 256GB",
  price: 430,
  category: "iphone",
  image: "https://your-image-url.com/iphone12promax256.jpg"
},
{
  name: "iPhone 13 128GB",
  price: 370,category: "iphone",
  image: "https://your-image-url.com/iphone13-128.jpg"
},
{
  name: "iPhone 13 256GB",
  price: 400,
  category: "iphone",
  image: "https://your-image-url.com/iphone13-256.jpg"
},
{
  name: "iPhone 13 Pro",
  price: 460,
  category: "iphone",
  image: "https://your-image-url.com/iphone13pro.jpg"
},
{
  name: "iPhone 13 Pro Max 128GB",
  price: 490,
  category: "iphone",
  image: "https://your-image-url.com/iphone13promax128.jpg"
},
{
  name: "iPhone 13 Pro Max 256GB",
  price: 520,
  category: "iphone",
  image: "https://your-image-url.com/iphone13promax256.jpg"
},
{
  name: "iPhone 14",
  price: 460,
  category: "iphone",
  image: "https://your-image-url.com/iphone14.jpg"
},
{
  name: "iPhone 14 Plus",
  price: 470,
  category: "iphone",
  image: "https://your-image-url.com/iphone14plus.jpg"
},
{
  name: "iPhone 14 Pro",
  price: 550,
  category: "iphone",
  image: "https://your-image-url.com/iphone14pro.jpg"
},
{
  name: "iPhone 14 Pro Max 128GB",
  price: 580,
  category: "iphone",
  image: "https://your-image-url.com/iphone14promax128.jpg"
},
{
  name: "iPhone 14 Pro Max 256GB",
  price: 600,
  category: "iphone",
  image: "https://files.catbox.moe/2wj9aq.jpg"
},
{
  name: "iPhone 15 Pro Max 256GB",
  price: 850,
  category: "iphone",image: "https://your-image-url.com/iphone15promax.jpg"
},
{
  name: "iPhone 16 Pro Max 256GB",
  price: 1250,
  category: "iphone",
  image: "https://your-image-url.com/iphone16promax.jpg"
},
{
  name: "iPhone 17 Pro Max 256GB",
  price: 1800,
  category: "iphone",
  image: "https://your-image-url.com/iphone17promax.jpg"
},
 { name: "iPhone 13", price: 370, image: "https://files.catbox.moe/kyl51f.jpg" },
    { name: "iPhone 11", price: 300, image: "https://files.catbox.moe/example1.jpg" }
  ],
  samsung: [
  {
    name: "Samsung A14",
    price: 90,
    category: "samsung",
    image: "https://your-image-url.com/a14.jpg"
  },
  {
    name: "Samsung A05",
    price: 90,
    category: "samsung",
    image: "https://your-image-url.com/a05.jpg"
  },
  {
    name: "Samsung A06",
    price: 110,
    category: "samsung",
    image: "https://files.catbox.moe/0adxfp.jpg"
  },
  {
    name: "Samsung A15",
    price: 140,
    category: "samsung",
    image: "https://your-image-url.com/a15.jpg"
  },
  {
    name: "Samsung A16",
    price: 150,
    category: "samsung",
    image: "https://your-image-url.com/a16.jpg"
  },
  {
    name: "Samsung A33",
    price: 160,
    category: "samsung",
    image: "https://files.catbox.moe/e4e1jd.jpg"
  },
  {
    name: "Samsung M33",
    price: 140,
    category: "samsung",
    image: "https://your-image-url.com/m33.jpg"
  },
  {
    name: "Samsung S10 Plus",
    price: 140,
    category: "samsung",
    image: "https://your-image-url.com/s10plus.jpg"
  },
  {
    name: "Note 20 Ultra 128GB",
    price: 230,
    category: "samsung",
    image: "https://your-image-url.com/note20-128.jpg"
  },
  {
    name: "Note 20 Ultra 256GB",
    price: 250,category: "samsung",
    image: "https://your-image-url.com/note20-256.jpg"
  },
  {
    name: "Samsung S20 FE 5G",
    price: 150,
    category: "samsung",
    image: "https://your-image-url.com/s20fe.jpg"
  },
  {
    name: "Samsung S20 Plus 256GB",
    price: 180,
    category: "samsung",
    image: "https://your-image-url.com/s20plus.jpg"
  },
  {
    name: "Samsung S21 Plus 256GB",
    price: 230,
    category: "samsung",
    image: "https://your-image-url.com/s21plus.jpg"
  },
  {
    name: "Samsung S21 Ultra",
    price: 260,
    category: "samsung",
    image: "https://files.catbox.moe/k0lye7.jpg"
  },
  {
    name: "Samsung S22 Plus",
    price: 260,
    category: "samsung",
    image: "https://your-image-url.com/s22plus.jpg"
  },
  {
    name: "Samsung S22 Ultra 128GB",
    price: 280,
    category: "samsung",
    image: "https://your-image-url.com/s22ultra128.jpg"
  },
  {
    name: "Samsung S22 Ultra 256GB",
    price: 340,
    category: "samsung",
    image: "https://your-image-url.com/s22ultra256.jpg"
  },
  {
    name: "Samsung S23 Ultra 256GB",
    price: 460,
    category: "samsung",
    image: "https://your-image-url.com/s23ultra.jpg"
  },
  {
    name: "Samsung S24 Ultra 256GB",
    price: 880,
    category: "samsung",image: "https://your-image-url.com/s24ultra.jpg"
  },
  {
    name: "Samsung S25 Ultra 256GB",
    price: 1200,
    category: "samsung",
    image: "https://your-image-url.com/s25ultra.jpg"
  },
  {
    name: "Z Flip 3 128GB",
    price: 230,
    category: "samsung",
    image: "https://your-image-url.com/zflip3-128.jpg"
  },
  {
    name: "Z Flip 3 256GB",
    price: 250,
    category: "samsung",
    image: "https://your-image-url.com/zflip3-256.jpg"
  },
    { name: "Samsung S22", price: 400, image: "https://files.catbox.moe/example2.jpg" }
  ],
  techno and others: [
  {
    name: "Tecno Spark 10",
    price: 120,
    category: "techno and others",
    image: "https://files.catbox.moe/abc123.jpg"
  },
  {
    name: "Infinix Note 12",
    price: 130,
    category: "techno and others",
    image: "https://files.catbox.moe/def456.jpg"
  },
  {
    name: "Hisense Infinity H50",
    price: 150,
    category: "techno and others",
    image: "https://files.catbox.moe/ghi789.jpg"
  },
  {
    name: "Lenovo K13 Note",
    price: 110,
    category: "techno and others",
    image: "https://files.catbox.moe/jkl101.jpg"
  },
  {
    name: "Google Pixel 5",
    price: 180,
    category: "techno and others",
    image: "https://files.catbox.moe/mno112.jpg"
  }
];
  { name: "Techno Spark", price: 150, image: "https://files.catbox.moe/example3.jpg" }
  ]
};

// Show products by category
javascript
function filterProducts(category, page = 1) {
  currentCategory = category;
currentPage = page;
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  const filtered = products.filter(p => p.category === category);
  const start = (page - 1) * perPage;
  const paginated = filtered.slice(start, start + perPage);

  paginated.forEach(p => 
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="{p.image}" alt="p.name" onclick="showModal('{p.image}', 'p.name', '{p.price}')">
      <h3>p.name</h3>
      <p>${p.price}</p>
    `;
    container.appendChild(card);
  });

  addPagination(filtered.length);
};
    
    
    // Modal display
    function showModal(imageUrl, name, price) 
      const modalHtml = `
        <div class="modal-overlay" onclick="closeModal()">
          <div class="modal-content" onclick="event.stopPropagation()">
            <img src="imageUrl" alt="name">
            <h2>name</h2>
            <p>Price:
{price}</p>
        <button onclick="closeModal()">Close</button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHtml);
}

function closeModal() {
  const modal = document.querySelector(".modal-overlay");
  if (modal) modal.remove();
}
async function showUpdates() {
  const existingModal = document.querySelector('.modal-overlay');
  if (existingModal) existingModal.remove();

  try {
    const res = await fetch('updates.json'); // path relative to index.html
    const updates = await res.json();

    const updateList = updates.map(item => `<li>item</li>`).join("");

    const modalHtml = `
      <div class="modal-overlay" onclick="closeModal()">
        <div class="modal-box" onclick="event.stopPropagation()">
          <h2>🆕 Store Updates</h2>
          <ul>{updateList}</ul>
          <button onclick="closeModal()">Close</button>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
  } catch (error) {
alert("Failed to load updates.");
    console.error("Update load error:", error);
  }
}

function closeModal() {
  const modal = document.querySelector('.modal-overlay');
  if (modal) modal.remove();
}
function searchProducts() {
  const searchText = document.getElementById("searchBox").value.toLowerCase();
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(searchText)
  );

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="p.image" alt="{p.name}" onclick="showModal('p.image', '{p.name}', 'p.price')">
      <h3>{p.name}</h3>
      <p>${p.price}</p>
    `;
    container.appendChild(card);
  });
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
function showUpdates() {
  // Remove old modal if exists
  const oldModal = document.querySelector('.modal-overlay');
  if (oldModal) oldModal.remove();
  // Create new modal
  const modalHtml = `
    <div class="modal-overlay" onclick="closeModal()">
      <div class="modal-box" onclick="event.stopPropagation()">
        <h2>🆕 Store Updates</h2>
        <ul>
          <li>🔔 New Samsung & iPhone models added.</li>
          <li>💰 Price updates across multiple devices.</li>
          <li>🚚 Free delivery in city center this week.</li>
        </ul>
        <button onclick="closeModal()">Close</button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeModal() {
  const modal = document.querySelector('.modal-overlay');
  if (modal) modal.remove();
}
