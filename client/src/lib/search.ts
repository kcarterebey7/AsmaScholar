import Fuse from "fuse.js";
import { useQuery } from "@tanstack/react-query";
import type { Name } from "@shared/schema";

// Define the type for search matches
interface SearchMatch {
  key: string;
  value?: string;
}

// Define the type for search results
export interface SearchResult extends Name {
  matches?: SearchMatch[];
}

const fuseOptions = {
  keys: [
    { name: 'arabicName', weight: 2 },
    { name: 'transliteration', weight: 2 },
    { name: 'meaning', weight: 2 },
    { name: 'description', weight: 1 },
    { name: 'detailedExplanation', weight: 1 },
    { name: 'innerMeaning', weight: 1 },
    { name: 'technique', weight: 1 }
  ],
  threshold: 0.4, // More lenient threshold
  includeMatches: true,
  minMatchCharLength: 2, // Allow shorter matches
  ignoreLocation: true, // Search entire field content
  useExtendedSearch: true, // Enable extended search features
  findAllMatches: true // Find all possible matches
};

export function useSearch(query: string): SearchResult[] {
  const { data: names = [] } = useQuery<Name[]>({ 
    queryKey: ['/api/names']
  });

  if (!query) return [];

  const fuse = new Fuse(names, fuseOptions);
  return fuse.search(query).map(result => ({
    ...result.item,
    matches: result.matches
  }));
}