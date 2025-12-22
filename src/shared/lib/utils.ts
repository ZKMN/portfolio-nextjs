// Utility function for conditional class names (using clsx only, no Tailwind)
import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

