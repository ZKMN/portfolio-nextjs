/* eslint-disable react/jsx-props-no-spreading */
import {
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';

import { BasicContainer, Title } from '@/shared/UI';

export const AboutMe = () => {
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
      <BasicContainer black>
        <Title title="About Me" />

        <Grid
          container
          spacing={3}
        >
          <Grid item {...imgBreaks}>
            <Image
              width={150}
              height={200}
              alt="Denis Klymenko"
              src="/images/photo.jpg"
              style={{ borderRadius: '20px', objectFit: 'contain' }}
            />
          </Grid>

          <Grid item {...textBreaks}>

            <Typography mb="20px">
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
      </BasicContainer>
    </section>
  );
};
