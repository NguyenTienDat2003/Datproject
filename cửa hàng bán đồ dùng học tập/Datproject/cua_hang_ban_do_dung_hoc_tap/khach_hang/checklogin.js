function checkLoginStatus() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  const authButtons = document.getElementById("auth-buttons");
  const welcomeMsg = document.getElementById("welcome-msg");
  const greeting = document.getElementById("greeting");

  if (loggedInUser) {
    authButtons.style.display = "none";
    welcomeMsg.style.display = "flex";
    greeting.textContent = `Chào, ${loggedInUser}!`;
  } else {
    authButtons.style.display = "flex";
    welcomeMsg.style.display = "none";
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  location.reload();
}
