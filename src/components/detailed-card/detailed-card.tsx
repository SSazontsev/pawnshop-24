import { FC } from 'react';
import { DetailedCardUI } from '../ui';
import { DetailedCardProps } from './type';

export const DetailedCard: FC<DetailedCardProps> = ({
	title,
	targetImage,
	bgImgage
}) => (
	<DetailedCardUI
		title={title}
		targetImage={targetImage}
		bgImgage={bgImgage}
	/>
);
