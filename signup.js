
var userName = JSON.parse(localStorage.getItem("userdet")) || [];

function signup() {
    var name=document.getElementById("name").value
    var email = document.getElementById("mail").value
    var pass = document.getElementById("pass").value
    
    var obj = {
        name: name,
        password:pass
    };

    userName.push(obj);
    localStorage.setItem("userdet", JSON.stringify(userName));


    if (name.length == 0 || email.length == 0 || pass.length == 0) {
        alert("Fill all Details.....!");
    }
    else {
        alert("Signup Successful...!");
        window.location.href = "signin.html";
    }
}