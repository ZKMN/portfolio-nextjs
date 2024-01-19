import { Box, Paper, Typography } from '@mui/material';

import { CircularProgressWithLabel } from '@/shared/UI';

export const AchievmentsCard = ({ value, description }: { value: string | number; description: string; }) => (
  <Paper
    sx={{
      height: '100%',
      padding: '1rem',
      borderRadius: 8,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Box sx={{ margin: '0 auto' }}>
      <CircularProgressWithLabel value={value} />
    </Box>

    <Typography
      mt="15px"
      textAlign="center"
      fontSize={18}
    >
      {description}
    </Typography>
  </Paper>
);
