'use client';

import React from 'react';
import { Box, Grid, Typography, List, ListItem, Chip } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Section, Title, Badge } from '@/shared/UI';

export const AboutMe = () => {
  return (
    <Section id="about-me" sx={{ bgcolor: 'background.paper' }}>
      <Box sx={{ mb: 6 }}>
        <Title title="About Me" variant="h3" />
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.125rem',
            color: 'text.secondary',
            maxWidth: '3xl',
            lineHeight: 1.8,
            mt: 2,
          }}
        >
          I'm a Full-Stack Engineer specializing in high-performance, scalable web applications for enterprise and SaaS products. 8+ years building with modern stack.
        </Typography>
      </Box>

      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
        <Grid item xs={12} md={5}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Image
                width={240}
                height={300}
                alt="Denis Klymenko"
                src="/images/photo.jpg"
                style={{
                  borderRadius: '20px',
                  objectFit: 'cover',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                }}
                priority
              />
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={7}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {/* Key Achievements */}
              <Box>
                <Badge
                  variant="primary"
                  sx={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    px: 2,
                    py: 1,
                    mb: 2,
                  }}
                >
                  Key Achievements
                </Badge>
                <List sx={{ pl: 0 }}>
                  {[
                    'Successfully delivered 17 projects (11 from scratch), including multi-domain SaaS platforms serving 6+ European markets with real-time analytics and AI-powered features.',
                    'Diverse Project Experience: Enterprise, B2B/B2C, and SaaS across team sizes from solo to 15 engineers.',
                    'Full-Cycle Development: E2E ownership — architecture, FE/BE integration, testing, CI/CD, deployment.',
                  ].map((item, index) => (
                    <ListItem key={index} sx={{ pl: 0, pb: 2, alignItems: 'flex-start' }}>
                      <Typography component="span" sx={{ color: 'secondary.main', mr: 1.5, fontSize: '1.25rem' }}>
                        🔹
                      </Typography>
                      <Typography sx={{ lineHeight: 1.7, fontSize: '1rem' }}>
                        {item}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>

              {/* Value I Bring */}
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2.5 }}>
                  Value I bring:
                </Typography>
                <List sx={{ pl: 0 }}>
                  {[
                    'Product-first thinking, not just code shipping',
                    'From idea to production — solo or in sync with teams',
                    'Architecting for scale: multi-domain, multi-currency, i18n-ready systems',
                    'AI integrations: OpenAI embeddings, semantic search, LLM automation',
                  ].map((item, index) => (
                    <ListItem key={index} sx={{ pl: 0, pb: 1.5, alignItems: 'flex-start' }}>
                      <Typography component="span" sx={{ color: 'secondary.main', mr: 1.5, fontSize: '1.25rem' }}>
                        •
                      </Typography>
                      <Typography sx={{ lineHeight: 1.7, fontSize: '1rem' }}>
                        {item}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>

              {/* Recent Highlights */}
              <Box>
                <Badge
                  variant="primary"
                  sx={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    px: 2,
                    py: 1,
                    mb: 2,
                  }}
                >
                  Recent highlights
                </Badge>
                <List sx={{ pl: 0 }}>
                  {[
                    'Custom analytics platform with cross-domain session stitching & multi-touch attribution',
                    'AI-powered semantic search using OpenAI vector embeddings',
                    'Multi-domain i18n architecture (5 countries, 6 domains, 6 languages, 4 currencies, GDPR-compliant)',
                    '🚀Improved mobile Core Web Vitals: LCP < 2.5s, INP < 200ms',
                  ].map((item, index) => (
                    <ListItem key={index} sx={{ pl: 0, pb: 1.5, alignItems: 'flex-start' }}>
                      <Typography component="span" sx={{ color: 'secondary.main', mr: 1.5, fontSize: '1.25rem' }}>
                        •
                      </Typography>
                      <Typography sx={{ lineHeight: 1.7, fontSize: '1rem' }}>
                        {item}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>

              {/* Core Competencies */}
              <Box
                sx={{
                  pt: 2,
                  borderTop: '2px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  Core Competencies:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                  {[
                    'AI/LLM Integrations (OpenAI, embeddings, semantic search)',
                    'Frontend Architecture (Next.js SSR/SSG, React 19, MUI)',
                    'Backend & Data (Prisma, PostgreSQL, REST/webhooks)',
                    'Analytics & Attribution (custom tracking, Vercel Drains)',
                    'Multi-domain & i18n Systems',
                    'Cloud & DevOps (Vercel, AWS, Firebase)',
                    'Testing & Quality (Unit, TypeScript strict, ESLint, Husky)',
                    'Security & Compliance (GDPR, RBAC, NextAuth, CSP, Clickjack, XSS)',
                  ].map((competency, index) => (
                    <Chip
                      key={index}
                      label={competency}
                      sx={{
                        fontSize: '0.875rem',
                        height: 'auto',
                        py: 1,
                        '& .MuiChip-label': {
                          whiteSpace: 'normal',
                          px: 1.5,
                        },
                      }}
                      variant="outlined"
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Section>
  );
};
