function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msgElement = document.getElementById("form-message");

  if (name === "" || email === "" || message === "") {
    msgElement.textContent = "Please fill out all fields.";
    msgElement.style.color = "red";
    return false;
  }

  msgElement.textContent = "Message sent successfully!";
  msgElement.style.color = "green";

  // Clear the form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  return false; // Prevent actual form submission (since no backend)
}
