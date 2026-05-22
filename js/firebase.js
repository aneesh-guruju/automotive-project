import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC7iV7jfQlyS6qAFvy-sQoHfWUlVe4JzLc",
  authDomain: "automotive-project-e7eda.firebaseapp.com",

  databaseURL:
    "https://automotive-project-e7eda-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "automotive-project-e7eda",
  storageBucket: "automotive-project-e7eda.firebasestorage.app",
  messagingSenderId: "963186708873",
  appId: "1:963186708873:web:d04a604e4ec6981367d158",
  measurementId: "G-7EJSJ40WRS",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const contactForm = document.getElementById("contactForm");

const successMessage = document.getElementById("successMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = contactForm.querySelector('input[type="text"]').value;

    const email = contactForm.querySelector('input[type="email"]').value;

    const message = contactForm.querySelector("textarea").value;

    push(ref(database, "messages"), {
      name,
      email,
      message,
    })
      .then(() => {
        successMessage.textContent = "Message sent successfully.";

        successMessage.classList.remove("d-none");

        contactForm.reset();
      })
      .catch(() => {
        successMessage.textContent = "Something went wrong.";

        successMessage.classList.remove("d-none");
      });
  });
}
