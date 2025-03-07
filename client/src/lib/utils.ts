import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { namesData } from "@shared/data"
import type { Name } from "@shared/schema"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getNameOfTheDay(): Name {
  // Return Al-Mumit (orderNumber: 67)
  return namesData.find(name => name.orderNumber === 67) || namesData[0]
}