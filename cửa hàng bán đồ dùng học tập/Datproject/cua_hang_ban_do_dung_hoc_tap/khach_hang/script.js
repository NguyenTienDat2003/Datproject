let cart = [];
let cartCount = 0;

function showRegister() {
  document.getElementById("register-form").style.display = "block";
  document.getElementById("login-form").style.display = "none";
  document.getElementById("main-content").style.display = "none";
}

function showLogin() {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("register-form").style.display = "none";
  document.getElementById("main-content").style.display = "none";
}

function register() {
  const username = document.getElementById("register-username").value.trim();
  const phone = document.getElementById("register-phone").value.trim();
  const password = document.getElementById("register-password").value.trim();
  const passwordConfirm = document
    .getElementById("register-password-confirm")
    .value.trim();
  const message = document.getElementById("register-message");

  if (!username || !phone || !password || !passwordConfirm) {
    message.textContent = "Vui lòng nhập đầy đủ thông tin!";
    message.style.color = "red";
    return;
  }

  const phoneRegex = /^\d{9,11}$/;
  if (!phoneRegex.test(phone)) {
    message.textContent = "Số điện thoại không hợp lệ (9-11 chữ số)!";
    message.style.color = "red";
    return;
  }

  if (password !== passwordConfirm) {
    message.textContent = "Mật khẩu nhập lại không khớp!";
    message.style.color = "red";
    return;
  }

  if (localStorage.getItem(username)) {
    message.textContent = "Tài khoản đã tồn tại!";
    message.style.color = "red";
    return;
  }

  const userData = {
    phone: phone,
    password: password,
  };

  localStorage.setItem(username, JSON.stringify(userData));

  message.style.color = "green";
  message.textContent = "Đăng ký thành công! Đang chuyển sang đăng nhập...";

  setTimeout(() => {
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";

    message.textContent = "";
    document.getElementById("register-username").value = "";
    document.getElementById("register-phone").value = "";
    document.getElementById("register-password").value = "";
    document.getElementById("register-password-confirm").value = "";
  }, 1500);
}

function login() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();
  const message = document.getElementById("login-message");

  const userDataStr = localStorage.getItem(username);
  if (!userDataStr) {
    message.textContent = "Tài khoản không tồn tại!";
    message.style.color = "red";
    return;
  }

  const userData = JSON.parse(userDataStr);
  if (userData.password !== password) {
    message.textContent = "Mật khẩu không đúng!";
    message.style.color = "red";
    return;
  }

  message.style.color = "green";
  message.textContent = `Chào mừng ${username}!`;
  document.getElementById("login-form").style.display = "none";
  document.getElementById("main-content").style.display = "block";
  document.getElementById("auth-buttons").style.display = "none";
}

function addToCart(productName) {
  cart.push(productName);
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
  updateCartList();
}

function updateCartList() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${item}`;
    cartList.appendChild(li);
  });
}
