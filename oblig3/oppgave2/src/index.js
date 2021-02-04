import "./styles.scss";
// import initialList and remove initalList variabel below
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import { initialList } from './importThis.js';



// use let or const;
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements
const buttons = [
  { id: 1, value: "prev" },
  { id: 2, value: "next" }
];
const listWrapper = document.querySelector("#traverse");
const buttonWrapper = document.querySelector("#buttonWrapper");



// convert to arrow function
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const addListItems = () => {
	initialList.map( (i) => {
		listWrapper.innerHTML += i === 1 ? 
			`<li class='active' data-key='${initialList[i-1]}'>${initialList[i-1]}</li>`
		:
			`<li data-key='${initialList[i-1]}'>${initialList[i-1]}</li>`
	})
}



// convert to arrow function
const addButtons = () => {
	buttons.map( (button) => {
		const [id, value] = [button.id, button.value];
		
		buttonWrapper.innerHTML += id < buttons.length ? 
			`<button type='button' id='${value}'>${value}</button>`
		:
			`<button type='button' id='${value}'>${value}</button>`
	})
}



// convert to arrow function
const setClass = (prevActive, nextActive) => {
	prevActive.classList.remove("active");
	const listItems = [...document.querySelectorAll("[data-key]")];
	const next = listItems.find(next => (Number(next.dataset.key)) === nextActive);
	next.classList.add("active");
}



// convert to arrow function
const getCurrentActive = () => {
  // use let/const
  const activeValue = document.querySelector(".active");
  return activeValue;
}

// convert to arrow function
const setNextActive = () => {
  // use let/const
  const currentActive = getCurrentActive();
  // use optional chaining to prevent error (if value does not exist)
  // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
  let nextActive = Number(currentActive.dataset.key) + 1;

  // use conditionals
	nextActive > initialList.length ? nextActive = 1 : null;
	setClass(currentActive, nextActive);
}

// convert to arrow function and complete this function
const setPrevActive = () => {
  const currentActive = getCurrentActive();
	let prevActive = Number(currentActive.dataset.key) - 1;
	prevActive === 0 ? prevActive = initialList.length : null;
	setClass(currentActive, prevActive);
}

// convert to arrow function
const traverse = (event) => {
  // use object - deconstruction
	const { target } = event;
	// use optional chaining to prevent error (if target does not exist)
	const targetId = target?.id;

	

  // convert to switch
	// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
	switch (targetId) {
		case 'next':
			setNextActive();
			break;
		case 'prev':
			setPrevActive();
			break;
		default:
			console.error(`Whooops!! finner ikke targetId med id: ${targetId}`);
	}
}

// add traverse as default parameter and remove it in addClickEvents(traverse)
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
const addClickEvents = (handler = traverse) => {
  // convert to const/let
  const buttons = document.querySelectorAll("button");
  const buttonsAsArray = Array.from(buttons);
  // convert to for-of
  // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
	for (const button of buttonsAsArray) {
		button.addEventListener("click", handler);
	}
}

addListItems();
addButtons();
addClickEvents();