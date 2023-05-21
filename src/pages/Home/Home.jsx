import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { fetchMoviesTrend } from '../../api/api.js';
import { Container, CardWrapper } from './Home.styled.js';

export default function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMoviesTrendItems() {
      try {
        const moviesTrend = await fetchMoviesTrend({
          signal: controller.signal,
        });
        setList(moviesTrend);
      } catch (error) {
        toast.error('Something went wrong. Please, reload the page.');
      }
    }
    fetchMoviesTrendItems();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Container>
      <h2>Movies are trending today</h2>
      {list.map(({ id, title }) => (
        <CardWrapper key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </CardWrapper>
      ))}
      <ToastContainer position="top-right" autoClose={3000} />
    </Container>
  );
}
