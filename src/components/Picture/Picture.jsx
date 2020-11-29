import React from 'react';

const Picture = (props) => {
  const { cls, alt, srcset, src, ...rest } = props;

  let picname;
  if (srcset) picname = srcset.substring(srcset.lastIndexOf('/') + 1, srcset.lastIndexOf('.'));

  return (
    <picture className={cls} {...rest}>
      <source srcSet={src || srcset} />
      <img src={src || `./assets/img/${picname}.webp`} alt={alt} />
    </picture>
  );
};

export default Picture;
