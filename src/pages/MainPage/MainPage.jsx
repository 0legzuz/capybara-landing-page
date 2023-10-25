import React from 'react';
import * as S from '../../styles/MainPageStyles'

export default function MainPage() {
  return (
    <S.Container>
      <S.Navbar>
        <S.Logo href="/">Logo</S.Logo>
        <S.NavLinks>
          <S.NavLink>
            <a href="#section1">Section 1</a>
          </S.NavLink>
          <S.NavLink>
            <a href="#section2">Section 2</a>
          </S.NavLink>
          <S.NavLink>
            <a href="#section3">Section 3</a>
          </S.NavLink>
          <S.NavLink>
            <a href="#section4">Section 4</a>
          </S.NavLink>
          <S.NavLink>
            <a href="#section5">Section 5</a>
          </S.NavLink>
        </S.NavLinks>
      </S.Navbar>

      <S.Section id="section1" bgColor="#f8f8f8" textColor="#333">
        <h2>Section 1</h2>
        <p>Content for section 1</p>
      </S.Section>

      <S.Section id="section2" bgColor="#333" textColor="#fff">
        <h2>Section 2</h2>
        <p>Content for section 2</p>
      </S.Section>

      <S.Section id="section3" bgColor="#f8f8f8" textColor="#333">
        <h2>Section 3</h2>
        <p>Content for section 3</p>
      </S.Section>

      <S.Section id="section4" bgColor="#333" textColor="#fff">
        <h2>Section 4</h2>
        <p>Content for section 4</p>
      </S.Section>

      <S.Section id="section5" bgColor="#f8f8f8" textColor="#333">
        <h2>Section 5</h2>
        <p>Content for section 5</p>
      </S.Section>

      <S.Footer>
        <p>Footer content</p>
      </S.Footer>
    </S.Container>
  );
}

