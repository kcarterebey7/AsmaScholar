import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { namesData } from "@shared/data"
import type { Name } from "@shared/schema"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getNameByOrder(orderNumber: number): Name | undefined {
  return namesData.find(name => name.orderNumber === orderNumber);
}

export function getNameOfTheDay(): Name {
  // Get today's date
  const today = new Date();

  // Create a date string in YYYY-MM-DD format to ensure it changes daily
  const dateString = today.toISOString().split('T')[0];

  // Create a number from the date string that will be consistent for the whole day
  const dateNum = dateString.split('-').join('');

  // Use the date number to select a name, cycling through the names array
  const index = parseInt(dateNum) % namesData.length;

  // Return the name for today
  return namesData[index] || namesData[0];
}