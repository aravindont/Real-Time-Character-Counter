const textareaEl = document.getElementById("textarea");

const totalCounterEl = document.querySelector(".total-counter");

const remainingCounter = document.querySelector(".remaining-counter");
textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  let wordsLength = textareaEl.value.length;
  totalCounterEl.innerText = wordsLength;
  let maxLengthOfTextArea = textareaEl.getAttribute("maxLength");
  remainingCounter.innerText = maxLengthOfTextArea - wordsLength;
}
