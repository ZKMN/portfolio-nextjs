import { Typography, TypographyOwnProps } from '@mui/material';

import styles from './Title.module.scss';

interface ITitle {
  title: string;
  color?: string;
  vairant?: TypographyOwnProps['variant'];
}

export function Title({
  title,
  color = 'text.primary',
  vairant = 'h4',
}: ITitle) {
  return (
    <Typography
      mb="20px"
      variant={vairant}
      color={color}
      fontWeight="bold"
      className={styles.mainTitle}
    >
      {title}
    </Typography>
  );
}
