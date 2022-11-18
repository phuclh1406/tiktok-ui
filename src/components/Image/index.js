import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './image.module.scss';

console.log(images);

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(images.noImage);
  };

  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallback || src}
      {...props}
      onError={handleError}
    />
  );
});

export default Image;
