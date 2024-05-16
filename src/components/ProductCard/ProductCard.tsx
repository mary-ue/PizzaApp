import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';
import { ProductCardProps } from './ProductCard.props';

export const ProductCard = (props: ProductCardProps) => {
  return (
    <Link className={styles.link} to={'/'}>
      <div className={styles.card}>
        <div
          className={styles.head}
          style={{ backgroundImage: `url('${props.image}')` }}
        >
          <div className={styles.price}>
            {props.price}&nbsp;
            <span className={styles.currency}>₽</span>
          </div>
          <button className={styles['add-to-cart']}>
            <img src="/cart-button-icon.svg" alt="Добавить в корзину" />
          </button>
          <div className={styles.rating}>
            {props.rating}
            <img src="/star-icon.svg" alt="Иконка звезды" />
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.description}>{props.description}</div>
        </div>
      </div>
    </Link>
  );
};