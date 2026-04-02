'use client';

import { AboutMe } from '@/widgets/AboutMe';
import { CareerTimeline } from '@/widgets/CareerTimeline';
import { FeaturedProjects } from '@/widgets/FeaturedProjects';
import { Header } from '@/widgets/Header';
import { Process } from '@/widgets/Process';
import { Skills } from '@/widgets/Skills';

export const Home = () => (
  <>
    <Header />
    <FeaturedProjects />
    <AboutMe />
    <Process />
    <CareerTimeline />
    <Skills />
  </>
);
