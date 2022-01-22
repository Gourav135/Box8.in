var database = JSON.parse(localStorage.getItem("userDatabase")) || [];
var userdata = JSON.parse(localStorage.getItem("userdet"));
document.getElementById("pass").style.display = "none";
function signin() {
  let number = document.getElementById("num").value;
  let pass = document.getElementById("pass").value;
  var user = {
    num: number,
  };
  database.push(user);
  //   console.log(database);
  localStorage.setItem("userDatabase", JSON.stringify(database));
  let count = 0;
  for (var i = 0; i < database.length; i++) {
    // console.log(database[i]);
    if (number === database[i].num) {
      count++;
    }
  }
  // console.log(count);
  if (count > 1) {
    document.getElementById("pass").style.display = "unset";
  } else {
    alert("Phone Number Not Registerd......!");
    window.location.href = "signup.html";
  }
  let flag = 0;
  for (var i = 0; i < userdata.length; i++) {
    console.log(userdata[i]);
    if (pass === userdata[i].password) {
      flag = 1;
    }
  }
  if (flag == 1) {
    alert("Signin Successful...!");
    window.location.href = "index.html";
  }
}

document.getElementById("logo").addEventListener("click", function () {
  window.location.href = "signup.html";
});
