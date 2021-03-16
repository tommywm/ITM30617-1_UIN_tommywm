import client from './client';

const movieFields = `
	title,
	'slug': slug.current,
	'actor': actor->title,
	description,
	image
`;

export const getMovies = async () => {
  const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`);
  return data;
};

export const getMovie = async (slug) => {
  const data = await client.fetch(
    `*[_type == "movie" && slug.current == $slug]{${movieFields}}`,
    { slug }
  );
  return data;
};
