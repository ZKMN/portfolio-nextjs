import { Grid, Paper, Typography } from '@mui/material';

import { BasicSvgIcon } from '@/shared/UI';

export function SkillCard({ src, title }: { src: string; title: string; }) {
  return (
    <Grid item xs={12} md={4}>
      <Paper
        sx={{
          padding: '1rem',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          borderRadius: 5,
        }}
      >
        <BasicSvgIcon
          responsive
          href={`/images/icons/${src}`}
        />

        <Typography>
          {title}
        </Typography>
      </Paper>
    </Grid>
  );
}
