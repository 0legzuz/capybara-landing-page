import styled from 'styled-components';
import { Colors, vwToPixels } from './AllComponentsStyles';
export const Button = styled.button`
  position: fixed;
  top: 20px;
  right: 0px;
  z-index: 7;
  transition: transform 0.3s ease;
  width: 5vw;
  border-radius: 2.5vw;
  background-color: transparent;
  border-color: transparent;
  fill: ${Colors.gold};
  @media screen and (min-width: 1920px) {
    width: ${vwToPixels(7)}px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Navbar = styled.nav`
  padding-top: 1vw;
  background-color: ${Colors.lightBackground};
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1920px) {
    padding-top: ${vwToPixels(1)}px;
  }
  @media screen and (max-width: 425px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-size: 2.1vw;
  font-weight: 400;
  color: ${Colors.gray};
  cursor: pointer;
  text-decoration: none;
  height: 2.6vw;
  padding: 2.1vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1920px) {
    font-size: ${vwToPixels(2.1)}px;
    height: ${vwToPixels(2.6)}px;
    padding: ${vwToPixels(2.1)}px;
  }
`;

export const NavLinkBorder = styled(NavLink)`
  border-radius: 2.1vw;
  border: 0.21vw solid ${Colors.gray};

  @media screen and (min-width: 1920px) {
    border-radius: ${vwToPixels(2.1)}px;
    border: ${vwToPixels(0.21)}px solid ${Colors.gray};
  }
`;
