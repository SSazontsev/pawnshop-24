import { FC } from 'react';
import { cardsSecuredInfoData } from '@utils-constants';
import commonStyles from '../common.module.scss';
import styles from './secured-loans.module.scss';
import { DetailedCard } from 'src/components/detailed-card';

export const SecuredLoansUI: FC = () => (
	<section>
		<div
			className={`${styles['secured-loans__wrapper-content']} ${commonStyles['common__wrapper-container']}`}
		>
			<h2 id='secured-loans' className={commonStyles.common__title}>
				Займы под залог
			</h2>
			<div className={styles['secured-loans__cards-container']}>
				{cardsSecuredInfoData.map((item, index) => (
					<DetailedCard
						key={index}
						title={item.title}
						targetImage={item.targetImage}
						bgImgage={item.bgImgage}
					/>
				))}
			</div>
		</div>
	</section>
);
