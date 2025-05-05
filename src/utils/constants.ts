import cardGoldImage from '@images/card-gold.png';
import cardGoldBgImage from '@images/card-gold-bg.png';

import cardCarImage from '@images/card-car.png';
import cardCarBgImage from '@images/card-car-bg.png';

import cardTvImage from '@images/card-tv.png';
import cardTvBgImage from '@images/card-tv-bg.png';

import cardFridgeImage from '@images/card-fridge.png';
import cardFridgeBgImage from '@images/card-fridge-bg.png';

type CardsNumer = {
  title: string;
  number: string;
  list: string[];
}

export const cardsNumbersData: CardsNumer[] = [
  {
    title: 'Работаем 24/7',
    number: '01',
    list: [
      'быстрое оформление займа',
      'Выдача любой суммы за кратчайший срок',
    ]
  },
  {
    title: 'С нами быстро',
    number: '02',
    list: [
      'быстрое оформление займа',
      'Выдача любой суммы за кратчайший срок',
    ]
  },
  {
    title: 'С нами выгодно',
    number: '03',
    list: [
      'быстрое оформление займа',
      'Выдача любой суммы за кратчайший срок',
    ]
  },
  {
    title: 'С нами удобно',
    number: '04',
    list: [
      'быстрое оформление займа',
      'Выдача любой суммы за кратчайший срок',
    ]
  }
]

type CardsSecured = {
  title: string;
  targetImage: string;
  bgImgage: string;
}

export const cardsSecuredInfoData: CardsSecured[] = [
  {
    title: 'Золото',
    targetImage: cardGoldImage,
    bgImgage: cardGoldBgImage,
  },
  {
    title: 'Автомобиль',
    targetImage: cardCarImage,
    bgImgage: cardCarBgImage,
  },
  {
    title: 'Смартфоны и Ноутбуки',
    targetImage: cardTvImage,
    bgImgage: cardTvBgImage,
  },
  {
    title: 'Бытовая техника',
    targetImage: cardFridgeImage,
    bgImgage: cardFridgeBgImage,
  }
]
