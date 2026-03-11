'use client';

import { useCallback, useEffect, useRef,useState } from 'react';
import { motion } from 'framer-motion';

import { ScrambleTitle } from '@/shared/components/ScrambleTitle';

import { SkillCard } from './components';
import { SKILLS } from './consts';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export const Skills = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleExpand = useCallback((index: number | null) => {
    setExpandedIndex(index);
  }, []);

  // Collapse on outside tap (mobile)
  useEffect(() => {
    const handleOutsideTap = (e: PointerEvent) => {
      if (
        expandedIndex !== null &&
        containerRef.current &&
        e.target instanceof Node &&
        !containerRef.current.contains(e.target)
      ) {
        setExpandedIndex(null);
      }
    };
    document.addEventListener('pointerdown', handleOutsideTap);
    return () => document.removeEventListener('pointerdown', handleOutsideTap);
  }, [expandedIndex]);

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-primary)', position: 'relative' }}>
      {/* Subtle radial glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at center, rgba(30, 30, 40, 0.4) 0%, transparent 60%)',
        pointerEvents: 'none',
      }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ScrambleTitle text="Skills" />
          <p className="section-subtitle">
            Technologies and tools I use to build scalable, high-performance applications.
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.3 } },
          }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, 35px)',
            gap: 6,
            marginTop: 'var(--space-10)',
            justifyContent: 'center',
            padding: 'var(--space-4) 0',
          }}
        >
          {SKILLS.map((skill, index) => (
            <SkillCard
              key={skill.title}
              src={skill.src}
              title={skill.title}
              index={index}
              isExpanded={expandedIndex === index}
              onExpand={handleExpand}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
