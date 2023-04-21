import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
  gap: 30px;

  background-color: darkcyan;

  min-height: 40px;
  padding-left: 20px;
  font-size: x-large;
  text-align: center;
  align-items: center;

  @media (max-width: 500px) {
    gap: 15px;
  }

  @media (max-width: 440px) {
    font-size: 20px;
    gap: 7px;
  }

  @media (max-width: 400px) {
    gap: 5px;
    min-width: 370px;
    font-size: 19px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  margin-right: 10px;

  &.active {
    font-weight: 500;
    position: relative;

    ::after {
      content: '';
      display: block;
      height: 3px;
      width: 100%;
      background-color: darkblue;
      border-radius: 3px;
      position: absolute;
      bottom: -3px;
      left: 0;
    }
  }
`;
