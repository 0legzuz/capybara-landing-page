import styled from 'styled-components';
export function vwToPixels(vw) {
  return Math.round(19.2 * vw);
}

export const Colors = {
  lightBackground: '#ffebbe',
  darkBackground: '#1d1d1d',
  gray: '#313131',
  gold: '#ffb612',
  lightGold: '#FFCE58',
  almostBlack: '#131313'
};

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

export const SectionBox = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

export const Section = styled.section`
  height: 62.5vw;
  max-width: 1920px;
  margin: 0 auto;
  @media screen and (min-width: 1920px) {
    height: ${vwToPixels(62.5)}px;
  }
`;
