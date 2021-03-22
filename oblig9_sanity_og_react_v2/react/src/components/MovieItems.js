import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import imageUrlBuilder from '@sanity/image-url';
import client from '../utils/client';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const Moviecard = styled.section`
  border-radius: 20px;

  &:hover {
    box-shadow: 4px 4px 10px var(--black);
  }
`;

const Poster = styled.img`
  border-radius: 20px;
  margin: 0 auto;
  display: block;
`;

const Movie = ({ movie }) => (
  <>
    <Link to={`movies/${movie.slug}`}>
      <Moviecard>
        <Poster src={urlFor(movie.image).width(300).url()} alt="movieposter" />
      </Moviecard>
    </Link>
  </>
);

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
