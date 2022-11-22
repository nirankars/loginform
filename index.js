function clickToSubmit() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var age = document.getElementById("age").value;
  var phone = document.getElementById("phone").value;

  if (!name) {
    alert("please enter your full name.");
    return;
  }

  if (!email) {
    alert("please enter your email.");
    return;
  }

  if (!age) {
    alert("please enter your age.");
    return;
  }

  if (!phone) {
    alert("please enter your phone number.");
    return;
  }
// commmit
  window.document.getElementById("name1").innerHTML = name;
  window.document.getElementById("email1").innerHTML = email;
  window.document.getElementById("age1").innerHTML = age;
  window.document.getElementById("phone1").innerHTML = phone;
}
