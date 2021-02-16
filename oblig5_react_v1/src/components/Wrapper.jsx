import React from 'react'
import PropTypes from 'prop-types';

const Wrapper = ({ children, displayType }) => {
	return (
		<>
			<section className={displayType}>
				{children.map((child) => (
					<section key={Math.random()}>
						{child}
					</section>
				))}
			</section>
		</>
	);
};

Wrapper.propTypes = {
 children: PropTypes.array.isRequired,
 displayType: PropTypes.string.isRequired
}

export default Wrapper;