import Fuse from "fuse.js";
import { useQuery } from "@tanstack/react-query";
import type { Name } from "@shared/schema";

const fuseOptions = {
  keys: ["arabicName", "transliteration", "meaning", "description"],
  threshold: 0.3,
};

export function useSearch(query: string) {
  const { data: names = [] } = useQuery<Name[]>({ 
    queryKey: ['/api/names']
  });

  if (!query) return names;

  const fuse = new Fuse(names, fuseOptions);
  return fuse.search(query).map(result => result.item);
}
