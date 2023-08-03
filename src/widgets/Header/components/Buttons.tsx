import { Download } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';

export function Buttons() {
  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
    >
      <Grid item>
        <Button
          href="https://drive.google.com/file/d/1uk44BO-0_IyZA_ne__DP4Mt4BzG4gPTM/view"
          target="_blank"
          variant="outlined"
          endIcon={<Download />}
        >
          CV
        </Button>
      </Grid>

      <Grid item>
        <Button
          variant="outlined"
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth',
            });
          }}
        >
          Contact
        </Button>
      </Grid>
    </Grid>
  );
}
