'use client';

import { AboutMe } from '@/widgets/AboutMe';
import { Achiements } from '@/widgets/Achiements';
import { Expirience } from '@/widgets/Expirience';
import { Other } from '@/widgets/Other';
import { Skills } from '@/widgets/Skills';

export function Home() {
  return (
    <>
      <Achiements />

      <AboutMe />

      <Skills />

      <Expirience />

      <Other />
    </>
  );
}
