import { FC } from 'react';
import { TNumberCardsProps } from './type';
import { NumbersCardsUI } from '@ui';

export const NumbersCard: FC<TNumberCardsProps> = ({ title, number, info }) => (
	<NumbersCardsUI title={title} number={number} info={info} />
);
