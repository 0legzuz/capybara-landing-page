import * as S from '../styles/InfoSectionStyles';
import React from 'react';

const InfoSection = () => {
  return (
    <S.SectionInfoBox>
      <S.SectionInfo id="section1">
        <S.InfoHeader>Капибара</S.InfoHeader>
        <S.InfoText>
          Полуводное травоядное
          <br /> млекопитающее
          <br /> из подсемейства
          <br /> водосвинковых, один
          <br /> из двух ныне существующих <br />
          видов рода водосвинки.
          <br /> Капибара - самый крупный
          <br /> среди современных грызунов.
        </S.InfoText>
        <S.InfoImgBox>
          <S.InfoImg src="/img/2.jpg" alt="Capybara in the pool" />
        </S.InfoImgBox>
      </S.SectionInfo>
    </S.SectionInfoBox>
  );
};
export default InfoSection;
