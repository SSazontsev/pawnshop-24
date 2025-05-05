import { FC } from 'react';
import { TLineSeparationProps } from './type';
import styles from './line-separation.module.scss';

export const LineSeparationUI: FC<TLineSeparationProps> = ({
	positionFlag,
	claases
}) => (
	<span
		className={`${styles['line-separation']} ${
			positionFlag
				? styles['line-separation_up']
				: styles['line-separation_botton']
		}
    ${claases}`}
	/>
);
