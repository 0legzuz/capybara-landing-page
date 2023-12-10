import React from 'react';
import * as S from '../../styles/AllComponentsStyles';
import QuestionSection from '../../components/QuestionSection';
import Game from '../../components/GameSection';
import Footer from '../../components/Footer';
import SocialSection from '../../components/SocialSection';
import WhereSection from '../../components/WhereSection';
import SizeSection from '../../components/SizeSection';
import InfoSection from '../../components/InfoSection';
import NavBar from '../../components/NavBar';

export default function MainPage() {
  return (
    <S.Container id="top">
      <NavBar></NavBar>
      <QuestionSection></QuestionSection>
      <InfoSection></InfoSection>
      <SizeSection></SizeSection>
      <WhereSection></WhereSection>
      <SocialSection></SocialSection>
      <Game></Game>
      <Footer></Footer>
    </S.Container>
  );
}
