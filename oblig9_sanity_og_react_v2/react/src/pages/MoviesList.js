import { useEffect, useState } from 'react';
import Movies from '../components/Movies';
import { getMovies } from '../utils/movieService';
import { Info } from '../styles/Styles';

const MoviesList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const movies = await getMovies();
      setData(movies);
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
          <Movies data={data} />
        ) : (
          <Info>😱 Ingen filmer her!!</Info>
        ))}
    </>
  );
};

export default MoviesList;
