import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navigation from '../components/Navigation';

import { Main } from '../styles/Styles';

const Header = styled.header`
  padding: 20px;
  box-shadow: 0 4px 10px var(--black);
  margin-bottom: 40px;
`;

const DefaultLayout = ({ children }) => (
  <>
    <Header>
      <Navigation />
    </Header>
    <Main>{children}</Main>
  </>
);

DefaultLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default DefaultLayout;
