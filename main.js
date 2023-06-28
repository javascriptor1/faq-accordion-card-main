"use strict";
const questions = document.querySelectorAll(".question");

questions.forEach((question) =>
  question.addEventListener("click", () => {
    if (question.nextElementSibling.classList.contains("hidden")) {
      question.nextElementSibling.classList.toggle("hidden");
      question.firstElementChild.nextElementSibling.classList.toggle(
        "rotate-180"
      );
      question.firstElementChild.classList.toggle("font-bold");
    } else {
      question.nextElementSibling.classList.add("hidden");
      question.firstElementChild.nextElementSibling.classList.toggle(
        "rotate-180"
      );
      question.firstElementChild.classList.toggle("font-bold");
    }
  })
);
