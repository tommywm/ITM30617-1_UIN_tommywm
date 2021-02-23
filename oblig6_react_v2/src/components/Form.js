import React, { useState } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

const Fieldset = styled.fieldset`
	display: grid;
	grid-template-rows: auto;
	gap: 20px;
	border: none;
	margin: 67px 0 0 0;
	padding: 0;
`;

const Input = styled.input`
	width: 50%;
	height: 40px;
	@media screen and (max-width: 1100px) {
		width: 100%;
	}
`;

const Textarea = styled.textarea`
	width: 100%;
	height: 135px;
`;

const Form = ({ completedTodos, setCompletedTodos }) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const createTodo = (e) => {
		e.preventDefault();

		const details = {
			id: Object.keys(completedTodos).length + 1,
			title: title,
			content: content
		}

		const todos = { ...completedTodos };
		todos[Object.keys(completedTodos).length] = details;
		setCompletedTodos(todos)
		
		// clear the form after submit
		setTitle("");
		setContent("");
	}

	return (
		<>
			<form>
				<Fieldset>
					<section>
						<label htmlFor="newTodoTitle">Title</label>
						<Input 
							type="text" 
							name="newTodoTitle" 
							className="input" 
							value={title}
							placeholder="Please enter a fitting title for this new todo" 
							onChange={(e) => setTitle(e.target.value)}
							// required 
						/>
					</section>

					<section>
						<label htmlFor="newTodoContent">Content</label>
						<Textarea
							cols="50"
							rows="5"
							name="newTodoContent"
							className="input"
							value={content}
							placeholder="Give the todo some content"
							onChange={(e) => setContent(e.target.value)}
							// required
						></Textarea>
					</section>

					<Button title="add" type="submit" classname="end big" actiontrigger={createTodo}/>
				</Fieldset>
			</form>
		</>
	);
};

Form.propTypes = {
	completedTodos: PropTypes.object.isRequired,
	setCompletedTodos: PropTypes.func.isRequired,
}

export default Form;