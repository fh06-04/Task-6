const form = document.getElementById("contactForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");
const charCount = document.getElementById("charCount");

messageField.addEventListener("input", () => {
  charCount.textContent = messageField.value.length;
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  let valid = true;

  
  const name = nameField.value.trim();
  if (name === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  
  const email = emailField.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Invalid email format.";
    valid = false;
  }

  
  const message = messageField.value.trim();
  if (message === "") {
    messageError.textContent = "Message cannot be empty.";
    valid = false;
  }

  if (valid) {
    successMessage.textContent = "✅ Message sent successfully!";
    form.reset();
    charCount.textContent = "0";
  }
});
