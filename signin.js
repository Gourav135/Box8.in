var database = JSON.parse(localStorage.getItem("userDatabase")) || [];

function signin() {
  let number = document.getElementById("num").value;
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
    console.log(count);
  if (count > 1) {
    alert("Signin Successful...!");
    }
    else
  {
      alert("Phone Number Not Registerd......!");
      window.location.href="signup.html"
      }
}

document.getElementById("gle").addEventListener("click", function () {
  window.location.href = "signup.html";
})
