import styled from 'styled-components';

export const CastContent = styled.ul``;

export const CardWrapper = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const CastPost = styled.img`
  width: 160px;
  height: auto;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const АctorName = styled.h2`
  margin-bottom: 16px;
`;

export const АctorCharacter = styled.p`
  margin-bottom: 16px;
`;
