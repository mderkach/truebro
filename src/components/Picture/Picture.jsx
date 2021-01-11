import React from 'react';

const Picture = (props) => {
  const { cls, alt, srcset, src, media, ...rest } = props;

  let picname;
  if (srcset) picname = srcset.substring(srcset.lastIndexOf('/') + 1, srcset.lastIndexOf('.'));

  return (
    <picture className={cls} {...rest}>
      {!media && (
        <>
          <source srcSet={src || srcset} />
          <img src={src || `./assets/img/${picname}.webp`} alt={alt || ''} />
        </>
      )}
      {media && (
        <>
          {media.map((s) => (
            <source key={s.media} srcSet={s.src} media={s.media} />
          ))}
          <img src={src} alt={alt || ''} />
        </>
      )}
    </picture>
  );
};

export default Picture;
