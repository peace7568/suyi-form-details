// Grab the form and output area
const form = document.getElementById("hub-form");
const output = document.getElementById("output");

// 🔗 Google Apps Script Web App URL (make sure it's the /exec link)
const scriptURL = "https://script.google.com/macros/s/AKfycbwJeTSG5ihxGLDBWBA41ARCNirpGaBqkTHCJQiWgxPu48XKM79jEvnWX9rLk0pqWU-Blg/exec";
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Collect form data
  const formData = new FormData(form);

  // Show confirmation immediately
  output.innerHTML = `
    <h3>✅ Thanks for submitting!</h3>
    <p>Your details have been recorded.</p>
  `;

  // Send the data to Google Sheets
  fetch(scriptURL, { method: "POST", body: formData })
    .then((response) => {
      if (response.ok) {
        console.log("Form submitted successfully");
      } else {
        console.error("Error submitting form");
      }
    })
    .catch((error) => console.error("Network error:", error));

  // Reset form
  form.reset();
});