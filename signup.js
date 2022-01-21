function signup() {
    var name=document.getElementById("name").value
    var email = document.getElementById("mail").value
    var pass = document.getElementById("pass").value
    

    if (name.length == 0 || email.length == 0 || pass.length == 0) {
        alert("Fill all Details.....!");
    }
    else {
        alert("Signup Successful...!");
        window.location.href = "signin.html";
    }
}