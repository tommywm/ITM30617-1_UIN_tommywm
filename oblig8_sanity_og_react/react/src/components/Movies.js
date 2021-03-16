import PropTypes from 'prop-types';
import styled from 'styled-components';
import MovieItems from './MovieItems';

const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Movies = ({ data }) => (
  <>
    <h1>Movies</h1>
    <Content>
      {data.map((movie) => (
        <MovieItems key={movie.slug} movie={movie} />
      ))}
    </Content>
  </>
);

Movies.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Movies;
