let isSignup = true;

function toggleForm() {
  isSignup = !isSignup;

  document.getElementById("signupForm").classList.toggle("active");
  document.getElementById("signinForm").classList.toggle("active");

  document.getElementById("switchText").innerText =
    isSignup ? "Sign In" : "Sign Up";
}

function validateSignup() {
  let email = document.getElementById("signupEmail").value;
  let error = document.getElementById("signupError");

  if (!email.includes("@")) {
    error.innerText = "Please enter a valid email!";
  } else {
    error.innerText = "";
    alert("Sign Up successful");
  }
}

function validateSignin() {
  let email = document.getElementById("signinEmail").value;
  let error = document.getElementById("signinError");

  if (!email.includes("@")) {
    error.innerText = "Email is not valid!";
  } else {
    error.innerText = "";
    alert("Welcome back");
  }
}