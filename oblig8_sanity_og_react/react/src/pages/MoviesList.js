import { useState } from 'react';
import Movies from '../components/Movies';
import { getMovies } from '../utils/movieService';
import { Button } from '../styles/Styles';

const MoviesList = () => {
  const [data, setData] = useState([]);
  const handleClick = async () => {
    const movies = await getMovies();
    setData(movies);
    document.getElementById('fetch').style.display = 'none';
  };
  return (
    <>
      <Movies data={data} />
      <Button type="button" id="fetch" onClick={handleClick}>
        Fetch some movies
      </Button>
    </>
  );
};

export default MoviesList;
