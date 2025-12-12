// LOADING
setTimeout(() => { 
  document.getElementById("loader").style.display = "none"; 
}, 1500);

// THEME
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
};

// PRODUCT DATABASE
let products = [
  { name: "Titan Premium Watch", price: 3999, img: "https://m.media-amazon.com/images/I/71-7zYnO9bL._UL1500_.jpg" },
  { name: "Fastrack Sports Watch", price: 2299, img: "https://m.media-amazon.com/images/I/71jDdQO47oL._UL1500_.jpg" },
  { name: "Sonata Classic Watch", price: 1699, img: "https://m.media-amazon.com/images/I/71vFKBpKakL._UL1500_.jpg" }
];

// SHOW PRODUCTS
function loadProducts() {
  let container = document.getElementById("productList");
  container.innerHTML = "";

  products.forEach((p, index) => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart()">Add to Cart</button>
        <button onclick="openReview()">Review</button>
      </div>
    `;
  });
}
loadProducts();

// CART
let count = 0;
function addToCart() {
  count++;
  document.getElementById("cartCount").innerText = count;
}

// REVIEW POPUP
function openReview() {
  document.getElementById("reviewPopup").style.display = "flex";
}
document.querySelectorAll(".close-btn").forEach(btn => {
  btn.onclick = () => document.querySelectorAll(".popup").forEach(p => p.style.display = "none");
});
document.getElementById("submitReview").onclick = () => {
  alert("Thank you for your review!");
};

// PROFILE POPUP
document.getElementById("openProfile").onclick = () => {
  document.getElementById("profilePopup").style.display = "flex";
};

// ADMIN PANEL
document.getElementById("adminBtn").onclick = () => {
  document.getElementById("adminPopup").style.display = "flex";
};

document.getElementById("addProduct").onclick = () => {
  let name = adminName.value;
  let price = adminPrice.value;
  let img = adminImage.value;

  products.push({ name, price, img });
  loadProducts();

  alert("Product Added Successfully!");
};
 
// LIVE SEARCH
document.getElementById("searchBar").addEventListener("input", (e) => {
  let keyword = e.target.value.toLowerCase();
  let filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
  
  let container = document.getElementById("productList");
  container.innerHTML = "";
  
  filtered.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart()">Add</button>
        <button onclick="openReview()">Review</button>
      </div>
    `;
  });
});