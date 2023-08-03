import { Grid, Typography } from '@mui/material';

export function Name() {
  return (
    <Grid
      container
      mb="20px"
      justifyContent="center"
    >
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
      >
        <Typography
          variant="h1"
          sx={(theme) => ({
            fontWeight: 'bold',
            color: 'text.primary',
            [theme.breakpoints.down('md')]: {
              fontSize: '2rem',
            },
          })}
        >
          I&apos;m Denis Klymenko.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
      >
        <Typography
          variant="h4"
          sx={(theme) => ({
            color: 'text.primary',
            [theme.breakpoints.down('md')]: {
              fontSize: '1.5rem',
            },
          })}
        >
          Frontend Developer
        </Typography>
      </Grid>
    </Grid>
  );
}
