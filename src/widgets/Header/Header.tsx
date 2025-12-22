'use client';

import React from 'react';
import { Box, Typography, Stack, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Background3D } from '@/widgets/Background3D';
import { Button, Container } from '@/shared/UI';
import { useThemeMode } from '@/shared/providers/ThemeContext';

const stats = [
  { value: '17', label: 'Projects delivered', sublabel: '(11 from scratch)' },
  { value: '6', label: 'Countries', sublabel: 'multi-market systems' },
  { value: '80+', label: 'Landings created', sublabel: 'at 7eminar' },
  { value: '8+', label: 'Years experience' },
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/denis-klymenko/', icon: 'LinkedIn' },
  { name: 'GitHub', href: 'https://github.com/ZKMN', icon: 'GitHub' },
  { name: 'Telegram', href: 'https://t.me/denisklim01', icon: 'Telegram' },
  { name: 'Instagram', href: 'https://www.instagram.com/denisklim01/', icon: 'Instagram' },
];

export const Header = () => {
  const theme = useTheme();
  const { mode } = useThemeMode();

  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1uk44BO-0_IyZA_ne__DP4Mt4BzG4gPTM/view', '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const backgroundGradient = mode === 'dark'
    ? 'linear-gradient(to bottom right, #1a1a1a, #242424, #1f1f1f)'
    : 'linear-gradient(to bottom right, #FAFAFA, #FFFFFF, #F5F5F5)';

  return (
    <Box
      component="header"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: backgroundGradient,
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '100%',
            height: '100%',
            bgcolor: 'secondary.main',
            opacity: mode === 'dark' ? 0.15 : 0.05,
            borderRadius: '50%',
            filter: 'blur(100px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-50%',
            left: '-50%',
            width: '100%',
            height: '100%',
            bgcolor: 'primary.main',
            opacity: mode === 'dark' ? 0.1 : 0.05,
            borderRadius: '50%',
            filter: 'blur(100px)',
          }}
        />
      </Box>

      {/* 3D Background Effect */}
      <Background3D />

      <Container sx={{ position: 'relative', zIndex: 10, py: { xs: 8, md: 10 } }}>
        <Box sx={{ maxWidth: '4xl', mx: 'auto', textAlign: 'center' }}>
          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                fontWeight: 700,
                letterSpacing: '-0.02em',
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                lineHeight: 1.1,
              }}
            >
              Denis Klymenko
            </Typography>
            <Typography
              variant="h2"
              sx={{
                mb: 4,
                fontWeight: 500,
                color: 'text.secondary',
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                lineHeight: 1.3,
              }}
            >
              Senior Fullstack Product Engineer
            </Typography>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.125rem' },
                color: 'text.secondary',
                maxWidth: '3xl',
                mx: 'auto',
                mb: 8,
                lineHeight: 1.8,
                fontWeight: 400,
              }}
            >
              Building scalable SaaS products with AI integrations • 8+ years experience •
              17 projects delivered across enterprise, B2B, and B2C
            </Typography>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                gap: { xs: 2, md: 3 },
                mb: 8,
              }}
            >
              {stats.map((stat, index) => (
                <Box
                  key={index}
                  sx={{
                    bgcolor: mode === 'dark'
                      ? 'rgba(36, 36, 36, 0.8)'
                      : 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4,
                    p: { xs: 2.5, md: 3.5 },
                    border: '1px solid',
                    borderColor: mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(0, 0, 0, 0.08)',
                    boxShadow: mode === 'dark'
                      ? '0 4px 12px rgba(0, 0, 0, 0.3)'
                      : '0 2px 8px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      boxShadow: mode === 'dark'
                        ? '0 8px 24px rgba(0, 112, 243, 0.2)'
                        : '0 4px 16px rgba(0, 0, 0, 0.08)',
                      borderColor: 'secondary.main',
                      bgcolor: mode === 'dark'
                        ? 'rgba(36, 36, 36, 0.95)'
                        : 'rgba(255, 255, 255, 0.9)',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: '2rem', md: '2.75rem' },
                      fontWeight: 700,
                      color: 'secondary.main',
                      mb: 1.5,
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.875rem',
                      color: 'text.primary',
                      fontWeight: 600,
                      mb: 0.5,
                    }}
                  >
                    {stat.label}
                  </Typography>
                  {stat.sublabel && (
                    <Typography
                      sx={{
                        fontSize: '0.75rem',
                        color: 'text.secondary',
                      }}
                    >
                      {stat.sublabel}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              sx={{ mb: 8 }}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={handleDownloadCV}
              >
                Download CV
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </Stack>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Stack
              direction="row"
              spacing={3}
              justifyContent="center"
              flexWrap="wrap"
            >
              {socialLinks.map((link) => (
                <Typography
                  key={link.name}
                  component="a"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'secondary.main',
                      transform: 'translateY(-1px)',
                    },
                  }}
                >
                  {link.name}
                </Typography>
              ))}
            </Stack>
          </motion.div>
        </Box>
      </Container>

      {/* Scroll indicator - вне Container для правильного позиционирования */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: '32px',
          zIndex: 10,
        }}
      >
        <Box
          component="button"
          onClick={() => scrollToSection('about-me')}
          aria-label="Scroll to content"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1.5,
            bgcolor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
            transition: 'all 0.3s ease',
            '&:hover': {
              color: 'secondary.main',
              transform: 'translateY(-4px)',
            },
          }}
        >
          <Typography
            sx={{
              fontSize: '0.813rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Scroll
          </Typography>
          <Box
            component="svg"
            sx={{
              width: 20,
              height: 20,
              animation: 'bounce 2s infinite',
              '@keyframes bounce': {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(8px)' },
              },
            }}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};
