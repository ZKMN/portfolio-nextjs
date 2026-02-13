// Utility function for conditional class names (using clsx only, no Tailwind)
import { type ClassValue,clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
