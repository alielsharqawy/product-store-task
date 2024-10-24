// Selecting HTML elements
const productGrid = document.getElementById("product-grid");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

// Fetch products from Fake Store API
const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    // Hide loading indicator
    loading.classList.add("hidden");

    // Display products
    displayProducts(products);
  } catch (err) {
    console.error("Failed to fetch products", err);

    // Hide loading indicator and show error message
    loading.classList.add("hidden");
    error.classList.remove("hidden");
  }
};

// Display products in the grid
const displayProducts = (products) => {
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>Price: $${product.price}</p>
      <p>Rating: ${product.rating.rate}</p>
    `;

    productGrid.appendChild(productCard);
  });
};

// Fetch products on page load
fetchProducts();
