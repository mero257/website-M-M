
var pass = document.getElementById('password');
var cPass = document.getElementById('confirmPassword');
var email = document.getElementById('email');
var fName = document.getElementById('fName');
var sName = document.getElementById('sName');
var submitBtn = document.getElementById('btn');

function saveData(event) {
    event.preventDefault();
    if (pass.value !== cPass.value) {
        alert("Passwords do not match!");
        return false;
    }
    var users = JSON.parse(localStorage.getItem("users") || "[]");
    var emailExists = users.find(user => user.email === email.value);
    if (emailExists) {
        alert("This email is already registered!");
        return false;
    }
    var nameExists = users.find(user => user.firstName === fName.value && user.lastName === sName.value);
    if (nameExists) {
        alert("This name is already registered!");
        return false;
    }
    var userData = {
        firstName: fName.value,
        lastName: sName.value,
        email: email.value,
        password: pass.value
    };
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!")
    window.location.href = "login.html";
}
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
//slide-in
document.addEventListener("DOMContentLoaded", () => {
    const car = document.querySelector("img");
    if (car) {
        car.classList.add("slide-in");
    }
})
