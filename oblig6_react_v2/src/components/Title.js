import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Callout = styled.h1`
	text-transform: capitalize;
`;

const Title = ({ title }) => {
	return (
		<>
			<Callout>{title}</Callout>
		</>
	);
};

Title.propTypes = {
	title: PropTypes.string.isRequired
}

export default Title;