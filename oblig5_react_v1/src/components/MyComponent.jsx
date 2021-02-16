import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';

const MyComponent = ({ title }) => {
	return (
		<>
			<Title title={title} />
		</>
	);
};

MyComponent.propTypes = {
	title: PropTypes.string.isRequired
}

export default MyComponent;