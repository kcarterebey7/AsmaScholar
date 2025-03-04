import type { Name } from "@shared/schema";

interface NameRelationship {
  name: Name;
  relatedTo: Name[];
  similarCategory: Name[];
}

export function classifyNames(names: Name[]): NameRelationship[] {
  return names.map(name => {
    // Find directly related names
    const relatedNames = names.filter(n => 
      name.relatedNames.includes(n.transliteration)
    );

    // Find names in the same category
    const similarCategoryNames = names.filter(n => 
      n.category === name.category && n.id !== name.id
    );

    return {
      name,
      relatedTo: relatedNames,
      similarCategory: similarCategoryNames
    };
  });
}

export function findRelatedNameGroups(names: Name[]): Name[][] {
  const groups: Set<Name>[] = [];
  const processed = new Set<number>();

  names.forEach(name => {
    if (processed.has(name.id)) return;

    const group = new Set<Name>();
    const queue = [name];

    while (queue.length > 0) {
      const current = queue.shift()!;
      if (processed.has(current.id)) continue;

      processed.add(current.id);
      group.add(current);

      // Add related names to queue
      const relatedNames = names.filter(n => 
        current.relatedNames.includes(n.transliteration) ||
        n.relatedNames.includes(current.transliteration)
      );

      queue.push(...relatedNames);
    }

    if (group.size > 1) {
      groups.push(group);
    }
  });

  return groups.map(group => Array.from(group));
}
