
document.addEventListener("DOMContentLoaded", () => {
    let loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
    let userNameLi = document.getElementById("userName");
    let loginBtn = document.getElementById("loginBtn");
    let regBtn = document.getElementById("regBtn");

    if (loggedUser) {
        userNameLi.style.display = "block";
        userNameLi.textContent = `Hi, ${loggedUser.firstName }`;
        loginBtn.style.display = "none";
    }
});


let h1 = document.querySelector(".text");
var myText = 'Welcome to '


function typeLoop () {
    h1.textContent = "";
  for (let i = 0; i < myText.length; i++) {
     setTimeout(() => {
      h1.textContent += myText[i];
    },100*i);
  }

  for (let i = 0; i <= myText.length; i++) {
     setTimeout(() => {
      h1.textContent = myText.slice(0, myText.length - i);
      if (i === myText.length) typeLoop();
    },(myText.length + i) * 100 + 1000);
  }

}
typeLoop ();