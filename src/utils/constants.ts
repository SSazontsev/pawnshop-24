import cardGoldImage from '@images/card-gold.png';
import cardGoldBgImage from '@images/card-gold-bg.png';

import cardCarImage from '@images/card-car.png';
import cardCarBgImage from '@images/card-car-bg.png';

import cardTvImage from '@images/card-tv.png';
import cardTvBgImage from '@images/card-tv-bg.png';

import cardFridgeImage from '@images/card-fridge.png';
import cardFridgeBgImage from '@images/card-fridge-bg.png';

// Настройки карточек с номерами

type CardsNumer = {
	title: string;
	number: string;
	info: string;
};

export const cardsNumbersData: CardsNumer[] = [
	{
		title: 'Работаем без выходных',
		number: '01',
		info: 'Ваши финансы не должны зависеть от дня недели! Оценка и выдача денег в любой день с 8:00 до 23:00.'
	},
	{
		title: 'С нами удобно',
		number: '02',
		info: 'Комфорт с первого шага — у нас нет очередей, вежливые специалисты и понятные условия. Всё честно и без нервов.'
	},
	{
		title: 'С нами быстро',
		number: '03',
		info: 'Минимум документов, мгновенная оценка залога и выдача денег за 15 минут. Без долгих проверок и очередей — только быстрый результат.'
	},
	{
		title: 'С нами надежно',
		number: '04',
		info: 'Гарантируем конфиденциальность ваших персональных данных и сохранность вашего имущества, находящегося в залоге.'
	}
];

// настройка карточек с задним фоном

type CardsSecured = {
	title: string;
	targetImage: string;
	bgImgage: string;
};

export const cardsSecuredInfoData: CardsSecured[] = [
	{
		title: 'Золото',
		targetImage: cardGoldImage,
		bgImgage: cardGoldBgImage
	},
	{
		title: 'Автомобиль',
		targetImage: cardCarImage,
		bgImgage: cardCarBgImage
	},
	{
		title: 'Смартфоны и Ноутбуки',
		targetImage: cardTvImage,
		bgImgage: cardTvBgImage
	},
	{
		title: 'Бытовая техника',
		targetImage: cardFridgeImage,
		bgImgage: cardFridgeBgImage
	}
];

// натсройки footer

type FooterData = {
	contacts: string[];
	at: string;
	description: string;
};

export const footerData: FooterData = {
	contacts: [
		'+7 (999) 123-45-67',
		'info@lambard.ru',
		'Юр. адрес: 662150, Красноярский край, г. Ачинск, ул. Карьерная, зд. 23, помещ. 2-16'
	],
	at: '@2025 000 "Ломбард24". Все права защищены.',
	description:
		'*Предоставление информации не является публичной офертой ООО "Ломбард24" ИНН: 2443053326 ОГРН: 1222400030588'
};
