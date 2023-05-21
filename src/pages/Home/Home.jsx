import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { fetchMoviesTrend } from '../../api/api.js';
import { Container } from './Home.styled.js';
import { MoviesLayout } from '../../components/MoviesLayout/MoviesLayout.jsx';

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
      {list.length > 0 ? (
        <MoviesLayout movies={list} />
      ) : (
        <p>No trending movies available.</p>
      )}
      <ToastContainer position="top-right" autoClose={3000} />
    </Container>
  );
}
