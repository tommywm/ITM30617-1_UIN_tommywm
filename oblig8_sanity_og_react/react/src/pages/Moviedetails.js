import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from '../utils/movieService';
import Movie from '../components/Movie';

const Moviedetails = () => {
  const { slug } = useParams();

  const [data, setData] = useState([]);
  const fetchData = async () => {
    const movies = await getMovie(slug);
    setData(movies);
  };

  useEffect(() => {
    fetchData();
    // got a small warning for the hook..
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {data.map((movie) =>
        movie.slug === slug ? (
          <Movie
            key={movie.slug}
            title={movie.title}
            actor={movie.actor}
            description={movie.description}
            image={movie.image}
          />
        ) : null
      )}
    </>
  );
};

export default Moviedetails;
