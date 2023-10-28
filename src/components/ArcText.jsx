import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LetterOnCurve = styled.div`
  font-size: 120px;
  font-weight: 600;
  margin-left:20px;
  color: #313131;
  position: absolute;
  text-align: center;
  transform-origin: bottom center;
  transform: ${({ angle, radius }) =>
    `rotate(${angle}deg) translateY(-${radius}px)`};
`;


const CurvedText = ({ text, radius, startAngle, endAngle, spacing = 0 }) => {
  const totalDegree = endAngle - startAngle;
  const degree = totalDegree / ((text.length - 1) + (spacing * (text.length - 1)));

  return (
    <div style={{ height: `${2 * radius}px`, position: 'relative' }}>
      {Array.from(text).map((char, i) => (
        <LetterOnCurve key={i} angle={startAngle + i * (degree + spacing)} radius={radius}>
          {char}
        </LetterOnCurve>
      ))}
    </div>
  );
};

CurvedText.propTypes = {
  text: PropTypes.string.isRequired,
  radius: PropTypes.number.isRequired,
  startAngle: PropTypes.number.isRequired,
  endAngle: PropTypes.number.isRequired,
  spacing: PropTypes.number // new prop
};

export default CurvedText;
