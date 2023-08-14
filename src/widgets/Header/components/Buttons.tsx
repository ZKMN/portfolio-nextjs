import { Download } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import { logEvent } from 'firebase/analytics';

import { fbAnalytics } from '@/firebase.config';

export function Buttons() {
  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
    >
      <Grid item>
        <Button
          size="large"
          href="https://drive.google.com/file/d/1uk44BO-0_IyZA_ne__DP4Mt4BzG4gPTM/view"
          target="_blank"
          variant="outlined"
          endIcon={<Download />}
          onClick={() => {
            logEvent(fbAnalytics, 'CLICK_ON_CV');
          }}
        >
          CV
        </Button>
      </Grid>

      <Grid item>
        <Button
          size="large"
          variant="outlined"
          onClick={() => {
            logEvent(fbAnalytics, 'CLICK_ON_CONTACT');
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
