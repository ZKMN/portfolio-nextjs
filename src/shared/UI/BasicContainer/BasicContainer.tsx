import React from 'react';
import { Box } from '@mui/material';
import { Container } from '../Container';

export const BasicContainer = ({ 
  black, 
  children 
}: React.PropsWithChildren<{ black?: boolean; }>) => (
  <Box
    sx={{
      position: 'relative',
      py: { xs: 4, md: 6 },
      ...(black && { bgcolor: 'background.paper' }),
    }}
  >
    <Container>
      {children}
    </Container>
  </Box>
);
