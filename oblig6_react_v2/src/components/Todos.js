import React from 'react'
import Title from './Title';
import Todo from './Todo';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Completed = styled.section`
	margin-top: 50px;
`;

const CompletedTodos = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 20px;
	@media screen and (max-width: 1100px) {
		grid-template-columns: 1fr 1fr;
	}	
	@media screen and (max-width: 730px) {
		grid-template-columns: 1fr;
	}
`;

const Todos = ({ title, completedTodos, setCompletedTodos }) => {
	
	const allTodos = Object.values(completedTodos);

	return (
		<>
			<Completed>
				<Title title={title} />
				<CompletedTodos>
					{allTodos.length > 0 ? allTodos.reverse().map(todo => (
						<Todo key={todo.id} todo={todo} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos}/>
					)) : <Title title="No more todos.." />}
				</CompletedTodos>
			</Completed>
		</>
	);
};

Todos.propTypes = {
	title: PropTypes.string.isRequired,
	completedTodos: PropTypes.object.isRequired,
	setCompletedTodos: PropTypes.func.isRequired
}

export default Todos;