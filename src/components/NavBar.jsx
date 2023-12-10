import * as S from '../styles/NavBarStyles';

import React, { useEffect, useState } from 'react';

const NavBar = () => {
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setButtonVisible(true);
      } else {
        setButtonVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <S.Button
        onClick={scrollToTop}
        style={{ transform: buttonVisible ? 'scale(1)' : 'scale(0)' }}
      >
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 67 67"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path d="M17.284,42.279c0.479,0,0.959-0.171,1.342-0.519l15.487-14.037L48.15,43.209c0.395,0.436,0.938,0.657,1.482,0.657 c0.479,0,0.959-0.171,1.342-0.519c0.818-0.741,0.881-2.006,0.139-2.824L35.882,23.721c-0.408-0.451-0.977-0.664-1.541-0.647 c-0.56-0.071-1.145,0.084-1.596,0.493L15.94,38.798c-0.818,0.741-0.881,2.006-0.139,2.824 C16.196,42.057,16.739,42.279,17.284,42.279z" />
              <path d="M33.457,66.915c18.449,0,33.458-15.009,33.458-33.458C66.915,15.009,51.906,0,33.457,0C15.009,0,0,15.009,0,33.457 C0,51.906,15.009,66.915,33.457,66.915z M33.457,4C49.7,4,62.915,17.215,62.915,33.457c0,16.243-13.215,29.458-29.458,29.458 C17.215,62.915,4,49.7,4,33.457C4,17.215,17.215,4,33.457,4z" />
            </g>
          </g>
        </svg>
      </S.Button>
      <S.Navbar>
        <S.NavLink href="#section1">Кто это</S.NavLink>

        <S.NavLinkBorder href="#section2">Размеры</S.NavLinkBorder>

        <S.NavLink href="#section3">Где живут</S.NavLink>

        <S.NavLink href="#section4">Соц. структура</S.NavLink>
      </S.Navbar>
    </>
  );
};
export default NavBar;
