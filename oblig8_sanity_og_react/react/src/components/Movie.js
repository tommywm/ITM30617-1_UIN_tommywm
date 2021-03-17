import PropTypes from 'prop-types';
import styled from 'styled-components';
import imageUrlBuilder from '@sanity/image-url';
import client from '../utils/client';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}
const Info = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
`;
const Poster = styled.img``;

const Details = styled.section``;

const Title = styled.h1`
  text-transform: capitalize;
  margin: 0;
`;
const Actor = styled.p``;
const Description = styled.p``;

const Movie = ({ title, actor, description, image }) => (
  <>
    <Info>
      <Poster src={urlFor(image).width(400).url()} alt="movieposter" />
      <Details>
        <Title>Title: {title}</Title>
        <Actor>Actor: {actor}</Actor>
        <Description>{description}</Description>
      </Details>
    </Info>
  </>
);

Movie.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  actor: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // movie: PropTypes.array,
};

export default Movie;
