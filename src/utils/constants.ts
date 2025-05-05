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

type FooterData = {
  phoneNumber: string;
  address: string;
  at: string;
  description: string;
}

export const footerData: FooterData = {
  phoneNumber: '+7 (999) 123-45-67',
  address: 'Юр. адрес: 662150, Красноярский край, г. Ачинск, ул. Карьерная, зд. 23, помещ. 2-16',
  at: '@2025 000 "Ломбард24". Все права защищены.',
  description: '*Предоставление информации не является публичной офертой ООО "Ломбард24" ИНН: 2443053326 ОГРН: 1222400030588',
}
