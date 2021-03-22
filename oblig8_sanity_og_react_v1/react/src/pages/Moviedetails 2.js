import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from '../utils/movieService';
import Movie from '../components/Movie';
import { Info } from '../styles/Styles';

const Moviedetails = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const movie = await getMovie(slug);
      setData(movie);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // got a small warning for the hook..
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {error ? <Info>{error.message}</Info> : null}
      {loading ? <Info>Loading ...</Info> : null}
      {!error &&
        !loading &&
        (data?.length > 0 ? (
          <Movie
            key={data[0].slug}
            title={data[0].title}
            actor={data[0].actor}
            description={data[0].description}
            image={data[0].image}
          />
        ) : (
          <Info>😱 Failed to fetch the movie, please try again..</Info>
        ))}
    </>
  );
};

export default Moviedetails;
