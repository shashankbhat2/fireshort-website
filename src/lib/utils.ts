import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function calculateRotation(index) {
  return index % 2 === 0 ? 5 * index : -5 * index;
}

