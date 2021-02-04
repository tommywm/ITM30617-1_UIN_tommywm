import "./styles.scss";

const welcomeMessage =
  "Hei. Her er en beskjed til alle studenter. Dette her er en ekstraoppgave dere kan prøve dere på. Her får du prøvd deg på litt HTML, CSS og JavaScript. Knappene nedenfor skal <span>fjerne</span> og <span>legge</span> til ord fra denne listen. Lykke til. Alle 'span'-elementer inne i denne teksten skal ha <span>bold og ha understrek</span> styling.";

const welcomeMessageAsList = welcomeMessage.split(" ");
let counter = 0;

const welcome = document.querySelector("#welcome");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const updateText = () => {
  const text = welcomeMessageAsList.slice(0, counter);
  welcome.innerHTML = text.join(" ");
};

const handleNext = () => {
  counter = counter + 1;
  updateText();
};
const handlePrev = () => {
  counter = counter - 1;
  updateText();
};

prev.addEventListener("click", handlePrev);
next.addEventListener("click", handleNext);
