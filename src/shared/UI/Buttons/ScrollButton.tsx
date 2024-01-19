import { ArrowDropDownCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const ScrollButton = ({ anchor, bottom = 0, rotate = 0 }: { rotate?: number; bottom?: number; anchor: string }) => (
  <IconButton
    color="primary"
    sx={{
      position: 'absolute',
      left: '50%',
      bottom,
      transform: 'translate(-50%, -50%)',
    }}
    onClick={() => {
      document.getElementById(anchor)?.scrollIntoView({
        behavior: 'smooth',
      });
    }}
  >
    <ArrowDropDownCircle
      sx={{ fontSize: '60px', transform: `rotate(${rotate}deg)` }}
    />
  </IconButton>
);
