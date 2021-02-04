import "./styles.scss";

const welcomeMessage =
  "Hei. Her er en beskjed til alle studenter. Dette her er en ekstraoppgave dere kan prøve dere på. Her får du prøvd deg på litt JavaScript. Knappene nedenfor skal <span>fjerne</span> og <span>legge</span> til ord fra denne listen. Lykke til. Alle 'span'-elementer inne i denne teksten skal ha <span>bold og ha understrek</span> styling.";

// Convert message to list
const welcomeMessageAsList = [];

// Create intial counter based on the length of the list above
let counter = 0;

// Select welcome ID
const welcome = "id";

// Select each button (prev, next)
const prev = "prev";

// Select each button (prev, next)
const next = "next";

// Create logic for updating text based buttonclicks
const updateText = () => {
  // get current (new text) for welcomeMessageAsList
  // update welcome.innerHTML
  welcome.innerHTML = text.join(" ");
};

// Create handleNext(), handlePrev()
const handleNext = () => {
  // update counter
  // call updateText()
};
const handlePrev = () => {
  // update counter
  // call updateText()
};

// Add click event on each button and attach the handleNext / handlePrev
"updateThis".addEventListener("updateThis", "function");
"updateThis".addEventListener("updateThis", "function");
