
var loginForm = document.getElementById('loginForm');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('loginPassword');
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var users = JSON.parse(localStorage.getItem("users") || "[]");
    var user = users.find(u => u.email === emailInput.value && u.password === passwordInput.value);
    if (user) {
        alert("Login successful! Welcome " + user.firstName + " " + user.lastName);
        sessionStorage.setItem("loggedUser", JSON.stringify(user));
        window.location.href = "index.html";
    } else {
        alert("Email or password is incorrect!");
    }
});

// fade 

   document.addEventListener("DOMContentLoaded", () => { 
    document.body.classList.add("fade-in");
  });

  document.querySelectorAll("a").forEach(link =>{
    link.addEventListener("click",e =>{
        e.preventDefault();
        const target = e.target.getAttribute("href");
        document.body.style.opacity = 0;
        setTimeout(() =>{
            window.location.href = target;
        },500);
    })
  })

// slide-in
    document.addEventListener("DOMContentLoaded",() =>{
        const car = document.querySelector("img");
        if (car) {
            car.classList.add("slide-in");
        }
    } )
  