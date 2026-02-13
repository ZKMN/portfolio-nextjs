'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

type NavLink = {
  label: string;
  href: string;
};

type NavFloatProps = {
  links: NavLink[];
};

const SCROLL_DELAY_MS = 300;

export const NavFloat = ({ links }: NavFloatProps): React.ReactElement => {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';

  const scrollToSection = (sectionId: string): void => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string): void => {
    e.preventDefault();

    if (isHomePage) {
      scrollToSection(sectionId);
      return;
    }

    router.push('/');
    setTimeout(() => scrollToSection(sectionId), SCROLL_DELAY_MS);
  };

  return (
    <nav className="nav-float" aria-label="Main navigation">
      {links.map((link) => {
        const isHashLink = link.href.startsWith('/#');
        const sectionId = isHashLink ? link.href.replace('/#', '') : '';

        if (isHashLink) {
          return (
            <a
              key={link.href}
              href={link.href}
              className="nav-float__link"
              onClick={(e) => handleHashClick(e, sectionId)}
            >
              {link.label}
            </a>
          );
        }

        return (
          <Link key={link.href} href={link.href} className="nav-float__link">
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};
