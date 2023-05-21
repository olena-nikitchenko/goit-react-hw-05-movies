import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from '../SharedLayout/SharedLayout.jsx';

const Home = lazy(() => import('../../pages/Home/Home.jsx'));
const Movies = lazy(() => import('../../pages/Movies/Movies.jsx'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails.jsx')
);
const Cast = lazy(() => import('../Cast/Cast.jsx'));
const Reviews = lazy(() => import('../Reviews/Reviews.jsx'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:itemId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
