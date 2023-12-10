import * as S from '../styles/WhereSectionStyles';
import React from 'react';

const WhereSection = () => {
  return (
    <S.SectionWhereBox>
      <S.SectionWhere id="section3">
        <S.WhereHeader>Где живет?</S.WhereHeader>
        <S.WhereBox>
          <S.WhereImg src="/img/4.png" alt="America" />
          <S.WhereText>
            Капибара встречается по берегам
            <br /> разнообразных водоёмов в тропических
            <br /> и умеренных частях Центральной
            <br /> и Южной Америки, восточнее Анд
            <br /> - от Панамы до Уругвая и северо-востока
            <br /> Аргентины. <br />
            <br />
            Основными факторами, ограничивающими
            <br /> распространение, являются температура
            <br /> воздуха и воды. Капибары встречаются
            <br /> в горах до высоты 1300 м над уровнем
            <br /> моря.
          </S.WhereText>
        </S.WhereBox>
      </S.SectionWhere>
    </S.SectionWhereBox>
  );
};
export default WhereSection;
