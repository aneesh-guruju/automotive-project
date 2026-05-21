const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  successMessage.classList.remove("d-none");

  contactForm.reset();
});
