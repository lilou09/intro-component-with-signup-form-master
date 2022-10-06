const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const pattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (fnameValue === "") {
    errorFunc(fname, "first name connot be empty");
  } else {
    succesFunc(fname);
  }
  if (lnameValue === "") {
    errorFunc(lname, "Last name connot be empty");
  } else {
    succesFunc(lname);
  }
  if (emailValue === "") {
    errorFunc(email, "email connot be empty");
  } else if (!emailValue.match(pattern)) {
    errorFunc(email, "looks like not email");
  } else {
    succesFunc(email);
  }
  if (passwordValue === "") {
    errorFunc(password, "password connot be empty");
  } else {
    succesFunc(password);
  }
});

const errorFunc = (req, message) => {
  const formControl = req.parentNode;
  const span = formControl.querySelector("span");
  span.innerText += message;
  req.className += "error";
  span.className += "error-text";
  if (req !== email) {
    req.value = " ";
  } else {
    req.style.color = "hsl(0, 100%, 74%)";
  }
};

function succesFunc(req) {
  req.className += "succes";
}
