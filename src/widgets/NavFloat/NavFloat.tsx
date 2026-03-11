'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { EcosystemIcon, EnvelopeIcon, UserIcon } from '@/shared/icons';

type NavLink = {
  label: string;
  href: string;
};

type NavFloatProps = {
  links: NavLink[];
};

type MobileNavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const SCROLL_DELAY_MS = 300;

type ParsedHref = { sectionId: string; isLocal: boolean };

const parseHashHref = (href: string): ParsedHref => {
  if (href.startsWith('/#')) return { sectionId: href.slice(2), isLocal: false };
  if (href.startsWith('#')) return { sectionId: href.slice(1), isLocal: true };

  return { sectionId: '', isLocal: false };
};

const MOBILE_NAV_ITEMS: MobileNavItem[] = [
  { label: 'About', href: '/#about-me', icon: <UserIcon /> },
  { label: 'Ecosystem', href: '/projects/loveepil', icon: <EcosystemIcon /> },
  { label: 'Contact', href: '#contact', icon: <EnvelopeIcon /> },
];

export const NavFloat = ({ links }: NavFloatProps): React.ReactElement => {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';

  const scrollToSection = (sectionId: string): void => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string, isLocal: boolean): void => {
    e.preventDefault();

    if (isLocal || isHomePage) {
      scrollToSection(sectionId);
      return;
    }

    router.push('/');
    setTimeout(() => scrollToSection(sectionId), SCROLL_DELAY_MS);
  };

  const isActiveLink = (href: string): boolean => {
    if (href === '#contact') return false; // Contact never active
    if (href === '/#about-me') return isHomePage; // About is Home page

    return !href.startsWith('/#') && !href.startsWith('#') && pathname === href;
  };

  const renderLink = (href: string, sectionId: string, isLocal: boolean, className: string, children: React.ReactNode): React.ReactElement => {
    const ariaCurrent = isActiveLink(href) ? ('page' as const) : undefined;

    if (sectionId) {
      return (
        <a
          key={href}
          href={href}
          className={className}
          aria-current={ariaCurrent}
          onClick={(e) => handleHashClick(e, sectionId, isLocal)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        key={href}
        href={href}
        className={className}
        aria-current={ariaCurrent}
      >
        {children}
      </Link>
    );
  };

  return (
    <header>
      {/* Desktop: top floating nav */}
      <nav className="nav-float" aria-label="Main navigation">
        {links.map((link) => {
          const { sectionId, isLocal } = parseHashHref(link.href);
          const isActive = isActiveLink(link.href);

          return renderLink(
            link.href,
            sectionId,
            isLocal,
            `nav-float__link${isActive ? ' nav-float__link--active' : ''}`,
            link.label,
          );
        })}
      </nav>

      {/* Mobile: bottom bar */}
      <nav className="nav-bottom" aria-label="Mobile navigation">
        {MOBILE_NAV_ITEMS.map((item) => {
          const { sectionId, isLocal } = parseHashHref(item.href);
          const isActive = isActiveLink(item.href);

          return renderLink(
            item.href,
            sectionId,
            isLocal,
            `nav-bottom__item${isActive ? ' nav-bottom__item--active' : ''}`,
            <>
              <span className="nav-bottom__icon">{item.icon}</span>
              <span className="nav-bottom__label">{item.label}</span>
            </>,
          );
        })}
      </nav>
    </header>
  );
};
