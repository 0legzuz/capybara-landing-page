import React, { useEffect, useState } from 'react';
import * as S from '../../styles/MainPageStyles';
import CurvedText from '../../components/ArcText';

export default function MainPage() {
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
    <S.Container id="top">
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
      <S.SectionQuestionBox>
        <S.SectionQuestion>
          <S.Header>
            <CurvedText text="Кто такая" startAngle={-90} endAngle={37} />
            <S.HeaderText>Капибара</S.HeaderText>
          </S.Header>
          <S.HeaderImg src="/img/1.png" alt="Capybara" />
        </S.SectionQuestion>
      </S.SectionQuestionBox>
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

          <S.InfoImg src="/img/2.jpg" alt="Capybara in the pool" />
        </S.SectionInfo>
      </S.SectionInfoBox>
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
              детёнышей и подчиненных самцов.
              <br />
              <br /> 5-10 % капибар, <br />
              преимущественно самцов, живут
              <br /> в одиночку. Чем засушливей
              <br /> местность <br />
              тем крупнее группы.
            </S.SocialText>
            <S.SocialImg src="/img/5.jpg" alt="Capybara Family" />
          </S.SocialBox>
        </S.SectionSocial>
      </S.SectionSocialBox>

      <S.Footer>
        <S.FooterBox>
          <S.LinkSocial href="https://vk.com/olegzuzzz">
            <S.LinkSvg
              alt="VK"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
            >
              <path d="M25,2C12.318,2,2,12.318,2,25s10.318,23,23,23c12.683,0,23-10.318,23-23S37.683,2,25,2z M34.973,29.535 c2.237,1.986,2.702,2.695,2.778,2.816C38.678,33.821,36.723,34,36.723,34h-4.12c0,0-1.003,0.011-1.86-0.557 c-1.397-0.915-2.86-2.689-3.888-2.381C25.992,31.32,26,32.486,26,33.483C26,33.84,25.693,34,25,34s-0.981,0-1.288,0 c-2.257,0-4.706-0.76-7.149-3.313c-3.456-3.609-6.487-10.879-6.487-10.879s-0.179-0.366,0.016-0.589 c0.221-0.25,0.822-0.218,0.822-0.218L14.909,19c0,0,0.376,0.071,0.646,0.261c0.223,0.156,0.347,0.454,0.347,0.454 s0.671,2.216,1.526,3.629c1.67,2.758,2.447,2.828,3.014,2.531C21.27,25.445,21,22.513,21,22.513s0.037-1.259-0.395-1.82 c-0.333-0.434-0.97-0.665-1.248-0.701c-0.225-0.029,0.151-0.423,0.63-0.648C20.627,19.059,21.498,18.986,23,19 c1.169,0.011,1.506,0.081,1.962,0.186C26.341,19.504,26,20.343,26,23.289c0,0.944-0.13,2.271,0.582,2.711 c0.307,0.19,1.359,0.422,3.231-2.618c0.889-1.442,1.596-3.834,1.596-3.834s0.146-0.263,0.373-0.393 c0.232-0.133,0.225-0.13,0.543-0.13S35.832,19,36.532,19c0.699,0,1.355-0.008,1.468,0.402c0.162,0.589-0.516,2.607-2.234,4.797 C32.943,27.793,32.63,27.457,34.973,29.535z" />
            </S.LinkSvg>
          </S.LinkSocial>

          <S.LinkSocial href="https://t.me/olegzuzzz">
            <S.LinkSvg
              alt="Telegram"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
            >
              <path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z" />
            </S.LinkSvg>
          </S.LinkSocial>
        </S.FooterBox>
        <S.CopyRightText>
          © 2023 Capybara Land. All right reserved.
        </S.CopyRightText>
      </S.Footer>
    </S.Container>
  );
}
