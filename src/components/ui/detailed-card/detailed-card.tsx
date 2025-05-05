import { FC } from "react";
import { DetailedCardUIProps } from "./type";
import styles from './detailed-card.module.scss';

export const DetailedCardUI: FC<DetailedCardUIProps> = ({ title, targetImage, bgImgage }) => (
  <article className={styles['detailed-card']}>
    <div className={styles['detailed-card__filter-bg']}></div>
    <div className={styles['detailed-card__wrapper-content']} style={{
      backgroundImage: `url(${bgImgage})`
    }}>
      <header className={styles['detailed-card__header']}>
        <h3>{title}</h3>
      </header>
      <div className={styles['detailed-card__content-img-container']}>
        <img className={styles['detailed-card__content-img']} src={targetImage} alt="" />
      </div>
    </div>
  </article>
);
