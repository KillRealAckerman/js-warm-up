const submitButton = document.querySelector(".voice");
const textButton = document.querySelector(".text-button");
const textarea = document.querySelector(".textarea");
let i = 0;
submitButton.addEventListener("click", () => {
  let text = textarea.value;
  console.log(text);
  let utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
  textButton.value = text;
});
const pauseButton = document.querySelector(".pause");
pauseButton.addEventListener("click", () => {
  let text = textarea.value;
  if (i % 2 == 0) {
    speechSynthesis.pause();
    i++;
  } else {
    speechSynthesis.resume();
    i++;
  }
});
