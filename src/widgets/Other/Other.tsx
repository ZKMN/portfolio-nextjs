'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section, Title } from '@/shared/UI';
import { OTHER } from './consts';

export const Other = () => (
  <Section id="other" className="bg-background-dark">
    <div className="mb-12">
      <Title title="Other Information" variant="h3" />
    </div>

    <div className="space-y-8">
      {OTHER.map(({ title, description }, index) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <h3 className="text-2xl font-bold text-primary mb-4">
            {title}
          </h3>
          <p className="text-secondary leading-relaxed">
            {description}
          </p>
        </motion.div>
      ))}
    </div>
  </Section>
);
