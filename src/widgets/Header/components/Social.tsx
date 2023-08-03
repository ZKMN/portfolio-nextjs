import { Grid, IconButton } from '@mui/material';

import { SOCIAL } from '../consts';

export function Social() {
  return (
    <Grid
      container
      mb="20px"
      justifyContent="center"
    >
      {SOCIAL.map(({ href, icon: Icon }) => (
        <Grid
          item
          key={href}
        >
          <IconButton
            href={href}
            color="primary"
            target="_blank"
          >
            <Icon />
          </IconButton>
        </Grid>
      ))}
    </Grid>
  );
}
