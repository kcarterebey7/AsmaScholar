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
  // Return name #73 for today
  return getNameByOrder(73) || namesData[0];
}