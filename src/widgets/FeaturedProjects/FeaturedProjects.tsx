'use client';

import React from 'react';
import { Box, Grid, Typography, List, ListItem, Link, IconButton } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Section, Title, Card, Badge } from '@/shared/UI';

const featuredProjects = [
  {
    name: 'Ioveepil Multi-domain SaaS',
    role: 'Senior Product Engineer E2E',
    period: '2024 - Present',
    description: 'Led end-to-end development of multi-domain SaaS ecosystem for European beauty chain',
    myContributions: [
      'Built custom analytics platform with cross-domain session stitching and multi-touch attribution',
      'Implemented AI-powered semantic search using OpenAI vector embeddings',
      'Architected multi-domain i18n system (5 countries, 6 domains, 6 languages, 4 currencies)',
      'Optimized Core Web Vitals to achieve LCP < 2.5s and INP < 200ms',
    ],
    clientResults: [
      '50K+ monthly active users on the platform',
      '96% Real User Experience Score (mobile)',
    ],
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'OpenAI', 'Stripe', 'Vercel'],
    link: null,
  },
  {
    name: 'Custom Analytics Platform',
    role: 'Senior Product Engineer',
    period: '2024',
    description: 'Enterprise analytics solution for Ioveepil with advanced attribution',
    myContributions: [
      'Architected cross-domain session stitching mechanism',
      'Implemented multi-touch attribution models',
      'Built high-throughput event processing (1000+ events/batch)',
      'Integrated real-time Vercel Drains for performance monitoring',
    ],
    clientResults: [],
    tech: ['Next.js', 'PostgreSQL', 'Vercel Analytics', 'TypeScript'],
    link: null,
  },
];

export const FeaturedProjects = () => {
  return (
    <Section id="projects" sx={{ bgcolor: 'background.paper' }}>
      <Box sx={{ mb: 6 }}>
        <Title title="Featured Projects" variant="h3" />
        <Typography
          sx={{
            fontSize: '1.125rem',
            color: 'text.secondary',
            mt: 2,
            maxWidth: '4xl',
            lineHeight: 1.8,
          }}
        >
          A selection of projects showcasing my technical contributions to scalable SaaS platforms,
          AI integrations, and high-performance web applications. Each project highlights my specific
          role and the results achieved for clients.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {featuredProjects.map((project, index) => (
          <Grid item xs={12} md={6} key={project.name}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 4 }}>
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 1.5 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, lineHeight: 1.3 }}>
                      {project.name}
                    </Typography>
                    {project.link && (
                      <IconButton
                        component={Link}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                          ml: 1,
                          color: 'secondary.main',
                          '&:hover': {
                            color: 'secondary.dark',
                            bgcolor: 'rgba(0, 112, 243, 0.08)',
                          },
                        }}
                      >
                        <OpenInNew />
                      </IconButton>
                    )}
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'secondary.main',
                      fontWeight: 600,
                      mb: 1,
                      fontSize: '0.875rem',
                    }}
                  >
                    {project.role} • {project.period}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {project.description}
                  </Typography>
                </Box>

                <Box sx={{ mb: 3, flexGrow: 1 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                      mb: 1.5,
                      color: 'text.primary',
                      fontSize: '0.875rem',
                    }}
                  >
                    MY CONTRIBUTIONS:
                  </Typography>
                  <List dense sx={{ pl: 0 }}>
                    {project.myContributions.map((contribution, i) => (
                      <ListItem key={i} sx={{ pl: 0, pb: 1, alignItems: 'flex-start' }}>
                        <Typography component="span" sx={{ color: 'secondary.main', mr: 1.5, fontSize: '1.125rem' }}>
                          •
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          {contribution}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Box>

                {project.clientResults && project.clientResults.length > 0 && (
                  <Box sx={{ mb: 3, bgcolor: 'success.light', p: 2.5, borderRadius: 3 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 600,
                        mb: 1.5,
                        color: 'success.dark',
                        fontSize: '0.875rem',
                      }}
                    >
                      CLIENT RESULTS:
                    </Typography>
                    <List dense sx={{ pl: 0 }}>
                      {project.clientResults.map((result, i) => (
                        <ListItem key={i} sx={{ pl: 0, pb: 0.5, alignItems: 'flex-start' }}>
                          <Typography component="span" sx={{ color: 'success.main', mr: 1.5, fontWeight: 700 }}>
                            ✓
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'success.dark', fontWeight: 500, lineHeight: 1.7 }}>
                            {result}
                          </Typography>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )}

                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                      mb: 1.5,
                      fontSize: '0.875rem',
                    }}
                  >
                    TECHNOLOGIES:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </Box>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};
