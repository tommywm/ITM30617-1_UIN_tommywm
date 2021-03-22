import client from './client';

const movieFields = `
	title,
	'slug': slug.current,
	'categories': category[]->category,
	'actors': actor[]->actor,
	description,
	image,
	favorite,
	seen
`;

export const getMovies = async () => {
  const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`);
  return data;
};

export const getMovie = async (slug) => {
  const data = await client.fetch(
    `*[_type == "movie" && slug.current == $slug]{${movieFields},
		body[]{...}}`,
    { slug }
  );
  // return data?.[0];
  return data;
};
