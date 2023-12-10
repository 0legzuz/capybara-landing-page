import styled from 'styled-components';
import { Colors, vwToPixels } from './AllComponentsStyles';
export const Footer = styled.footer`
  background-color: ${Colors.gray};
  text-align: center;
  height: 12vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;

  @media screen and (min-width: 1920px) {
    height: ${vwToPixels(14)}px;
  }
  @media screen and (max-width: 425px) {
    height: 17vw;
  }
`;

export const FooterBox = styled.p`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1vw;
  margin-bottom: 1vw;

  &:hover {
    color: ${Colors.lightGold};
    transition: color 0.3s ease;
  }

  @media screen and (min-width: 1920px) {
    margin-top: ${vwToPixels(1)}px;
    margin-bottom: ${vwToPixels(1)}px;
  }
`;

export const LinkSvg = styled.svg`
  fill: ${Colors.gold};
  width: 7vw;
  @media screen and (min-width: 1920px) {
    width: ${vwToPixels(7)}px;
  }
  @media screen and (max-width: 425px) {
    width: 10vw;
  }
`;

export const LinkSocial = styled.a`
  display: inline-block;
  margin-right: 0.25vw;
  margin-left: 0.25vw;
`;

export const CopyRightText = styled.div`
  font-size: 1vw;
  padding-bottom: 0.5vw;
  font-weight: 100;
  color: ${Colors.lightBackground};
  @media screen and (min-width: 1920px) {
    font-size: ${vwToPixels(1)}px;
  }
`;
