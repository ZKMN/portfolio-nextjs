'use client';

import { AlternateEmail, LinkedIn } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';
import { logEvent } from 'firebase/analytics';

import {
  BasicContainer,
  Form,
  ScrollButton,
  Title,
} from '@/shared/UI';

import { FIELDS } from './consts';
import { validationSchema } from './lib';

import { fbAnalytics } from '@/firebase.config';

export const Footer = () => (
  <footer id="contact">
    <BasicContainer black>
      <Title title="Get in Touch" />

      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <Form
            fields={FIELDS}
            validationSchema={validationSchema}
            initialValues={{
              subject: '',
              message: '',
            }}
            onSubmit={({ subject, message, email }) => {
              window.location.href = `mailto:klymdenis@gmail.com?subject=${subject}&body=${message}`;
              logEvent(fbAnalytics, 'CLICK_ON_SEND_MESSAGE', { email, message, subject });
            }}
          />
        </Grid>

        <Grid item xs={12} md={7}>
          <Grid container>
            <Grid item xs={12} mb="10px">
              <Typography>
                Fastest answer:
              </Typography>
            </Grid>

            <Grid
              container
              alignItems="center"
            >
              <Button
                variant="text"
                href="mailto:klymdenis@gmail.com"
                startIcon={<AlternateEmail color="primary" />}
                onClick={() => {
                  logEvent(fbAnalytics, 'CLICK_ON_EMAIL');
                }}
              >
                klymdenis@gmail.com
              </Button>
            </Grid>

            <Grid
              container
              alignItems="center"
            >
              <Button
                variant="text"
                href="https://www.linkedin.com/in/denis-klymenko/"
                target="_blank"
                startIcon={<LinkedIn color="primary" />}
                onClick={() => {
                  logEvent(fbAnalytics, 'CLICK_ON_LINKEDIN');
                }}
              >
                Linkedin
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <ScrollButton
        anchor="head"
        bottom={-70}
        rotate={180}
      />

    </BasicContainer>

    <Grid
      container
      sx={{ bgcolor: '#171717' }}
      justifyContent="center"
      py={3}
    >
      <Typography sx={{ color: '#3f4040' }}>
        © Copyright 2023 Denis Klymenko
      </Typography>
    </Grid>
  </footer>
);
