
var loginForm = document.getElementById('loginForm');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('loginPassword');
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var users = JSON.parse(localStorage.getItem("users") || "[]");
    var user = users.find(u => u.email === emailInput.value && u.password === passwordInput.value);
    if (user) {
        alert("Login successful! Welcome " + user.firstName + " " + user.lastName);
        window.location.href = "index.html";
    } else {
        alert("Email or password is incorrect!");
    }
});