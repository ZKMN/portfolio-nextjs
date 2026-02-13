'use client';

import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

const Template = ({ children }: React.PropsWithChildren): React.ReactElement => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.35, ease: EASE }}
  >
    {children}
  </motion.div>
);

export default Template;
