import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	:root {
		--black: #2E2E2E;
		--blue: #167df6;
		--green: #5CB85C;
		--grey: #EFEFEF;
		--red: #FF4949;
		--yellow: #FFC600;
		--white: #FFFFFF;
	}

	a {
		text-decoration: none;
		cursor: pointer;
	}
`;

export default GlobalStyles;
