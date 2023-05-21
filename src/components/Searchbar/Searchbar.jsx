import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  SearchForm,
  Wrapper,
  Icon,
  SearchFormInput,
} from 'components/Searchbar/Searchbar.styled';

export function Searchbar({ onSubmit }) {
  const [searchMovie, setSearchMovie] = useState('');

  const handleSearchWord = e => {
    setSearchMovie(e.currentTarget.value.toLowerCase());
  };

  const handleSearchSubmit = e => {
    e.preventDefault();

    if (searchMovie.trim() === '') {
      toast.error(`Sorry, movie not found. Please try again.`);
      return;
    }
    onSubmit(searchMovie);
    setSearchMovie('');
  };

  const handleSearchIconClick = () => {
    if (searchMovie.trim() === '') {
      toast.error(`Sorry, movie not found. Please try again.`);
      return;
    }
    onSubmit(searchMovie);
    setSearchMovie('');
  };

  return (
    <Wrapper>
      <SearchForm onSubmit={handleSearchSubmit}>
        <Icon onClick={handleSearchIconClick} />
        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={searchMovie}
          onChange={handleSearchWord}
        />
      </SearchForm>
    </Wrapper>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
