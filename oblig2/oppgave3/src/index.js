import "./styles.scss";

// Do JS magic here


/***************************
	Add 5 li items to this ul
***************************/
const ul = document.querySelector(`ul`);
const totalNewLiItems = 5;

ul.innerHTML = ``;

for( let i = 1; i <= totalNewLiItems; i++) {
	const li = document.createElement(`li`)
	for(let j = 1; j <= i; j++) {
		li.innerHTML += `🔥`;
	}
	ul.appendChild(li);
}


/***************************
	Give this an ID then select it so you can change the text
***************************/
const p = document.querySelector(`p`);
p.id = `💩`; 
// the p-tag is already selected, but we'll select it again using its id.

const pTag = document.getElementById(`💩`);
pTag.innerHTML = `💩💩 This is the new text 💩💩`;


/***************************
	Flex the section so that items are equally spaced left to right
***************************/
const flex = document.querySelector(`section`);
flex.style.cssText = `
	display: flex;
	flex-direction: row;
`;

const articles = document.querySelectorAll(`article`);

const generalStyle = `
	flex-basis: 0;
	flex-grow: 1;
	padding: 20px;
	color: red;
`;

articles
	.forEach( flexChild => flexChild.style.cssText = generalStyle)
;

articles[0].style.cssText = `
	${generalStyle}
	border: 1px solid purple;
`;

articles[1].style.cssText = `
	${generalStyle}
	box-shadow: 0 5px 10px #333;
`;

articles[2].style.cssText = `
	${generalStyle}
	background-color: #ffe600;
`;
// just wanted to play around with the cssText option. 
// This could also have been solved by adding a class to the articles, and then in the scss-file select first-child, nth-child and so on.
// cssText was a bit messy considering that one had to repeat the generalStyle for each one since it overwrites whatever is there already.


/***************************
	Should be able to remove element one by one
***************************/
const uls = document.querySelectorAll(`ul`);
const myUl = uls[1];

const buttons = myUl.querySelectorAll(`button`);
buttons.forEach(button => button.addEventListener(`click`, removeElement));

function removeElement(event) {
	const current = event.currentTarget;
	current.parentElement.remove();
}


/***************************
	Should be able to add <li> item to the ul above
***************************/
const allButtons = document.querySelectorAll(`button`);
const addItemButton = allButtons[5];

addItemButton.addEventListener(`click`, addItem);

function addItem() {
	let counter = myUl.querySelectorAll(`li`).length;
	const li = document.createElement(`li`);
	li.innerHTML = `Item ${counter + 1} `;
	
	const button = document.createElement(`button`)
	button.type = `button`;
	button.classList.add(`btn`);
	button.innerHTML = `Remove`;
	button.addEventListener(`click`, removeElement);

	li.appendChild(button);
	myUl.appendChild(li);
}

/***************************
	Should be able to listen to change on input element
***************************/
const inputText = document.querySelector(`input`);
inputText.addEventListener(`keyup`, (event) => {
	console.log("Current value:", event.target.value);
});


/***************************
	Should be able prevent site from refreshing when submitting and alert the content in input when submitting
***************************/
const form = document.querySelector(`form`);
const submit = form.querySelector(`button`);
submit.addEventListener(`click`, (event) => {
	event.preventDefault();
	alert(`Current value of the input is: ${inputText.value}`)
});


/***************************
	Make it possible to traverse left to right on the li elements
	Make the active box have the teal background color (and none active transparent)

	doing them both in one swoop 🤓
***************************/
const traverse = document.getElementById(`traverse`);
const traverseLiItems = traverse.querySelectorAll(`li`);

// getting all the buttons
const controllerButtons = traverse.parentElement.querySelectorAll(`button`);
const prev = controllerButtons[0];
const next = controllerButtons[1];

prev.addEventListener(`click`, prevItem);
next.addEventListener(`click`, nextItem);

let counter = 0;

function prevItem() {
	counter = -1;
	goToItem();

}

function nextItem() {
	counter = 1;
	goToItem();
}

function goToItem() {
	// had to set an id to make it easier to select the active item
	const active = document.getElementsByClassName(`active`)[0];
	active.id = `active`;
	const current = document.getElementById(`active`);

	// getting the index of the active li-item
	let currentIndex = Array.from(traverseLiItems).indexOf(current);

	// keeping track of where to go next
	let nextIndex = 0;

	// if we go to far.. go to the other side
	if ((currentIndex + counter) > (traverseLiItems.length - 1)) {
		nextIndex = 0
	}
	else if ((currentIndex + counter) < 0) {
		nextIndex = (traverseLiItems.length - 1)
	}
	else {
		nextIndex = currentIndex + counter;
	};

	// remove styling from the previous item and set it on the current item
	active.removeAttribute("id");
	active.removeAttribute("class");
	traverseLiItems[nextIndex].setAttribute("class", "active");
}