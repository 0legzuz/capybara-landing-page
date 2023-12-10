import CurvedText from '../components/ArcText';
import * as S from '../styles/QuestionSectionStyles';
import React from 'react';

const QuestionSection = () => {
  return (
    <S.SectionQuestionBox>
      <S.SectionQuestion>
        <S.Header>
          <CurvedText text="Кто такая" startAngle={-90} endAngle={37} />
          <S.HeaderText>Капибара</S.HeaderText>
        </S.Header>
        <S.HeaderImg src="/img/1.png" alt="Capybara" />
      </S.SectionQuestion>
    </S.SectionQuestionBox>
  );
};
export default QuestionSection;
