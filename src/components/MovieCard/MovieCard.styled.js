import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CardContent = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const ContentInfo = styled.div``;

export const CardPost = styled.img`
  width: 360px;
  margin-right: 30px;
`;

export const TitleMovie = styled.h2`
  margin-bottom: 16px;

  font-weight: 500;
  font-size: 22px;
  line-height: 1.15;
  color: #031c68;
`;

export const GenreItems = styled.ul`
  display: flex;
  align-items: center;
`;

export const GenreItem = styled.li`
  &:not(:last-child)::after {
    content: ',';
    margin-right: 5px;
  }
`;

export const InfoText = styled.li`
  margin-bottom: 16px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.67;
`;

export const SubTitle = styled.h3`
  margin-bottom: 16px;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;

  color: #031c68;
`;

export const AddInfoTitle = styled.h2`
  text-align: center;
  margin-bottom: 24px;

  color: #031c68;
`;

export const Navigate = styled.nav`
  padding-bottom: 15px;
  margin-bottom: 30px;
  text-align: center;
  border-bottom: 1px solid #abb3db;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  font-size: 18px;
  padding: 8px 16px;
  text-decoration: none;
  font-weight: 500;
  color: inherit;

  &.active {
    color: #274cdd;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;
