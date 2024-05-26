document
  .getElementById("subscriptionForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Clear previous errors
    const errors = document.querySelectorAll(".error");
    errors.forEach((error) => (error.style.display = "none"));

    let hasError = false;

    // Name validation
    const name = document.getElementById("name").value;
    if (name.length < 2) {
      document.getElementById("nameError").textContent =
        "Name must be at least 2 characters long.";
      document.getElementById("nameError").style.display = "block";
      hasError = true;
    }

    // Email validation
    const email = document.getElementById("email").value;
    if (!email.includes("@") || !email.includes(".")) {
      document.getElementById("emailError").textContent =
        "Please enter a valid email address.";
      document.getElementById("emailError").style.display = "block";
      hasError = true;
    }

    // Date of Birth validation
    const dob = document.getElementById("dob").value;
    if (!dob) {
      document.getElementById("dobError").textContent =
        "Please select your date of birth.";
      document.getElementById("dobError").style.display = "block";
      hasError = true;
    }

    // Gender validation
    const gender = document.getElementById("gender").value;
    if (!gender) {
      document.getElementById("genderError").textContent =
        "Please select your gender.";
      document.getElementById("genderError").style.display = "block";
      hasError = true;
    }

    // Terms and Conditions validation
    const terms = document.getElementById("terms").checked;
    if (!terms) {
      document.getElementById("termsError").textContent =
        "You must agree to the terms and conditions.";
      document.getElementById("termsError").style.display = "block";
      hasError = true;
    }

    if (!hasError) {
      alert("Subscription successful!");
      // Here you can handle the form submission, e.g., sending the data to a server
    }
  });
