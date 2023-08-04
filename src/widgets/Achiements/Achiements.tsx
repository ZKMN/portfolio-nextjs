import { Grid, Typography } from '@mui/material';

import { Container, Title } from '@/shared/UI';

import { AchievmentsCard } from './conponents';
import { ACHIEVES } from './consts';

export function Achiements() {
  return (
    <section>
      <Container>
        <Title
          title="Achievments"
          color="text.secondary"
        />

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Grid container alignItems="center" height="100%">
              <Typography
                fontSize={18}
                color="text.secondary"
              >
                I have over 6 years of experience. I have no expired estimates. I have
                experience working with large companies and large teams.
              </Typography>
            </Grid>

          </Grid>

          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              {ACHIEVES.map(({ value, description }) => (
                <Grid item xs={12} md={6} key={description}>
                  <AchievmentsCard
                    value={value}
                    description={description}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </section>
  );
}
