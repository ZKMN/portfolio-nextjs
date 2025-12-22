interface ScrollButtonProps {
  anchor: string;
  bottom?: number;
  rotate?: number;
}

export const ScrollButton = ({ anchor, bottom = 0, rotate = 0 }: ScrollButtonProps) => (
  <button
    className="absolute left-1/2 transform -translate-x-1/2 text-primary hover:text-accent transition-colors duration-200"
    style={{ bottom: `${bottom}px` }}
    onClick={() => {
      document.getElementById(anchor)?.scrollIntoView({
        behavior: 'smooth',
      });
    }}
    aria-label={`Scroll to ${anchor}`}
  >
    <svg
      className="w-15 h-15 animate-bounce"
      style={{ transform: `rotate(${rotate}deg)` }}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  </button>
);
