import "./styles.scss";

const welcomeMessage =
  "Hei. Her er en beskjed til alle studenter. Dette her er en ekstraoppgave dere kan prøve dere på. Her får du prøvd deg på litt HTML, CSS og JavaScript. Knappene nedenfor skal <span>fjerne</span> og <span>legge</span> til ord fra denne listen. Lykke til. Alle 'span'-elementer inne i denne teksten skal ha <span>bold og ha understrek</span> styling.";

// Convert message to list
const messageList = welcomeMessage.split(` `);

// Create intial counter
let counter = 0;

// Select welcome ID
const displayWelcomeMessageBox = document.querySelector(`#welcome`);

// Select each button (prev, next)
const prevButton = document.querySelector(`.prev`);
const nextButton = document.querySelector(`.next`);

// Create handleNext(), handlePrev()
const handleNext = () => {
	counter = counter + 1;
	updateText();
};

const handlePrev = () => {
	counter = counter - 1;
	updateText();
};

// Add click event on buttons and attach the handleNext / handlePrev
prevButton.addEventListener(`click`, handlePrev);
nextButton.addEventListener(`click`, handleNext);

// Create updateText()
const updateText = () => {
	const word = messageList.slice(0, counter);
	displayWelcomeMessageBox.innerHTML = word.join(` `);
	console.log(counter);
	
}
// Create logic for updating text based buttonclicks
// Acceptance => should be able to see a word one by one, and be able to go back and forth
