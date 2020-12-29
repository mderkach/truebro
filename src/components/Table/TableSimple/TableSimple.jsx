import React from 'react';

import styles from './TableSimple.local';

const TableRow = (props) => {
  const { header, description, isLink } = props;

  return (
    <>
      <div className={styles.TableRow}>
        <p className="text-regular">{header}</p>
        {!isLink ? (
          <p className="text-regular medium">{description}</p>
        ) : (
          <p className="text-regular medium">
            <a href={`https://${description}`} target="_blank" rel="nofollow noreferrer">
              {description}
            </a>
          </p>
        )}
      </div>
    </>
  );
};

const TableSimple = (props) => {
  const { heading, rows, ...rest } = props;
  return (
    <>
      <div className={styles.TableBody} {...rest}>
        {heading && <h3 className="h3 medium">{heading}</h3>}
        {rows &&
          rows.map((row) => (
            <TableRow
              key={row.header}
              header={row.header}
              description={row.description}
              isLink={!!row.isLink}
            />
          ))}
      </div>
    </>
  );
};

export default TableSimple;
