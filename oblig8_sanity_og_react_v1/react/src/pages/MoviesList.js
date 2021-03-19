import { useState } from 'react';
import Movies from '../components/Movies';
import { getMovies } from '../utils/movieService';
import { Button, Info } from '../styles/Styles';

const MoviesList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const movies = await getMovies();
      setData(movies);
      document.getElementById('fetch').style.display = 'none';
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {error ? <Info>{error.message}</Info> : null}
      {loading ? <Info>Loading ...</Info> : null}
      {!error &&
        !loading &&
        (data?.length > 0 ? (
          <Movies data={data} />
        ) : (
          <Info>😱 No movies found..</Info>
        ))}

      <Button type="button" id="fetch" onClick={handleClick}>
        Fetch some movies
      </Button>
    </>
  );
};

export default MoviesList;
