import { FC } from 'react';
import { TNumberCardsUIProps } from './type';
import styles from './number-card.module.scss';

export const NumbersCardsUI: FC<TNumberCardsUIProps> = ({
	title,
	number,
	info
}) => (
	<article className={`${styles['number-card']}`}>
		<div className={styles['number-card__wrapper']}>
			<div className={styles['number-card__container-main-info']}>
				<div className={styles['number-card__container-info']}>
					<h3 className={styles['number-card__title']}>{title}</h3>
					<span className={styles['number-card__description']}>
						{info}
					</span>
				</div>
				<span className={styles['number-card__number']}>{number}</span>
			</div>
		</div>
	</article>
);
