'use client';

import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Section, Title, Badge, Card } from '@/shared/UI';
import { EXPERIENCE } from '../Expirience/consts/experience';

export const CareerTimeline = () => {
  return (
    <Section id="career" sx={{ bgcolor: 'background.paper' }}>
      <Box sx={{ mb: 6 }}>
        <Title title="Career Timeline" variant="h3" />
      </Box>

      <Box sx={{ position: 'relative' }}>
        {/* Timeline line */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: 0, md: 32 },
            top: 0,
            bottom: 0,
            width: '2px',
            bgcolor: 'secondary.main',
            opacity: 0.2,
            display: { xs: 'none', md: 'block' },
          }}
        />

        <Stack spacing={6}>
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  pl: { xs: 0, md: 10 },
                }}
              >
                {/* Timeline dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: 0, md: 24 },
                    top: 24,
                    width: 16,
                    height: 16,
                    bgcolor: 'secondary.main',
                    borderRadius: '50%',
                    border: '4px solid',
                    borderColor: 'background.paper',
                    boxShadow: 3,
                    display: { xs: 'none', md: 'block' },
                  }}
                />

                <Card hover>
                  <Stack spacing={2}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: { md: 'center' },
                        justifyContent: 'space-between',
                      }}
                    >
                      <Box>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                          {exp.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {exp.time}
                        </Typography>
                      </Box>
                      {exp.companyLink && (
                        <Link
                          href={exp.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: 'secondary.main',
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            mt: { xs: 1, md: 0 },
                            '&:hover': {
                              color: 'secondary.dark',
                            },
                          }}
                        >
                          Company Link →
                        </Link>
                      )}
                    </Box>

                    {exp.stack && (
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                          Stack:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {exp.stack.split(', ').map((tech) => (
                            <Badge key={tech} variant="primary">
                              {tech}
                            </Badge>
                          ))}
                        </Box>
                      </Box>
                    )}

                    {exp.responsibilities && (
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                          Responsibilities:
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          {exp.responsibilities}
                        </Typography>
                      </Box>
                    )}

                    {exp.achievements && (
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                          Achievements:
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                          {exp.achievements}
                        </Typography>
                      </Box>
                    )}

                    {exp.projects && exp.projects.length > 0 && (
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
                          Projects:
                        </Typography>
                        <Stack spacing={1.5}>
                          {exp.projects.map((project) => (
                            <Box
                              key={project.name}
                              sx={{
                                pl: 2,
                                borderLeft: '2px solid',
                                borderColor: 'secondary.main',
                                opacity: 0.2,
                              }}
                            >
                              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                                {project.name}
                                {project.link && (
                                  <Link
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                      ml: 1,
                                      color: 'secondary.main',
                                      fontSize: '0.875rem',
                                      '&:hover': {
                                        color: 'secondary.dark',
                                      },
                                    }}
                                  >
                                    →
                                  </Link>
                                )}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {project.description}
                              </Typography>
                            </Box>
                          ))}
                        </Stack>
                      </Box>
                    )}
                  </Stack>
                </Card>
              </Box>
            </motion.div>
          ))}
        </Stack>
      </Box>
    </Section>
  );
};

