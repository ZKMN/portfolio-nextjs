'use client';

import { ScrollButton } from '@/shared/UI';

import { Buttons, Name, Social } from './components';

import styles from './Header.module.scss';

export function Header() {
  return (
    <header id="head">
      <section className={styles.headSection}>
        <Name />

        <Social />

        <Buttons />

        <ScrollButton anchor="about-me" />
      </section>
    </header>
  );
}
