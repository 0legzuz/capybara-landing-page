import styled from 'styled-components';

function vwToPixels(vw) {
  return Math.round(19.2 * vw);
}

const Colors = {
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
`;

export const SectionBox = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

export const SectionQuestionBox = styled(SectionBox)`
  background-color: ${Colors.lightBackground};
`;
export const SectionInfoBox = styled(SectionBox)`
  background-color: ${Colors.darkBackground};
`;

export const SectionSizeBox = styled(SectionBox)`
  background-color: ${Colors.darkBackground};
`;

export const SectionWhereBox = styled(SectionBox)`
  background-color: ${Colors.lightBackground};
`;

export const SectionSocialBox = styled(SectionBox)`
  background-color: ${Colors.lightGold};
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

export const Section = styled.section`
  height: 62.5vw;
  max-width: 1920px;
  margin: 0 auto;
  @media screen and (min-width: 1920px) {
    height: ${vwToPixels(62.5)}px;
  }
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
  font-weight: 600;
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

export const SectionInfo = styled(Section)`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InfoHeader = styled.div`
  font-size: 13.5vw;
  font-weight: 600;
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

export const SectionSize = styled(Section)`
  position: relative;
`;

export const SizeHeader = styled.div`
  font-size: 13.5vw;
  font-weight: 600;
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

export const SectionWhere = styled(Section)`
  position: relative;
  @media screen and (max-width: 425px) {
    height: 85vw;
  }
`;

export const WhereHeader = styled.div`
  font-size: 13.5vw;
  font-weight: 600;
  color: ${Colors.gray};
  display: flex;
  justify-content: center;

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
    margin-left: 15vw;
    margin-top: 18.3vw;
    border-radius: 17vw 0 0 17vw;
    padding: 4vw 4vw 4vw 8vw;
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
  font-weight: 600;
  color: ${Colors.gray};
  display: flex;
  justify-content: center;

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
