import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function vwToPixels(vw) {
  const pixels = Math.round(19.2 * vw);
  return Math.min(pixels, 140);
}
const radius = 7.3;

const LetterOnCurve = styled.div`
  font-size: 6.25vw;
  font-weight: 700;
  margin-left: 1.04vw;
  color: #313131;
  position: absolute;
  text-align: center;
  transform-origin: bottom center;
  transform: ${({ angle }) => `rotate(${angle}deg) translateY(-${radius}vw)`};

  @media screen and (min-width: 1920px) {
    font-size: ${vwToPixels(6.25)}px;
    margin-left: ${vwToPixels(1.04)}px;
    transform: ${({ angle }) =>
      `rotate(${angle}deg) translateY(-${vwToPixels(radius)}px)`};
  }
  @media screen and (max-width: 425px) {
    font-size: 8vw;
    font-weight: 400;
  }
`;

const LettersBox = styled.div`
  height: ${2 * radius}vw;
  position: relative;
  max-height: 280px;
  @media screen and (max-width: 425px) {
    margin-right: 67vw;
  }
`;

const CurvedText = ({ text, startAngle, endAngle, spacing = 0 }) => {
  const totalDegree = endAngle - startAngle;
  const degree = totalDegree / (text.length - 1 + spacing * (text.length - 1));

  return (
    <LettersBox>
      {Array.from(text).map((char, i) => (
        <LetterOnCurve key={i} angle={startAngle + i * (degree + spacing)}>
          {char}
        </LetterOnCurve>
      ))}
    </LettersBox>
  );
};

CurvedText.propTypes = {
  text: PropTypes.string.isRequired,
  startAngle: PropTypes.number.isRequired,
  endAngle: PropTypes.number.isRequired,
  spacing: PropTypes.number // new prop
};

export default CurvedText;
