'use client';

import { AboutMe } from '@/widgets/AboutMe';
import { Expirience } from '@/widgets/Expirience';
import { Other } from '@/widgets/Other';
import { Skills } from '@/widgets/Skills';

export function Home() {
  return (
    <>
      <AboutMe />

      <Skills />

      <Expirience />

      <Other />
    </>
  );
}
