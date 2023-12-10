import * as S from '../styles/SizeSectionStyles';
import React from 'react';

const SizeSection = () => {
  return (
    <S.SectionSizeBox>
      <S.SectionSize id="section2">
        <S.SizeHeader>Размеры</S.SizeHeader>

        <S.SizeCircle></S.SizeCircle>
        <S.SizeText>
          Длина тела взрослой <br />
          капибары достигает 1 <br />
          -1,35 м, высота
          <br /> в холке - 50-60 см.
          <br /> Самцы весят 34-63 кг, <br />а самки - 36 - 65,5 кг. <br />
          Самки, как правило,
          <br /> крупнее самцов.
        </S.SizeText>
        <S.SizeLinesBox>
          <S.SizeImg src="/img/3.png" alt="Capybara" />
          <S.SizeLinesHeight>
            <S.SizeLineSmallHeight></S.SizeLineSmallHeight>
            <S.SizeLineBigHeight></S.SizeLineBigHeight>
            <S.SizeLineSmallHeight></S.SizeLineSmallHeight>
          </S.SizeLinesHeight>
          <S.SizeLines>
            <S.SizeLineSmall></S.SizeLineSmall>
            <S.SizeLineBig></S.SizeLineBig>
            <S.SizeLineSmall></S.SizeLineSmall>
          </S.SizeLines>
        </S.SizeLinesBox>
      </S.SectionSize>
    </S.SectionSizeBox>
  );
};
export default SizeSection;
