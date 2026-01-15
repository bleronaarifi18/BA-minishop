function toggleForm() {
  let signUpForm = document.getElementById("signupForm");
  let logInForm = document.getElementById("signinForm");
  
  signUpForm.classList.toggle("active");
  logInForm.classList.toggle("active");
  
  // Për debug - kontrollo cila formë është aktive
  console.log("SignUp active:", signUpForm.classList.contains("active"));
  console.log("SignIn active:", logInForm.classList.contains("active"));
}