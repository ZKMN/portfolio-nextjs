'use client';

import { Header } from '@/widgets/Header';
import { AboutMe } from '@/widgets/AboutMe';
import { Skills } from '@/widgets/Skills';
import { FeaturedProjects } from '@/widgets/FeaturedProjects';
import { CareerTimeline } from '@/widgets/CareerTimeline';
import { Other } from '@/widgets/Other';
import { Footer } from '@/widgets/Footer';

export const Home = () => (
  <>
    <Header />
    <AboutMe />
    <Skills />
    <FeaturedProjects />
    <CareerTimeline />
    <Other />
    <Footer />
  </>
);
