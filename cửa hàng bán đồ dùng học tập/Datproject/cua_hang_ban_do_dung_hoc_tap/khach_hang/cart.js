function goToCart() {
  window.location.href = "cart.html";
}

function addToCart(productName) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(
    (item) =>
      typeof item === "object" && item.name && typeof item.quantity === "number"
  );

  const existingItem = cart.find((item) => item.name === productName);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name: productName, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const badge = document.getElementById("cart-count-badge");
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = total;
  badge.style.display = total > 0 ? "inline-block" : "none";
}
