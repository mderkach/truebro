import classNames from 'classnames/bind';
import styles from '../Broker.local';

const classes = classNames.bind(styles);

const H1 = classes({
  h1: true,
  bold: true,
  PageHeader: true,
});

const H2 = classes({
  h2: true,
  medium: true,
  HeadingH2: true,
});

const GridBlock = classes({
  PageBlockGrid: true,
  PageBlock: true,
});

export { H1, H2, GridBlock, classes };
