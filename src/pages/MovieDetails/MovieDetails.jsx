import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import { fetchDetailsMovie } from '../../api/api.js';
import { MovieCard } from '../../components/MovieCard/MovieCard.jsx';

export default function MovieDetails() {
  const { itemId } = useParams();
  const [status, setStatus] = useState('idle');
  const [movieCardDetails, setMovieCardDetails] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchDetailsMovieCard() {
      setStatus('pending');

      try {
        const movieCardDetails = await fetchDetailsMovie(itemId, {
          signal: controller.signal,
        });

        if (!movieCardDetails) {
          toast.error('Not found');
          setStatus('rejected');
          return;
        }

        setMovieCardDetails(movieCardDetails);
        setStatus('resolved');
      } catch (error) {
        toast.error('Something went wrong. Please, reload the page.');
        setStatus('rejected');
      }
    }

    fetchDetailsMovieCard();

    return () => {
      controller.abort();
    };
  }, [itemId]);

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <MovieCard movieCardDetails={movieCardDetails} />
      )}
    </>
  );
}
