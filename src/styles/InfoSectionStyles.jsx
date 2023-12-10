import styled from 'styled-components';
import { Colors, vwToPixels } from './AllComponentsStyles';
import { Section, SectionBox } from './AllComponentsStyles';

export const SectionInfoBox = styled(SectionBox)`
  background-color: ${Colors.darkBackground};
`;

export const SectionInfo = styled(Section)`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InfoHeader = styled.div`
  font-size: 13.5vw;
  font-weight: 700;
  color: ${Colors.gold};
  position: absolute;
  margin-left: 4.4vw;
  padding-bottom: 33.4vw;
  z-index: 2;

  @media screen and (min-width: 1920px) {
    font-size: ${vwToPixels(13.5)}px;
    margin-left: ${vwToPixels(4.4)}px;
    padding-bottom: ${vwToPixels(33.4)}px;
  }
  @media screen and (max-width: 425px) {
    padding-bottom: 45vw;
    font-size: 17vw;
  }
`;

export const InfoText = styled.div`
  padding-top: 7vw;
  font-size: 2.08vw;
  font-weight: 100;
  color: #fff;
  width: 40vw;
  margin-left: 5.21vw;
  white-space: nowrap;

  @media screen and (min-width: 1920px) {
    padding-top: ${vwToPixels(5.21)}px;
    font-size: ${vwToPixels(2.08)}px;
    width: ${vwToPixels(40)}px;
    margin-left: ${vwToPixels(5.21)}px;
  }
  @media screen and (max-width: 425px) {
    font-size: 4vw;
    padding-top: 15vw;
  }
`;

export const InfoImgBox = styled.div`
  width: 72vw;
  height: 38.5vw;
  border-radius: 26vw;
  margin-right: 5.21vw;
  overflow: hidden;

  @media screen and (min-width: 1920px) {
    border-radius: ${vwToPixels(26)}px;
    margin-right: ${vwToPixels(5.21)}px;
    width: ${vwToPixels(72)}px;
    height: ${vwToPixels(38.5)}px;
  }
  @media screen and (max-width: 425px) {
    position: absolute;
    width: 108vw;
    height: 52vw;
    border-radius: 25vw;
    margin-left: 58vw;
  }
`;

export const InfoImg = styled.img`
  height: 38.5vw;
  @media screen and (min-width: 1920px) {
    height: ${vwToPixels(38.5)}px;
  }
  @media screen and (max-width: 425px) {
    height: 55vw;
    transform: translateX(-15vw);
  }
`;
