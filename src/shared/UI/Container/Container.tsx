import React from 'react';
import type { ContainerProps as MuiContainerProps } from '@mui/material';
import { Container as MuiContainer } from '@mui/material';

interface ContainerProps extends MuiContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  sx,
  ...props
}) => (
    <MuiContainer
      maxWidth="xl"
      sx={{
        px: { xs: 2, sm: 3, lg: 4 },
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiContainer>
);
