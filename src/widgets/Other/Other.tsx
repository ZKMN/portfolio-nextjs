import { Grid, Typography } from '@mui/material';

import { BasicContainer, Title } from '@/shared/UI';

import { OTHER } from './consts';

export const Other = () => (
  <section>
    <BasicContainer>
      <Title
        title="Other Information"
        color="text.secondary"
      />

      {OTHER.map(({ title, description }, index, arr) => (
        <div key={title}>
          <Typography
            variant="h5"
            fontWeight="bold"
          >
            {title}
          </Typography>

          <Grid container mb={index !== arr.length ? '20px' : 0}>
            <Typography color="text.secondary">
              {description}
            </Typography>
          </Grid>
        </div>
      ))}
    </BasicContainer>
  </section>
);
