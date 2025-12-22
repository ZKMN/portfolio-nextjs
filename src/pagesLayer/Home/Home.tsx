'use client';

import { AboutMe } from '@/widgets/AboutMe';
import { CareerTimeline } from '@/widgets/CareerTimeline';
import { FeaturedProjects } from '@/widgets/FeaturedProjects';
import { Other } from '@/widgets/Other';
import { Skills } from '@/widgets/Skills';

export const Home = () => (
  <>
    <AboutMe />

    <Skills />

    <FeaturedProjects />

    <CareerTimeline />

    <Other />
  </>
);
