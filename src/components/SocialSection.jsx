import * as S from '../styles/SocialSectionStyles';
import React from 'react';

const SocialSection = () => {
  return (
    <S.SectionSocialBox>
      <S.SectionSocial id="section4">
        <S.SocialHeader>Соц. Структура</S.SocialHeader>
        <S.SocialBox>
          <S.SocialText>
            Капибары - социальные <br />
            животные, живущие группами
            <br /> по 10-20 особей.
            <br />
            <br /> Группы состоят <br />
            из доминирующего самца, <br />
            нескольких взрослых самок <br />
            детёнышей и подчиненных <br />
            самцов.
            <br />
            <br /> 5-10 % капибар, <br />
            преимущественно самцов, <br /> живут в одиночку. Чем засушливей
            <br /> местность тем крупнее группы.
          </S.SocialText>
          <S.SocialImg src="/img/5.jpg" alt="Capybara Family" />
        </S.SocialBox>
      </S.SectionSocial>
    </S.SectionSocialBox>
  );
};
export default SocialSection;
