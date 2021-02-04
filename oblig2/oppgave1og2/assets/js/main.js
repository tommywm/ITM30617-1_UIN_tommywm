'use strict';

window.onload = run;

function run() {
	
	const preDefinedTodos = [
			{
				"id": 1,
				"title": "Todotitle",
				"content": "I'm baby sriracha hot chicken mixtape pabst organic air ...",
			},
			{
				"id": 2,
				"title": "Todotitle",
				"content": "I'm baby sriracha hot chicken mixtape pabst organic air ...",
			},
			{
				"id": 3,
				"title": "Todotitle",
				"content": "I'm baby sriracha hot chicken mixtape pabst organic air ...",
			},
			{
				"id": 4,
				"title": "Todotitle",
				"content": "I'm baby sriracha hot chicken mixtape pabst organic air ...",
			},
			{
				"id": 5,
				"title": "Todotitle",
				"content": "I'm baby sriracha hot chicken mixtape pabst organic air ...",
			},
			{
				"id": 6,
				"title": "Todotitle",
				"content": "I'm baby sriracha hot chicken mixtape pabst organic air ...",
			}
		];

	// creating a clone of the array that we will be working with
	let todoData = JSON.parse(JSON.stringify(preDefinedTodos));

	// generate and display the generated todos
	generateTodos();

	function generateTodos() {

		// this is where we want to display all our todos
		let todos = document.getElementById("todos");
		todos.innerHTML = "";

		todoData.map( ( todo, currentIndex ) => {
			const section = document.createElement("section");
			const todoTitle = document.createElement("h2");
			const todoContent = document.createElement("p");
			let completeButton = document.createElement("button");

			todoTitle.innerHTML = todo.title;
			todoTitle.classList.add("todoTitle");
			section.appendChild(todoTitle);
			
			todoContent.innerHTML = todo.content;
			todoContent.classList.add("todoContent");
			section.appendChild(todoContent);

			completeButton.innerHTML = "Complete";
			completeButton.type = "button";
			completeButton.id = currentIndex;
			completeButton.classList.add("complete");
			completeButton.addEventListener("click", completeTodo);
			section.appendChild(completeButton)

			section.id = `section-${currentIndex}`
			section.classList.add("todos");

			todos.append(section);
		})
	}

	// add new todos
	document.getElementById("add").addEventListener("click", addTodo);

	function addTodo() {
		const newTitle = document.getElementById("title");
		const newContent = document.getElementById("content");

		console.log(newTitle.value);
		console.log(newContent.value);
		
		todoData.unshift({"id": todoData.length+1, "title": newTitle.value, "content": newContent.value});
		generateTodos();

		document.getElementById("createTodoForm").reset();
	}
	
	// complete todos
	function completeTodo() {
		const index = this.id;
		todoData.splice(index,1);
		generateTodos();
	}
}