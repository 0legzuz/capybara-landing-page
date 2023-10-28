import React from 'react';
import * as S from '../../styles/MainPageStyles';
import CurvedText from '../../components/ArcText';

export default function MainPage() {
  return (
    <S.Container>
      <S.Navbar>
        <S.NavLink href="#section1">Кто это</S.NavLink>

        <S.NavLinkBorder href="#section2">Размеры</S.NavLinkBorder>

        <S.NavLink href="#section3">Где живут</S.NavLink>

        <S.NavLink href="#section4">Соц. структура</S.NavLink>
      </S.Navbar>

      <S.SectionQuestion>
        <S.Header>
          <CurvedText
            text="Кто такая"
            radius={140}
            startAngle={-90}
            endAngle={37}
          />
          <S.HeaderText>Капибара</S.HeaderText>
        </S.Header>
        <S.HeaderImg src="/1.png" alt="" />
      </S.SectionQuestion>
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
        <S.InfoImg src="/2.jpg" alt="" />
      </S.SectionInfo>
      <S.SectionSize id="section2">
        <S.SizeHeader>Размеры</S.SizeHeader>
        <S.SizeImg src="/3.png" alt="" />
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
      <S.SectionWhere id="section3"></S.SectionWhere>
      <S.SectionSocial id="section4">
        <article></article>
      </S.SectionSocial>

      <S.Footer></S.Footer>
    </S.Container>
  );
}
