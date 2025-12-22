'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Card } from '@/shared/UI';

interface SkillCardProps {
  src: string;
  title: string;
  index?: number;
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: index * 0.05,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

export const SkillCard = ({ src, title, index = 0 }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      custom={index}
      style={{ height: '100%', width: '100%' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card
        hover={false}
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: 4, sm: 5, md: 6 },
          minHeight: { xs: 180, sm: 200, md: 220 },
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          background: isDark
            ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.95) 100%)',
          border: '1px solid',
          borderColor: isDark
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(0, 0, 0, 0.08)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isHovered
              ? isDark
                ? 'radial-gradient(circle at center, rgba(0, 112, 243, 0.15) 0%, transparent 70%)'
                : 'radial-gradient(circle at center, rgba(0, 112, 243, 0.08) 0%, transparent 70%)'
              : 'transparent',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
            zIndex: 0,
          },
          '&:hover': {
            transform: 'translateY(-8px) scale(1.02)',
            borderColor: 'secondary.main',
            boxShadow: isDark
              ? '0 12px 32px rgba(0, 112, 243, 0.3), 0 0 0 1px rgba(0, 112, 243, 0.2)'
              : '0 12px 32px rgba(0, 112, 243, 0.2), 0 0 0 1px rgba(0, 112, 243, 0.15)',
            '& .skill-icon': {
              transform: 'translateY(-4px) scale(1.1)',
            },
            '& .skill-title': {
              color: 'secondary.main',
            },
          },
        }}
      >
        <Box
          className="skill-icon"
          sx={{
            mb: 3.5,
            width: { xs: 72, sm: 84, md: 96 },
            height: { xs: 72, sm: 84, md: 96 },
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            filter: isHovered
              ? 'drop-shadow(0 4px 12px rgba(0, 112, 243, 0.3))'
              : 'none',
          }}
        >
          <motion.div
            animate={{
              rotate: isHovered ? [0, -5, 5, -5, 0] : 0,
            }}
            transition={{
              duration: 0.6,
              ease: 'easeInOut',
            }}
            style={{ width: '100%', height: '100%', position: 'relative' }}
          >
            <Image
              src={`/images/icons/${src}`}
              alt={title}
              fill
              style={{
                objectFit: 'contain',
              }}
              sizes="96px"
              unoptimized
            />
          </motion.div>
        </Box>
        <Typography
          className="skill-title"
          variant="body2"
          sx={{
            textAlign: 'center',
            fontWeight: 600,
            color: 'text.primary',
            fontSize: { xs: '0.938rem', sm: '1rem', md: '1.063rem' },
            lineHeight: 1.5,
            zIndex: 1,
            position: 'relative',
            transition: 'color 0.3s ease',
          }}
        >
          {title}
        </Typography>

        {/* Shine effect on hover */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
            transition: 'left 0.6s ease',
            zIndex: 2,
            pointerEvents: 'none',
            ...(isHovered && {
              left: '100%',
            }),
          }}
        />
      </Card>
    </motion.div>
  );
};
