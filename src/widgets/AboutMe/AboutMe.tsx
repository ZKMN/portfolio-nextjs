import {
  Grid, Typography, useMediaQuery, useTheme,
} from '@mui/material';

import { Container, Title } from '@/shared/UI';

export function AboutMe() {
  const theme = useTheme();

  const lessThanMd = useMediaQuery(theme.breakpoints.down('md'));

  const textBreaks = lessThanMd ? { xs: 12 } : { flex: 1 };
  const imgBreaks = lessThanMd && {
    xs: 12,
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <section id="about-me">
      <Container black>
        <Title title="About Me" />

        <Grid
          container
          spacing={3}
        >
          <Grid item {...imgBreaks}>
            <img
              width={200}
              height={200}
              alt="Denis Klymenko"
              src="https://media.licdn.com/dms/image/C5603AQH_4L0IFOsvUA/profile-displayphoto-shrink_800_800/0/1572770938564?e=1696464000&v=beta&t=hEOllCf5-2q6Obo6DiS-BM_2Ik6XH2CBGK24_GXzqzk"
              style={{ borderRadius: '20px' }}
            />
          </Grid>

          <Grid item {...textBreaks}>

            <Typography mb="10px">
              I have over 6 years of experience. I have 0 expired estimates. I have
              experience working with large companies and large teams.
            </Typography>

            <Typography mb="10px">
              First of all I&apos;m always aimed on fast and best result.
              My background is a mix of SPA/PWA system, B2B and B2C applications.
              I prefer to develop CRM systems, but I have a bagatelle of experience developing different applications.
              In various roles, I regularly have to solve technical problems, troubleshoot coding issues and interact with different teams working on different projects.
              My love for coding drives me within the company. I have been involved in many successful projects developing them from scratch.
              I also have experience in cross-platform mobile app development.
            </Typography>

            <Typography
              mb="10px"
              variant="h6"
              color="text.primary"
              fontWeight="bold"
            >
              A dream stack to start a project:
            </Typography>

            <Typography>
              It should be CRM, design with toolkit based on ANTD lib, less adaptive design, project structure - Feature Sliced Design, React, GraphQl, Zustand.
              But so far I haven&apos;t met any of those...)
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
