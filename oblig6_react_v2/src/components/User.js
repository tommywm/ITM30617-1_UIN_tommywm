import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Username = styled.p`
	text-transform: capitalize;
	justify-self: end;
`;

const User = ({ username }) => {
	return (
		<>
			<Username>{username || "tony stark"}</Username>
		</>
	);
};

User.propTypes = {
	username: PropTypes.string.isRequired
}

export default User;