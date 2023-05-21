import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { fetchReviewsMovie } from '../../api/api.js';

export default function Reviews() {
  const { itemId } = useParams();
  const [status, setStatus] = useState('idle');
  const [reviewsMovie, setReviewsMovie] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchReviewsMovieCard() {
      setStatus('pending');

      try {
        const reviewsMovie = await fetchReviewsMovie(itemId, {
          signal: controller.signal,
        });

        setReviewsMovie(reviewsMovie);

        setStatus('resolved');
      } catch (error) {
        toast.error('Something went wrong. Please, reload the page.');
        setStatus('rejected');
      }
    }

    fetchReviewsMovieCard();

    return () => {
      controller.abort();
    };
  }, [itemId]);

  return (
    <>
      {status === 'pending' && <Loader />}
      {reviewsMovie.length > 0 ? (
        <ul>
          {reviewsMovie.map(({ id, content, author_details }) => (
            <li key={id}>
              <h2>{author_details.username}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>You will be the first to leave a review! :)</p>
      )}
    </>
  );
}
