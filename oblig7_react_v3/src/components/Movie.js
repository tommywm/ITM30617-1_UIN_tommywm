import PropTypes from 'prop-types';
import styled from 'styled-components';

const Content = styled.section`
  margin: 80px auto 0 auto;
  max-width: 1200px;
`;
const Details = styled.section`
  display: grid;
  grid-template-columns: 0.5fr 1.5fr;
  gap: 40px;
`;

const Info = styled.section``;

const Poster = styled.img``;

const Title = styled.h1`
  font-weight: 900;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 4px;
  margin-bottom: 2px;
`;

const Rated = styled.span`
  display: inline-block;
  margin-left: 10px;
  color: grey;
  font-size: 16px;
`;

const Year = styled.p`
  margin-top: 0%;
`;

const Genre = styled.h3`
  margin-top: 0%;
`;

const Director = styled.p`
  margin-top: 0%;
`;

const Writer = styled.p`
  margin-top: 0%;
`;

const Actors = styled.p`
  margin-top: 0%;
`;

const Plot = styled.p`
  margin-top: 0%;
`;

const Language = styled.p`
  margin-top: 0%;
`;

const Country = styled.p`
  margin-top: 0%;
`;

const Awards = styled.p`
  margin-top: 0%;
`;
const Movie = ({ movie }) => (
  <>
    <Content>
      <Details>
        <Poster src={movie.Poster} />
        <Info>
          <Title>
            {movie.Title}
            <Rated>[{movie.Rated}]</Rated>
          </Title>
          <Year>{movie.Year}</Year>
          <Genre>{movie.Genre}</Genre>
          <Director>Director: {movie.Director}</Director>
          <Writer>Writer: {movie.Writer}</Writer>
          <Actors>Actors: {movie.Actors}</Actors>
          <Plot>Plot: {movie.Plot}</Plot>
          <Language>Language: {movie.Language}</Language>
          <Country>Country: {movie.Country}</Country>
          <Awards>Awards: {movie.Awards}</Awards>
        </Info>
      </Details>
    </Content>
  </>
);

Movie.propTypes = {
  movie: PropTypes.object,
};

export default Movie;
