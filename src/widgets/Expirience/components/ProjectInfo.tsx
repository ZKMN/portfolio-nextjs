import { Button, Grid, Typography } from '@mui/material';

export function ProjectInfo({ name, link, description }: { name: string; link?: string; description: string }) {
  return (
    <Grid container pl="15px" mb="10px">
      <Grid item xs={12}>
        <Grid container alignItems="center">
          <Typography
            color="text.secondary"
            fontWeight="bold"
          >
            {name}
          </Typography>

          {link && (
            <Button
              size="small"
              href={link}
              target="_blank"
              variant="text"
              sx={{
                color: 'rgb(144, 202, 249)',
                textTransform: 'none',
              }}
            >
              Link
            </Button>
          )}
        </Grid>
      </Grid>

      <Grid>
        <Typography color="text.secondary">
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
}
