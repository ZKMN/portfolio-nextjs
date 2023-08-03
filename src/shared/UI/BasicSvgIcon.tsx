import { SvgIcon } from '@mui/material';

export function BasicSvgIcon({ responsive, href }: { href: string; responsive?: boolean; }) {
  return (
    <SvgIcon
      viewBox="0 0 100 100"
      sx={(theme) => ({
        width: 100,
        height: 100,
        [Number(responsive) && theme.breakpoints.down('md')]: {
          width: 50,
          height: 50,
        },
      })}
    >
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <image style={{ width: '100%' }} href={href} />
      </svg>
    </SvgIcon>
  );
}
