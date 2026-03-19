'use client';

import { AboutMe } from '@/widgets/AboutMe';
import { CareerTimeline } from '@/widgets/CareerTimeline';
import { FeaturedProjects } from '@/widgets/FeaturedProjects';
import { Header } from '@/widgets/Header';
import { Other } from '@/widgets/Other';
import { Process } from '@/widgets/Process';
import { Skills } from '@/widgets/Skills';

export const Home = () => (
  <>
    <Header />
    <AboutMe />
    <Process />
    <Skills />
    <FeaturedProjects />
    <CareerTimeline />
    <Other />
  </>
);
