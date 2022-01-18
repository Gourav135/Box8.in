var database = JSON.parse(localStorage.getItem("userdata")) || [];

function signin() {
    var number=document.getElementById("num").value
    var user = {
       number:number
    };
    database.push(user);
    // console.log(database.number);
    localStorage.setItem("userDatabase",JSON.stringify(database))
    if (number.length == 0) {
        alert("Fill all Details.....!");
    }
    // if (number == user.number);
    else {
        alert("Signin Successful...!");
        window.location.href = "signup.html";
    }

}sai