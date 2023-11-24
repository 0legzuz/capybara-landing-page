import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const cardImages = ['/img/card1.png', '/img/card2.jpg', '/img/card3.jpeg'];

const Colors = {
  lightBackground: '#ffebbe',
  darkBackground: '#1d1d1d',
  gray: '#313131',
  gold: '#ffb612',
  lightGold: '#FFCE58',
  almostBlack: '#131313'
};

const initialCards = cardImages.concat(cardImages).map((image, index) => ({
  id: index,
  image,
  flipped: false,
  matched: false
}));

// Функция для перетасовки карт
export function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

const GameSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.darkBackground};
`;

function vwToPixels(vw) {
  return Math.round(19.2 * vw);
}
const GameHeader = styled.section`
  font-size: 7vw;
  font-weight: 600;
  color: ${Colors.gold};
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1920px) {
    font-size: ${vwToPixels(10.4)}px;
  }
`;

const CardBox = styled.section`
  display: grid;
  gap: 1.3vw;
  padding: 1.3vw;
  grid-template-columns: repeat(auto-fill, minmax(220px, 10fr));
  justify-content: center;
  align-items: start;

  @media (min-width: 1440px) {
    // Это допускает до 6 карточек в строку на экранах шире 1440px
    grid-template-columns: repeat(6, minmax(220px, 10fr));
  }

  @media (max-width: 1439px) and (min-width: 768px) {
    // Это меняет макет до 3 карточек на строку когда ширина экрана от 769px до 1199px
    grid-template-columns: repeat(3, minmax(190px, 10fr));
  }

  @media (max-width: 767px) {
    // Это устанавливает макет до 2 карточек на строку, когда ширина экрана менее 768px
    grid-template-columns: repeat(2, minmax(180px, 10fr));
    gap: 3vw;
    padding: 3vw;
  }
`;

const Card = styled.div`
  height: 350px;
  border-radius: 40px;
  background-color: ${(props) => (props.flipped ? '#fff' : `${Colors.gray}`)};
  background-image: ${(props) =>
    props.flipped ? `url(${props.image})` : 'none'};
  background-size: cover;
  background-position: center;
  cursor: pointer;
  @media (max-width: 1439px) and (min-width: 768px) {
    height: 300px;
  }

  @media (max-width: 767px) {
    height: 250px;
  }
`;

const Button = styled.button`
  padding: 10px;
  margin-bottom: 1.3vw;
  background-color: ${Colors.gray};
  color: ${Colors.gold};
  border: none;
  border-radius: 10px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  width: auto;
`;

const ButtonText = styled.div`
  font-size: 30px;
  font-weight: 400;
  @media (max-width: 767px) {
    font-size: 18.5px;
  }
`;

const Game = () => {
  const [cards, setCards] = useState(initialCards);
  const [flippedCount, setFlippedCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true); // карты неактивны изначально
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [buttonText, setButtonText] = useState('Старт');
  const [buttonActive, setButtonActive] = useState(true); // Новое состояние для активности кнопки

  useEffect(() => {
    shuffleCards(initialCards);

    //Выбрано 2 карты
    if (flippedCount === 2) {
      const [firstCard, secondCard] = cards.filter(
        (card) => card.flipped && !card.matched
      );
      //Если карты одинаковые
      if (firstCard.image === secondCard.image) {
        //
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.image === firstCard.image ? { ...card, matched: true } : card
          )
        );
      } else {
        setIsDisabled(true);
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) => ({ ...card, flipped: false }))
          );
          setIsDisabled(false);
          setButtonActive(true);
        }, 1000);

        setIsGameFinished(true);
        setButtonText('Поражение! Нажмите, чтобы перезапустить');
      }

      setFlippedCount(0);
    }
  }, [cards, flippedCount]);

  useEffect(() => {
    // Этот эффект активируется, когда игра начинается или заканчивается.
    if (cards.every((card) => card.matched)) {
      setIsGameFinished(true);
      setButtonText('Победа! Нажмите, чтобы перезапустить');
      setButtonActive(true);
      setFlippedCount(0);
    }
  }, [cards]);

  //Карта
  const handleCardClick = (cardId) => {
    if (isDisabled || isGameFinished) return;

    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId && !card.matched ? { ...card, flipped: true } : card
      )
    );

    setFlippedCount((prevCount) => prevCount + 1);
  };

  // Кнопка
  const handleButtonClick = () => {
    setButtonActive(false);
    setButtonText('Запоминай карты!');
    if (isGameFinished) {
      setCards(initialCards);
      setIsGameFinished(false);
    }
    setCards((prevCards) =>
      prevCards.map((card) => ({ ...card, flipped: true }))
    );
    setIsDisabled(true);
    setTimeout(() => {
      setCards((prevCards) =>
        prevCards.map((card) => ({ ...card, flipped: false }))
      );
      setIsDisabled(false);
      setButtonActive(false);
      setButtonText('Выбирай одинаковые карты!');
    }, 2000);
  };

  return (
    <GameSection>
      <GameHeader>Найди капибару!</GameHeader>
      <CardBox>
        {cards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            flipped={card.flipped}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </CardBox>
      <Button disabled={!buttonActive} onClick={handleButtonClick}>
        <ButtonText>{buttonText}</ButtonText>
      </Button>
    </GameSection>
  );
};

export default Game;
