import styled from 'styled-components';
import { Colors, vwToPixels } from './AllComponentsStyles';
import { Section, SectionBox } from './AllComponentsStyles';

export const SectionSocialBox = styled(SectionBox)`
  background-color: ${Colors.lightGold};
`;

export const SectionSocial = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media screen and (max-width: 425px) {
    height: 85vw;
  }
`;
export const SocialHeader = styled.div`
  font-size: 10.4vw;
  font-weight: 700;
  color: ${Colors.gray};
  display: flex;
  justify-content: center;
  word-wrap: nowrap;

  @media screen and (min-width: 1920px) {
    font-size: ${vwToPixels(10.4)}px;
  }
  @media screen and (max-width: 425px) {
    font-size: 13vw;
    margin-left: 4.4vw;
  }
`;

export const SocialBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 2.1vw;
  padding-left: 5.2vw;

  @media screen and (min-width: 1920px) {
    padding-top: ${vwToPixels(2.1)}px;
  }
  @media screen and (max-width: 425px) {
    padding-bottom: 3vw;
    padding-left: 7vw;
  }
`;

export const SocialText = styled.div`
  font-size: 2.1vw;
  font-weight: 400;
  color: ${Colors.gray};
  width: auto;

  white-space: nowrap;

  @media screen and (min-width: 1920px) {
    font-size: ${vwToPixels(2.1)}px;
    margin-left: ${vwToPixels(5.2)}px;
  }
  @media screen and (max-width: 425px) {
    font-size: 4vw;
  }
`;

export const SocialImg = styled.img`
  border-radius: 19.5vw;
  height: 39vw;
  margin-right: 5.2vw;
  float: inline-end;

  @media screen and (min-width: 1920px) {
    border-radius: ${vwToPixels(19.5)}px;
    height: ${vwToPixels(39)}px;
    margin-right: ${vwToPixels(5.2)}px;
  }
  @media screen and (max-width: 425px) {
    margin-bottom: 5vw;
    transform: scaleX(-1) scale(1.4);
  }
`;
