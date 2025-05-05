import { FC } from 'react';
import { FooterUIProps } from './type';
import commonStyles from '../common.module.scss';
import styles from './footer.module.scss';

export const FooterUI: FC<FooterUIProps> = ({ contacts, at, description }) => (
	<footer className={styles.footer}>
		<div
			className={`${commonStyles['common__wrapper-container']} ${styles['footer__wrapper-container']}`}
		>
			<div
				className={`${styles.footer__contacts} ${styles['footer__content-container']}`}
			>
				<h2 id='contacts' className={commonStyles.common__title}>
					Контакты
				</h2>
				<address className={styles['footer__address-container']}>
					<ul className={styles['footer__address-list']}>
						{contacts.map((contact, index) => (
							<li
								key={index}
								className={styles['footer__item-element']}
							>
								{contact}
							</li>
						))}
					</ul>
				</address>
				<ul className={styles['footer__all-info']}>
					<li
						className={`${styles['footer__description-info']} ${styles['footer__item-element']}`}
					>
						{description}
					</li>
					<li className={styles['footer__item-element']}>{at}</li>
				</ul>
			</div>
			<div className={styles['footer__content-container']}>
				<iframe 
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A2c2baff77b7660ba98dcdba63af88cdaa67a696a5a10dc64705f918a595eb7f3&amp;source=constructor"
					width="570"
					height="334"
					className={styles.footer__map}
				></iframe>
			</div>
		</div>
	</footer>
);
