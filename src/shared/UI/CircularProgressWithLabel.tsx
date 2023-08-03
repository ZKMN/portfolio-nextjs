import {
  Box,
  CircularProgress,
  Typography,
} from '@mui/material';

export function CircularProgressWithLabel({ value }: { value: number | string }) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" />

      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          fontSize={50}
          fontWeight="bold"
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
}
