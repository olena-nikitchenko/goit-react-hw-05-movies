import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { fetchCastMovie } from '../../api/api.js';
import defaultImage from '../../images/defaultImage.jpg';
import {
  CastContent,
  CastPost,
  АctorName,
  CardWrapper,
  АctorCharacter,
} from '../Cast/Cast.styled.js';

export default function Cast() {
  const { itemId } = useParams();
  const [status, setStatus] = useState('idle');
  const [castMovie, setcastMovie] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchCastMovieCard() {
      setStatus('pending');

      try {
        const castMovie = await fetchCastMovie(itemId, {
          signal: controller.signal,
        });

        if (castMovie === []) {
          toast.error('Not found');
          setStatus('rejected');
          return;
        }
        setcastMovie(castMovie);
        setStatus('resolved');
      } catch (error) {
        toast.error('Something went wrong. Please, reload the page.');
        setStatus('rejected');
      }
    }

    fetchCastMovieCard();

    return () => {
      controller.abort();
    };
  }, [itemId]);

  return (
    <>
      {status === 'pending' && <Loader />}

      {castMovie && (
        <CastContent>
          {castMovie.map(({ id, name, profile_path, character }) => (
            <CardWrapper key={id}>
              <CastPost
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : defaultImage
                }
                alt={name}
              />
              <АctorName>{name}</АctorName>
              <АctorCharacter>{character}</АctorCharacter>
            </CardWrapper>
          ))}
        </CastContent>
      )}
    </>
  );
}
