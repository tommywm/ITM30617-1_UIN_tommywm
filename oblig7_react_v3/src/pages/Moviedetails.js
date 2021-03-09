import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { request } from '../utils/request';
import Movie from '../components/Movie';

const Moviedetails = () => {
  const { slug } = useParams();

  const [movie, setMovie] = useState([]);

  const fetchData = async () => {
    const responseData = await request(`${process.env.API_URL}&t=${slug}`);

    setMovie(responseData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Movie movie={movie} />
    </>
  );
};

export default Moviedetails;
