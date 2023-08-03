'use client';

import { AlternateEmail, LinkedIn } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';

import {
  Container, Form, ScrollButton, Title,
} from '@/shared/UI';

import { FIELDS } from './consts';
import { validationSchema } from './lib';

export function Footer() {
  return (
    <footer id="contact">
      <Container black>
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
              onSubmit={({ subject, message }) => {
                window.location.href = `mailto:klymdenis@gmail.com?subject=${subject}&body=${message}`;
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

      </Container>

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
}
