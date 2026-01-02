const form = document.getElementById("membershipForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let isValid = true;

  const fullname = document.getElementById("fullname");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const tier = document.getElementById("tier");
  const terms = document.getElementById("terms");

  clearErrors();

  if (fullname.value.trim() === "") {
    showError(fullname, "Full name is required");
    isValid = false;
  }

  if (email.value.trim() === "") {
    showError(email, "Email is required");
    isValid = false;
  }

  if (phone.value.trim() === "") {
    showError(phone, "Phone number is required");
    isValid = false;
  }

  if (tier.value === "") {
    showError(tier, "Please select a membership tier");
    isValid = false;
  }

  if (!terms.checked) {
    showError(terms, "You must agree to the terms");
    isValid = false;
  }

  if (isValid) {
    alert("Registration successful!");
    form.reset();
  }
});

function showError(input, message) {
  const error = input.parentElement.querySelector(".error");
  error.textContent = message;
}

function clearErrors() {
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
}

