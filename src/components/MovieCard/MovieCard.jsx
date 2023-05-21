import { useLocation, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { BackLink } from '../BackLink.jsx';
import { Loader } from 'components/Loader/Loader';

import {
  CardContent,
  ContentInfo,
  CardPost,
  TitleMovie,
  GenreItems,
  GenreItem,
  InfoText,
  SubTitle,
  Navigate,
  AddInfoTitle,
  Link,
} from '../MovieCard/MovieCard.styled.js';

export function MovieCard({ movieCardDetails }) {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>

      <CardContent>
        <CardPost
          src={
            `https://image.tmdb.org/t/p/w500${movieCardDetails.poster_path}` ||
            `https://i.ibb.co/0GKG6L1/img-Modal-Review.jpg`
          }
          alt=""
        />
        <ContentInfo>
          <TitleMovie>
            {movieCardDetails.original_title.toUpperCase() +
              ' (' +
              movieCardDetails.release_date.slice(0, 4) +
              ')'}
          </TitleMovie>
          <InfoText>
            User score: {Math.round(movieCardDetails.vote_average * 10)}%
          </InfoText>
          <SubTitle>Overview</SubTitle>
          <InfoText>
            {movieCardDetails.overview
              ? movieCardDetails.overview
              : 'An excellent film and worthy of your attention!'}
          </InfoText>
          <SubTitle>Genres</SubTitle>
          <GenreItems>
            {movieCardDetails.genres.map(({ id, name }) => (
              <GenreItem key={id}>{name}</GenreItem>
            ))}
          </GenreItems>
        </ContentInfo>
      </CardContent>

      <Navigate>
        <AddInfoTitle>Additional information</AddInfoTitle>
        <Link to="cast" state={{ from: location.state?.from ?? '/' }}>
          Cast
        </Link>
        <Link to="reviews" state={{ from: location.state?.from ?? '/' }}>
          Reviews
        </Link>
      </Navigate>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
}
