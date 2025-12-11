 document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".product-card img");

    images.forEach(img => {
      const link = document.createElement("a");
      link.href = img.src;
      link.target = "_blank";
      img.parentNode.insertBefore(link, img);
      link.appendChild(img);
    });
  });


const container = document.getElementById('product-list');

products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';

  // Fallbacks for missing image or price
  const imgSrc = product.image || 'https://via.placeholder.com/150';
  const name = product.name || 'Unnamed Product';
  const price = product.price ? `
    
{product.price}` : 'N/A';

  card.innerHTML = `
    <img src="imgSrc" alt="{name}" style="width:100px;height:auto;">
    <h3>name</h3>
    <p style="color:green;"><strong>{price}</strong></p>
  `;

  container.appendChild(card);
});

const products = [
  { name: 'iPhone 13', price: 370, image: 'https://files.catbox.moe/kyl51f.jpg' },
  { name: 'Samsung S22', price: 400, image: 'https://your-image-url.com/s22.jpg' },
  // Add more products here...
];


const products = [
    { name: 'iPhone X', price: '180', image: 'images/iphone-x.jpg' ,
     name: 'iPhone XR', price: '210', image: 'images/iphone-xr.jpg' },
    { name: 'iPhone 11 64GB', price: '240', image: 'images/iphone11-64.jpg' ,
     name: 'iPhone 11 128GB', price: '260', image: 'images/iphone11-128.jpg' },
    { name: 'iPhone 11 Pro Max', price: '330', image: 'images/iphone11promax.jpg' ,
     name: 'iPhone 12', price: '280', image: 'images/iphone12.jpg' },
    { name: 'iPhone 12 Pro', price: '380', image: 'images/iphone12pro.jpg' ,
     name: 'iPhone 12 Pro Max 128GB', price: '390', image: 'images/iphone12promax-128.jpg' },
    { name: 'iPhone 12 Pro Max 256GB', price: '430', image: 'images/iphone12promax-256.jpg' ,
     name: 'iPhone 13 128GB', price: '240', image: 'https://files.catbox.moe/kyl51f.jpg' },
    { name: 'iPhone 13 256GB', price: '400', image: 'images/iphone13-256.jpg' ,
  [ name: 'iPhone 13 Pro', price: '460', image: 'images/iphone13pro.jpg' },
    { name: 'iPhone 13 Pro Max 128GB', price: '490', image: 'images/iphone13promax-128.jpg' ,
     name: 'iPhone 13 Pro Max 256GB', price: '520', image: 'images/iphone13promax-256.jpg' },
    { name: 'iPhone 14', price: '460', image: 'images/iphone14.jpg' ,
     name: 'iPhone 14 Plus', price: '470', image: 'images/iphone14plus.jpg' },
    { name: 'iPhone 14 Pro', price: '550', image: 'images/iphone14pro.jpg' ,
     name: 'iPhone 14 Pro Max 128GB', price: '580', image: 'images/iphone14promax-128.jpg' },
    { name: 'iPhone 14 Pro Max 256GB', price: '600', image: 'images/iphone14promax-256.jpg' ,
     name: 'iPhone 15 Pro Max', price: '850', image: 'images/iphone15promax.jpg' }
  ];
