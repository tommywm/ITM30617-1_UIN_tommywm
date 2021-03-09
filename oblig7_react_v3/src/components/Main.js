import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Callout from './Callout';
import Movies from './Movies.js';
import Search from './Search';
import { request } from '../utils/request';

const Content = styled.section`
  width: 972px;
  margin: 0 auto;

  @media screen and (max-width: 990px) {
    width: 640px;
  }
`;

const Main = () => {
  const [search, setSearch] = useState('Star Wars');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const maxreturn = 5;

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const responseData = await request(`${process.env.API_URL}&s=${search}`);
      if (count === 0) responseData.Search.length = maxreturn;
      setCount(1);
      setMovies(responseData.Search);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (search?.length > 3) {
      fetchData();
    }
  }, [search]);

  return (
    <>
      <Content>
        <Callout />
        <Search search={search} setSearch={setSearch} fetchData={fetchData} />
        <Movies movies={movies} error={error} loading={loading} />
      </Content>
    </>
  );
};

export default Main;
