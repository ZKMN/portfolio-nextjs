import { Box, Grid } from '@mui/material';

export function Container({ black, children }: React.PropsWithChildren<{ black?: boolean; }>) {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{ position: 'relative', bgcolor: black ? 'background.paper' : '' }}
    >
      <Box
        width="100%"
        maxWidth="1024px"
        sx={(theme) => ({
          padding: '4rem 0',
          [theme.breakpoints.down('md')]: {
            padding: '2rem 1rem',
          },
        })}
      >
        {children}
      </Box>
    </Grid>
  );
}
