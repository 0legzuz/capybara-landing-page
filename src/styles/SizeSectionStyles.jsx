import styled from 'styled-components';
import { Colors, vwToPixels } from './AllComponentsStyles';
import { Section, SectionBox } from './AllComponentsStyles';

export const SectionSize = styled(Section)`
  position: relative;
`;

export const SectionSizeBox = styled(SectionBox)`
  background-color: ${Colors.darkBackground};
`;

export const SizeHeader = styled.div`
  font-size: 13.5vw;
  font-weight: 700;
  color: ${Colors.gold};
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1920px) {
    font-size: ${vwToPixels(13.5)}px;
  }
  @media screen and (max-width: 425px) {
    font-size: 17vw;
    position: absolute;
    z-index: 2;
    margin-left: 4.4vw;
  }
`;

export const SizeImg = styled.img`
  transform: scaleX(-1);
  width: 65.7vw;
  position: absolute;
  z-index: 1;

  @media screen and (min-width: 1920px) {
    width: ${vwToPixels(65.7)}px;
  }
`;

export const SizeCircle = styled.div`
  background-color: ${Colors.almostBlack};
  width: 73vw;
  height: 73vw;
  border-radius: 36.4vw;
  margin-left: 43vw;
  position: absolute;
  z-index: 0;

  @media screen and (min-width: 1920px) {
    width: ${vwToPixels(73)}px;
    height: ${vwToPixels(73)}px;
    border-radius: ${vwToPixels(36.4)}px;
    margin-left: ${vwToPixels(43)}px;
  }
  @media screen and (max-width: 425px) {
    width: 90vw;
    height: 90vw;
    border-radius: 45vw;
    margin-top: 10vw;
    margin-left: 35vw;
  }
`;

export const SizeText = styled.div`
  font-size: 2.6vw;
  font-weight: 100;
  color: ${Colors.lightGold};
  width: 40vw;
  margin-left: 5.2vw;
  position: absolute;
  margin-left: 62.5vw;
  margin-top: 15.6vw;

  @media screen and (min-width: 1920px) {
    font-size: ${vwToPixels(2.6)}px;
    width: ${vwToPixels(40)}px;
    margin-left: ${vwToPixels(5.2)}px;
    margin-left: ${vwToPixels(62.5)}px;
    margin-top: ${vwToPixels(15.6)}px;
  }
  @media screen and (max-width: 425px) {
    font-size: 4vw;
    width: 50vw;
    margin-top: 20vw;
    margin-left: 55vw;
  }
`;

export const SizeLinesBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 62.5vw;
  height: 32.5vw;
  transform: rotate(20deg);
  margin-left: 4.68vw;
  position: absolute;
  z-index: 3;
  align-items: flex-end;

  @media screen and (min-width: 1920px) {
    width: ${vwToPixels(62.5)}px;
    height: ${vwToPixels(32.5)}px;
    margin-left: ${vwToPixels(4.68)}px;
  }
  @media screen and (max-width: 425px) {
    margin-top: 10vw;
    right: 60vw;
    width: 70vw;
    height: 40vw;
    transform: rotate(20deg) scale(1.1);
    flex-direction: row-reverse;
  }
`;

export const SizeLines = styled.div`
  width: 51.25vw;
  height: 1.56vw;
  display: flex;
  align-items: center;

  @media screen and (min-width: 1920px) {
    width: ${vwToPixels(51.25)}px;
    height: ${vwToPixels(1.56)}px;
  }
  @media screen and (max-width: 425px) {
    margin-right: 5vw;
  }
`;

export const SizeLineBig = styled.div`
  width: 52.1vw;
  height: 0.26vw;
  background-color: ${Colors.gold};

  @media screen and (min-width: 1920px) {
    width: ${vwToPixels(52.1)}px;
    height: ${vwToPixels(0.26)}px;
  }
`;

export const SizeLineSmall = styled.div`
  width: 0.26vw;
  height: 100%;
  background-color: ${Colors.gold};

  @media screen and (min-width: 1920px) {
    width: ${vwToPixels(0.26)}px;
  }
`;

export const SizeLinesHeight = styled.div`
  width: 1.56vw;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 2.6vw;

  @media screen and (min-width: 1920px) {
    width: ${vwToPixels(1.56)}px;
    margin-left: ${vwToPixels(2.6)}px;
  }
  @media screen and (max-width: 425px) {
    margin-left: 0;
  }
`;

export const SizeLineBigHeight = styled.div`
  height: 27.1vw;
  width: 0.26vw;
  background-color: ${Colors.gold};

  @media screen and (min-width: 1920px) {
    height: ${vwToPixels(27.1)}px;
    width: ${vwToPixels(0.26)}px;
  }
  @media screen and (max-width: 425px) {
    height: 35vw;
  }
`;

export const SizeLineSmallHeight = styled.div`
  width: 100%;
  height: 0.26vw;
  background-color: ${Colors.gold};

  @media screen and (min-width: 1920px) {
    height: ${vwToPixels(0.26)}px;
  }
`;
