'use client';

import { motion } from 'framer-motion';

import { ScrambleTitle } from '@/shared/components/ScrambleTitle';

import { SkillCard } from './components';
import { SKILL_CATEGORIES,SKILLS } from './consts';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export const Skills = () => {
  const skillsByCategory = (Object.keys(SKILL_CATEGORIES) as Array<keyof typeof SKILL_CATEGORIES>).reduce((acc, category) => {
    acc[category] = SKILLS.filter(skill => skill.category === category);
    return acc;
  }, {} as Record<keyof typeof SKILL_CATEGORIES, typeof SKILLS>);

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-primary)', position: 'relative' }}>
      {/* Subtle radial glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '600px',
        background: 'radial-gradient(circle, var(--accent-subtle) 0%, transparent 70%)',
        filter: 'blur(100px)',
        pointerEvents: 'none',
      }}
      />

      <div className="container container--wide" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div variants={fadeUp}
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
        >
          <ScrambleTitle text="Skills" />
          <p className="section-subtitle">
            Technologies and tools I use to build scalable, high-performance applications.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)', marginTop: 'var(--space-12)' }}>
          {(Object.entries(SKILL_CATEGORIES) as Array<[keyof typeof SKILL_CATEGORIES, string]>).map(([category, categoryName]) => {
            const categorySkills = skillsByCategory[category];
            if (!categorySkills || categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
              >
                <span className="badge badge--accent"
style={{
  marginBottom: 'var(--space-6)',
  display: 'inline-block',
  fontSize: 'var(--text-sm)',
  padding: 'var(--space-2) var(--space-4)',
}}
                >
                  {categoryName}
                </span>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
                  }}
                >
                  <div className="skills-grid">
                    {categorySkills.map((skill, index) => (
                      <div key={skill.title} className="skill-item">
                        <SkillCard
                          key={skill.title}
                          src={skill.src}
                          title={skill.title}
                          index={index}
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <style jsx>{`
          .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            gap: var(--space-3);
          }
          .skill-item {
            height: 100%;
          }

          @media (max-width: 768px) {
            .skills-grid {
              display: flex;
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              gap: var(--space-3);
              padding-bottom: var(--space-4);
              margin-right: -16px; /* Bleed to edge */
              padding-right: 16px;
              /* Hide scrollbar for cleaner look, or style it */
              scrollbar-width: none; 
            }
            .skills-grid::-webkit-scrollbar {
              display: none;
            }
            .skill-item {
              flex: 0 0 auto;
              width: 130px;
              scroll-snap-align: start;
            }
          }
        `}</style>
      </div>
    </section>
  );
};
