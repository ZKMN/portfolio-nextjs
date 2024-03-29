'use client';

import React, { useState } from 'react';
import { ChevronRight } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';

export const BasicCollapse = ({
  open,
  label,
  onClick,
  children,
}: React.PropsWithChildren<{ open?: boolean; onClick?: () => void; label: string; }>) => {
  const [checked, setChecked] = useState(open);

  const handleChange = () => {
    onClick?.();
    setChecked((prev) => !prev);
  };

  return (
    <>
      <Box
        onClick={handleChange}
        sx={{
          cursor: 'pointer',
          borderBottom: '1px solid #FFFFFF',
        }}
      >
        <Grid
          container
          py={2}
          justifyContent="space-between"
        >
          <Typography>
            {label}
          </Typography>

          <ChevronRight
            sx={{
              color: 'text.primary',
              transform: checked ? 'rotate(90deg)' : '',
            }}
          />
        </Grid>
      </Box>

      <Box
        sx={{
          '& > :not(style)': {
            width: '100%',
            bgcolor: 'background.default',
          },
        }}
      >
        <div>
          <Collapse in={checked}>
            <div style={{ padding: '1rem' }}>
              {children}
            </div>
          </Collapse>
        </div>
      </Box>
    </>
  );
};
