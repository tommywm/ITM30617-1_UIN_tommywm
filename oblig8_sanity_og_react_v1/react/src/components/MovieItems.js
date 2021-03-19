import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Styles';

const Moviecard = styled.section`
  border-radius: 20px;
  box-shadow: 4px 4px 10px var(--black);

  padding: 20px;
`;

const Title = styled.h1`
  text-transform: capitalize;
  text-align: center;
`;

const Movie = ({ movie }) => (
  <>
    <Moviecard>
      <Title>{movie.title}</Title>
      <Link to={`movies/${movie.slug}`}>
        <Button>View details</Button>
      </Link>
    </Moviecard>
  </>
);

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
