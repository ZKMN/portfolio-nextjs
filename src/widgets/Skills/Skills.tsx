'use client';

import { Box, Grid, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Section, Title, Badge } from '@/shared/UI';
import { SkillCard } from './components';
import { SKILLS, SKILL_CATEGORIES } from './consts';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const Skills = () => {
  const skillsByCategory = (Object.keys(SKILL_CATEGORIES) as Array<keyof typeof SKILL_CATEGORIES>).reduce((acc, category) => {
    acc[category] = SKILLS.filter(skill => skill.category === category);
    return acc;
  }, {} as Record<keyof typeof SKILL_CATEGORIES, typeof SKILLS>);

  return (
    <Section
      id="skills"
      fullWidth
      sx={{ bgcolor: 'background.paper', position: 'relative' }}
    >
      {/* Decorative background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'radial-gradient(circle at 20% 50%, rgba(0, 112, 243, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 112, 243, 0.03) 0%, transparent 50%)'
              : 'radial-gradient(circle at 20% 50%, rgba(0, 112, 243, 0.02) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 112, 243, 0.015) 0%, transparent 50%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1600px',
          px: { xs: 2, sm: 3, md: 4, lg: 6 },
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mb: 8 }}>
            <Title title="Skills" variant="h3" />
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
              Technologies and tools I use to build scalable, high-performance applications.
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {(Object.entries(SKILL_CATEGORIES) as Array<[keyof typeof SKILL_CATEGORIES, string]>).map(([category, categoryName], categoryIndex) => {
            const categorySkills = skillsByCategory[category];
            if (!categorySkills || categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category}
                variants={categoryVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
              >
                <Box>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  >
                    <Box sx={{ mb: 5 }}>
                      <Badge
                        variant="primary"
                        sx={{
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          px: 3,
                          py: 1.5,
                          boxShadow: (theme) =>
                            theme.palette.mode === 'dark'
                              ? '0 4px 12px rgba(0, 112, 243, 0.2)'
                              : '0 4px 12px rgba(0, 112, 243, 0.15)',
                        }}
                      >
                        {categoryName}
                      </Badge>
                    </Box>
                  </motion.div>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                  >
                    <Grid
                      container
                      spacing={{ xs: 1, sm: 1.25, md: 1.5 }}
                      sx={{
                        '& > .MuiGrid-item': {
                          display: 'flex',
                        },
                      }}
                    >
                      {categorySkills.map((skill, index) => (
                        <Grid
                          item
                          xs={6}
                          sm={4}
                          md={4}
                          lg={2}
                          key={skill.src}
                        >
                          <SkillCard
                            src={skill.src}
                            title={skill.title}
                            index={index}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </motion.div>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Section>
  );
};
