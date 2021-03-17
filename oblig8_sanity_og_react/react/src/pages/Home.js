import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Styles';

const Callout = styled.hgroup`
  width: 600px;
  margin: 30vh auto 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 80px;
`;

const Home = () => (
  <>
    <Callout>
      <Title>aloha!</Title>
      <Link to="movies/">
        <Button>Go to the movies-pages</Button>
      </Link>
    </Callout>
  </>
);

export default Home;
