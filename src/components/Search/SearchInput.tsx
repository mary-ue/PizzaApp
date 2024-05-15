import { forwardRef } from 'react';
import styles from './SearchInput.module.css';
import cn from 'classnames';
import { SearchProps } from './SearchInput.props';

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input(
  { isValid = true, className, ...props },
  ref
) {
  return (
    <div className={styles['input-wrapper']}>
      <input
        ref={ref}
        className={cn(styles['input'], className, {
          [styles['invalid']]: isValid
        })}
        {...props}
      />
      <img className={styles.icon} src='/search-icon.svg' alt='иконка лупы' />
    </div>
  );
});

export default Search;
