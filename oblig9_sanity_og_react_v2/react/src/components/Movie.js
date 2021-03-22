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
const Name = styled.span`
  margin-right: 20px;
`;

const Tooltip1 = styled.span`
  visibility: hidden;
  width: 100px;
  font-size: 14px;
  background-color: var(--yellow);
  color: var(--black);
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  position: absolute;
  z-index: 1;
`;

const Tooltip2 = styled.span`
  visibility: hidden;
  width: 100px;
  font-size: 14px;
  background-color: var(--yellow);
  color: var(--black);
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  position: absolute;
  z-index: 1;
`;
const Watched = styled.span`
  cursor: default;
  &:hover ~ ${Tooltip1} {
    visibility: visible;
  }
`;

const Favorite = styled.span`
  cursor: default;
  &:hover ~ ${Tooltip2} {
    visibility: visible;
  }
`;

const Actor = styled.p``;
const Categories = styled.p``;

const Description = styled.p``;

const Movie = ({ data }) => (
  <>
    <Info>
      <Poster
        src={urlFor(data[0].image.asset._ref).width(400).url()}
        alt="movieposter"
      />
      <Details>
        <Title>
          <Name>{data[0].title}</Name>
          <Name>{data.title}</Name>
          <Watched>{data[0].seen === true && '🍿'}</Watched>
          <Tooltip1>Watched</Tooltip1>
          <Favorite>{data[0].favorite === true && '⭐'}</Favorite>
          <Tooltip2>Favorite</Tooltip2>
        </Title>
        <Categories>{data[0].categories.join(', ')}</Categories>
        <Actor>{data[0].actors.join(', ')}</Actor>
        <Description>{data[0].description[0].children[0].text}</Description>
      </Details>
    </Info>
  </>
);

Movie.propTypes = {
  data: PropTypes.object,
};

export default Movie;
