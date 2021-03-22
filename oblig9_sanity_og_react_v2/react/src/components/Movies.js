import PropTypes from 'prop-types';
import styled from 'styled-components';
import MovieItems from './MovieItems';

const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 20px;

  width: 940px;
  margin: 0 auto;
`;

const Movies = ({ data }) => {
  // sort the data list alphabetically
  data.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <>
      <Content>
        {data.map((movie) => (
          <MovieItems key={movie.slug} movie={movie} />
        ))}
      </Content>
    </>
  );
};

Movies.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Movies;
