import styled from 'styled-components';
import { Colors, vwToPixels } from './AllComponentsStyles';
import { Section, SectionBox } from './AllComponentsStyles';

export const SectionQuestionBox = styled(SectionBox)`
  background-color: ${Colors.lightBackground};
`;

export const SectionQuestion = styled(Section)`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  height: 54vw;

  @media screen and (min-width: 1920px) {
    height: ${vwToPixels(54)}px;
  }
`;

export const Header = styled.h1`
  margin-top: 5.21vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1920px) {
    margin-top: ${vwToPixels(5.21)}px;
  }
`;

export const HeaderText = styled.div`
  font-size: 13.54vw;
  font-weight: 700;
  color: ${Colors.gray};

  @media screen and (min-width: 1920px) {
    font-size: ${vwToPixels(13.54)}px;
  }
  @media screen and (max-width: 425px) {
    position: absolute;
    font-size: 17vw;
    padding-left: 7vw;
    padding-top: 5vw;
  }
`;

export const HeaderImg = styled.img`
  margin-top: 12vw;
  transform: scaleX(-1) rotate(-35deg);
  width: 90vw;
  position: absolute;
  padding-left: 10vw;
  padding-top: 3.1vw;

  @media screen and (min-width: 1920px) {
    margin-top: ${vwToPixels(12)}px;
    width: ${vwToPixels(90)}px;
    padding-left: ${vwToPixels(10)}px;
    padding-top: ${vwToPixels(3.1)}px;
  }
  @media screen and (max-width: 425px) {
    margin-top: 15vw;
  }
`;
