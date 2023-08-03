'use client';

import React, { useState } from 'react';
import { ChevronRight } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';

export function SimpleCollapse({
  open,
  label,
  children,
}: React.PropsWithChildren<{ open?: boolean; label: string }>) {
  const [checked, setChecked] = useState(open);

  const handleChange = () => setChecked((prev) => !prev);

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
          justifyContent="space-between"
          py={2}
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
}
