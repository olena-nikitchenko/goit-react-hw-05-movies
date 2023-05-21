import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 800px;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 6px;
  fill: #274cdd;
`;

export const SearchFormInput = styled.input`
  width: 100%;
  padding: 8px 32px 8px 8px;
  border-radius: 2px;
  font: inherit;
  border-color: #274cdd;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
