document.addEventListener("DOMContentLoaded", function () {
  extend("components/navbar.html", "extend-navbar", "subscriptions");
  extend("components/footer.html", "extend-footer", "subscriptions");

  const form = document.getElementById("subscriptionForm");
  const loading = document.getElementById("loading");
  const completionMessage = document.getElementById("completionMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const errors = document.querySelectorAll(".error");
    errors.forEach((error) => (error.style.display = "none"));

    let hasError = false;

    const name = document.getElementById("name").value;
    if (name.length < 2) {
      document.getElementById("nameError").textContent =
        "Name must be at least 2 characters long.";
      document.getElementById("nameError").style.display = "block";
      hasError = true;
    }

    const email = document.getElementById("email").value;
    if (!email.includes("@") || !email.includes(".")) {
      document.getElementById("emailError").textContent =
        "Please enter a valid email address.";
      document.getElementById("emailError").style.display = "block";
      hasError = true;
    }

    const dob = document.getElementById("dob").value;
    if (!dob) {
      document.getElementById("dobError").textContent =
        "Please select your date of birth.";
      document.getElementById("dobError").style.display = "block";
      hasError = true;
    }

    const gender = document.getElementById("gender").value;
    if (!gender) {
      document.getElementById("genderError").textContent =
        "Please select your gender.";
      document.getElementById("genderError").style.display = "block";
      hasError = true;
    }

    const terms = document.getElementById("terms").checked;
    if (!terms) {
      document.getElementById("termsError").textContent =
        "You must agree to the terms and conditions.";
      document.getElementById("termsError").style.display = "block";
      hasError = true;
    }

    if (!hasError) {
      loading.style.display = "block";
      setTimeout(function () {
        loading.style.display = "none";
        completionMessage.style.display = "block";
      }, 2000); 
    }
  });
});
