import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { namesData } from "@shared/data"
import type { Name } from "@shared/schema"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getNameOfTheDay(): Name {
  // Get today's date and use it to determine which name to show
  const today = new Date()
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24))

  // Use the day of year to select a name, cycling through the 99 names
  const index = (dayOfYear % namesData.length)
  return namesData[index]
}