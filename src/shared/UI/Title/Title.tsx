import { Typography, TypographyOwnProps } from '@mui/material';

import styles from './Title.module.scss';

interface ITitle {
  title: string;
  color?: string;
  vairant?: TypographyOwnProps['variant'];
}

export const Title = ({
  title,
  color = 'text.primary',
  vairant = 'h4',
}: ITitle) => (
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
