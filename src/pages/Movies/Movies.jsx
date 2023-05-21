import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Searchbar } from '../../components/Searchbar/Searchbar.jsx';
import { fetchSearchMovies } from '../../api/api.js';
import { Loader } from 'components/Loader/Loader';
import { MoviesLayout } from '../../components/MoviesLayout/MoviesLayout.jsx';

export default function Movies() {
  const [status, setStatus] = useState('idle');
  const [searchMovie, setSearchMovie] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const changeFilter = searchMovie => {
    setSearchParams(searchMovie !== '' ? { query: searchMovie } : {});
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    const controller = new AbortController();

    async function fetchSearchMoviesItems() {
      setStatus('pending');

      try {
        const moviesItems = await fetchSearchMovies(query, {
          signal: controller.signal,
        });

        setSearchMovie(moviesItems);
        setStatus('resolved');
      } catch (error) {
        toast.error('Something went wrong. Please, reload the page.');
        setStatus('rejected');
      } finally {
        setStatus('resolved');
      }
    }

    fetchSearchMoviesItems();

    return () => {
      controller.abort();
    };
  }, [query]);

  return (
    <main>
      <Searchbar value={query} onSubmit={changeFilter} />

      {status === 'pending' && <Loader />}

      {searchMovie.length > 0 && <MoviesLayout movies={searchMovie} />}
    </main>
  );
}
