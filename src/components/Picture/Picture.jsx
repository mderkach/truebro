import React from 'react';
// styles
import styles from './Picture.local';

const Picture = (props) => {
  const { cls, alt, srcset, src, media, ...rest } = props;

  const picname = (path) => path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
  const pathName = (path) => path.substring(0, path.lastIndexOf('/') + 1);
  const ext = (path) => path.substring(path.lastIndexOf('.'));

  return (
    <picture className={cls} {...rest}>
      {!media && (
        <>
          <source
            srcSet={`${pathName(src || srcset)}${picname(src || srcset)}${ext(src || srcset)}`}
          />
          <img
            className={styles.Img}
            src={`${pathName(src || srcset)}${picname(src || srcset)}.webp`}
            alt={alt || ''}
          />
        </>
      )}
      {media && (
        <>
          {media.map((s) => (
            <source
              key={s.media}
              srcSet={`${pathName(s.src)}${picname(s.src)}${ext(s.src)}`}
              media={s.media}
            />
          ))}
          <img
            className={styles.Img}
            src={`${pathName(src)}${picname(src)}.webp`}
            alt={alt || ''}
          />
        </>
      )}
    </picture>
  );
};

export default Picture;
