import React from 'react';
import type { BoxProps } from '@mui/material';
import { Box } from '@mui/material';

import { Container } from '../Container';

interface SectionProps extends Omit<BoxProps, 'component'> {
  children: React.ReactNode;
  id?: string;
  containerClassName?: string;
  fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  fullWidth = false,
  sx,
  ...props
}) => (
    <Box
      component="section"
      id={id}
      sx={{
        py: { xs: 8, md: 12 },
        ...sx,
      }}
      {...props}
    >
      {fullWidth ? (
        children
      ) : (
        <Container>
          {children}
        </Container>
      )}
    </Box>
);
