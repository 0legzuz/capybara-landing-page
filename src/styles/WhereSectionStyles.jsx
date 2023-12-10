import styled from 'styled-components';
import { Colors, vwToPixels } from './AllComponentsStyles';
import { Section, SectionBox } from './AllComponentsStyles';
export const SectionWhereBox = styled(SectionBox)`
  background-color: ${Colors.lightBackground};
`;

export const SectionWhere = styled(Section)`
  position: relative;
  @media screen and (max-width: 425px) {
    height: 85vw;
  }
`;

export const WhereHeader = styled.div`
  font-size: 13.5vw;
  font-weight: 700;
  color: ${Colors.gray};
  display: flex;
  justify-content: center;
  word-wrap: nowrap;

  @media screen and (min-width: 1920px) {
    font-size: ${vwToPixels(13.5)}px;
  }
  @media screen and (max-width: 425px) {
    font-size: 17vw;
    position: absolute;
    z-index: 1;
    margin-left: 4.4vw;
  }
`;

export const WhereBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  overflow: visible;
  @media screen and (max-width: 425px) {
    position: absolute;
    z-index: 0;
  }
`;
export const WhereText = styled.div`
  font-size: 2.1vw;
  font-weight: 400;
  color: ${Colors.gray};
  padding: 5.2vw 5.2vw 5.2vw 10.4vw;
  width: 59.4vw;
  border-radius: 20.8vw 0 0 20.8vw;
  border-top: 0.26vw solid ${Colors.gray};
  border-bottom: 0.26vw solid ${Colors.gray};
  border-left: 0.26vw solid ${Colors.gray};
  border-right: none;
  white-space: nowrap;

  @media screen and (min-width: 1920px) {
    font-size: ${vwToPixels(2.1)}px;
    padding: ${vwToPixels(5.2)}px ${vwToPixels(5.2)}px ${vwToPixels(5.2)}px
      ${vwToPixels(10)}px;
    width: ${vwToPixels(59.4)}px;
    border-radius: ${vwToPixels(20.8)}px;
    border: ${vwToPixels(0.26)}px solid ${Colors.gray};
  }
  @media screen and (max-width: 425px) {
    font-size: 4vw;
    margin-left: 9vw;
    margin-top: 20vw;
    border-radius: 14vw 0 0 14vw;
    padding: 2vw 3vw 2vw 6vw;
    width: 100vw;
    border-width: 0.6vw;
  }
`;
export const WhereImg = styled.img`
  margin-right: 57vw;
  height: 50vw;
  width: 50vw;
  position: absolute;
  top: 11.5vw;
  left: -4.2vw;

  @media screen and (min-width: 1920px) {
    margin-right: ${vwToPixels(57)}px;
    width: ${vwToPixels(50)}px;
    height: ${vwToPixels(50)}px;
    top: ${vwToPixels(11.5)}px;
    left: ${vwToPixels(-4.2)}px;
  }
  @media screen and (max-width: 425px) {
    font-size: 4vw;
    z-index: -1;
    transform: scale(2);
  }
`;
