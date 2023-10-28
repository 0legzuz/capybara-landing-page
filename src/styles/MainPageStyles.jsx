import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffebbe;
  max-width: 1920px;
  overflow: hidden;
`;

export const Navbar = styled.nav`
  padding-top: 20px;
  background-color: #ffebbe;
  display: flex;
  justify-content: center;
`;

export const NavLink = styled.a`
  font-size: 40px;
  font-weight: 400;
  color: #313131;
  cursor: pointer;
  text-decoration: none;
  height: 50px;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const NavLinkBorder = styled(NavLink)`
  border-radius: 40px;
  border: 4px solid #313131;
`;

export const Section = styled.section`
  height: 1200px;
`;

export const SectionQuestion = styled(Section)`
  position: relative;
  background-color: #ffebbe;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  height: 1000px;
`;

export const Header = styled.h1`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderText = styled.div`
  font-size: 260px;
  font-weight: 600;
  color: #313131;
`;

export const HeaderImg = styled.img`
  margin-top: 520px;
  transform: scale(1.6) scaleX(-1) rotate(-35deg);
  position: absolute;
  padding-left: 150px;
  padding-top: 60px;
`;

export const SectionInfo = styled(Section)`
  background-color: #1d1d1d;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoHeader = styled.div`
  font-size: 260px;
  font-weight: 600;
  color: #ffb612;
  position: absolute;
  margin-left: 85px;
  padding-bottom: 640px;
`;

export const InfoText = styled.div`
  padding-top: 100px;
  font-size: 40px;
  font-weight: 200;
  color: #fff;
  width: 40%;
  margin-left: 100px;
`;

export const InfoImg = styled.img`
  border-radius: 500px;
  width: 1095px;
  height: 740px;
  margin-right: 100px;
`;

export const SectionSize = styled(Section)`
  background-color: #1d1d1d;
  overflow: hidden;
  position: relative;
`;

export const SizeHeader = styled.div`
  font-size: 260px;
  font-weight: 600;
  color: #ffb612;
  display: flex;
  justify-content: center;
`;

export const SizeImg = styled.img`
  transform: scale(1.4) scaleX(-1) rotate(-20deg);
  position: absolute;
  padding-bottom: 650px;
  padding-right: 80px;
  z-index: 1;
`;

export const SizeCircle = styled.div`
  background-color: #131313;
  width: 1400px;
  height: 1400px;
  border-radius: 700px;
  margin-left: 825px;
  position: absolute;
  z-index: 0;
`;

export const SizeText = styled.div`
  font-size: 50px;
  font-weight: 200;
  color: #ffd46f;
  width: 40%;
  margin-left: 100px;
  position: absolute;
  margin-left: 1200px;
  margin-top: 300px;
`;

export const SizeLinesBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 1014px;
  height: 600px;
  transform: rotate(20deg);
  margin-left: 90px;
  position: absolute;
  z-index: 3;
  align-items: flex-end;
`;

export const SizeLines = styled.div`
  width: 984px;
  height: 30px;
  display: flex;
  align-items: center;
`;

export const SizeLineBig = styled.div`
  width: 1000px;
  height: 5px;
  background-color: #ffb612;
`;

export const SizeLineSmall = styled.div`
  width: 5px;
  height: 100%;
  background-color: #ffb612;
`;

export const SizeLinesHeight = styled.div`
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction:column;
`;

export const SizeLineBigHeight = styled.div`
  height: 520px;
  width: 5px;
  background-color: #ffb612;
`;

export const SizeLineSmallHeight = styled.div`
  width: 100%;
  height: 5px;
  background-color: #ffb612;
`;

export const SectionWhere = styled(Section)`
  background-color: #ffebbe;
`;
export const SectionSocial = styled(Section)`
  background-color: #ffce58;
`;

export const Footer = styled.footer`
  background-color: #1d1d1d;
  text-align: center;
`;
