import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { namesData } from "@shared/data"
import type { Name } from "@shared/schema"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getNameOfTheDay(): Name {
  // Return name #73 for today
  return namesData.find(name => name.orderNumber === 73) || namesData[0]
}