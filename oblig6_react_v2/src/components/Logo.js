import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogoName = styled.h1`
	text-transform: uppercase;
	justify-self: start;
	margin: 0;
	padding: 0;
`;
const Logo = ({ logo }) => {
	return (
		<>
			<LogoName>{logo}</LogoName>
		</>
	);
};

Logo.propTypes = {
	logo: PropTypes.string.isRequired
}

export default Logo;