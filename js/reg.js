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



const images = document.querySelectorAll('.fade-img');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // تضيف الكلاس اللي بيعمل الانيميشن
            observer.unobserve(entry.target);   // عشان ما يتكررش كل مرة
        }
    });
}, {
    threshold: .6 // يعني لازم 20% من الصورة تظهر عشان يتفعل الأنيميشن
});

images.forEach(img => observer.observe(img));
