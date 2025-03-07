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

  // Sort names by orderNumber to ensure consistent ordering
  const sortedNames = [...namesData].sort((a, b) => a.orderNumber - b.orderNumber)

  // Use the day of year to select a name, cycling through the 99 names
  const index = (dayOfYear % sortedNames.length)
  const selectedName = sortedNames[index]

  // Return the selected name
  return selectedName
}