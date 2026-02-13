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

type MobileNavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const SCROLL_DELAY_MS = 300;

const MOBILE_NAV_ITEMS: MobileNavItem[] = [
  {
    label: 'About',
    href: '/#about-me',
    icon: (
      <svg width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    ),
  },
  {
    label: 'Projects',
    href: '/#projects',
    icon: (
      <svg width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
  },
  {
    label: 'AI Agent',
    href: '/projects/ai-agent',
    icon: (
      <svg width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path d="M12 2a4 4 0 014 4v1h2a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h2V6a4 4 0 014-4z" />
        <circle cx="9"
          cy="13"
          r="1.5"
          fill="currentColor"
        />
        <circle cx="15"
          cy="13"
          r="1.5"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'Career',
    href: '/#career',
    icon: (
      <svg width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
  },
  {
    label: 'Contact',
    href: '/#contact',
    icon: (
      <svg width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    ),
  },
];

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

  const renderLink = (href: string, sectionId: string, className: string, children: React.ReactNode): React.ReactElement => {
    if (sectionId) {
      return (
        <a
          key={href}
          href={href}
          className={className}
          onClick={(e) => handleHashClick(e, sectionId)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link key={href} href={href} className={className}>
        {children}
      </Link>
    );
  };

  return (
    <header>
      {/* Desktop: top floating nav */}
      <nav className="nav-float" aria-label="Main navigation">
        {links.map((link) => {
          const isHashLink = link.href.startsWith('/#');
          const sectionId = isHashLink ? link.href.replace('/#', '') : '';

          return renderLink(link.href, sectionId, 'nav-float__link', link.label);
        })}
      </nav>

      {/* Mobile: bottom bar */}
      <nav className="nav-bottom" aria-label="Mobile navigation">
        {MOBILE_NAV_ITEMS.map((item) => {
          const isHashLink = item.href.startsWith('/#');
          const sectionId = isHashLink ? item.href.replace('/#', '') : '';
          const isActive = !isHashLink && pathname === item.href;

          return renderLink(
            item.href,
            sectionId,
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
