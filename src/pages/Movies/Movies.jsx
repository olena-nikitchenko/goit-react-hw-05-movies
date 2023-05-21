import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link, useLocation } from 'react-router-dom';
import { Searchbar } from '../../components/Searchbar/Searchbar.jsx';
import { fetchSearchMovies } from '../../api/api.js';
import { Loader } from 'components/Loader/Loader';

export default function Movies() {
  const location = useLocation();
  const [status, setStatus] = useState('idle');
  const [seachMovie, setSeachMovie] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const changeFilter = seachMovie => {
    setSearchParams(seachMovie !== '' ? { query: seachMovie } : {});
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

        setSeachMovie(moviesItems);
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

      {seachMovie.length > 0 && (
        <ul>
          {seachMovie.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
