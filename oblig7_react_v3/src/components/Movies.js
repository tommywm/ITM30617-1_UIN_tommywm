import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Movielist = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 308px);
  gap: 24px;
  margin: 80px auto 0 auto;
  width: 972px;

  @media screen and (max-width: 990px) {
    grid-template-columns: repeat(2, 308px);
    width: 640px;
  }
`;

// the styling for these are in the ./src/assets/scss/styles.scss-file (line 52)
const Card = styled.section``;
const Front = styled.section``;
const Back = styled.section``;
const BackContent = styled.section``;
const Poster = styled.img``;

const Title = styled.p`
  font-weight: 900;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 4px;
  margin-bottom: 2px;
`;

const Year = styled.p`
  margin-top: 0%;
  color: grey;
`;

const Info = styled.p`
  text-align: center;
  color: #ffc600;
  font-size: 24px;
  margin-top: 80px;
`;

const Movies = ({ movies, error, loading }) => (
  <>
    {error ? <Info>{error.message}</Info> : null}
    {loading ? <Info>Loading ...</Info> : null}
    {!error &&
      !loading &&
      (movies?.length > 0 ? (
        <Movielist>
          {movies.map((movie) => (
            <Link to={`movies/${movie.Title}`} key={movie.imdbID}>
              <Card className="card">
                <Front className="front">
                  <Poster src={movie.Poster} alt="Movie poster" />
                </Front>
                <Back className="back">
                  <BackContent className="back-content middle">
                    <Title>{movie.Title}</Title>
                    <Year>{movie.Year}</Year>
                  </BackContent>
                </Back>
              </Card>
            </Link>
          ))}
        </Movielist>
      ) : (
        <Info>😱 No movies found.. Try again</Info>
      ))}
  </>
);

Movies.propTypes = {
  movies: PropTypes.array,
  error: PropTypes.object,
  loading: PropTypes.bool.isRequired,
};

export default Movies;
