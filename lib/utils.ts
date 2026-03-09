import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}
