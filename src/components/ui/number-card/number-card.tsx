import { FC } from "react";
import { TNumberCardsUIProps } from './type';
import styles from './number-card.module.scss';

export const NumbersCardsUI: FC<TNumberCardsUIProps> = ({ 
  title, 
  number, 
  list,
}) => (
  <article
    className={`${styles['number-card']}`}
  >
    <div className={styles['number-card__wrapper']}>
      <div className={styles['number-card__container-main-info']}>
        <h3 className={styles['number-card__title']}>{title}</h3>
        <span className={styles['number-card__number']}>{number}</span>
      </div>
      <div>
        <ul className={styles['number-card__list']}>
          {list.map((item, i) => (
            <li key={i} className={styles['number-card__item-list']}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </article>
);