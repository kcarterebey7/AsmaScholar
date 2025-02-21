import { Card, CardContent } from "@/components/ui/card";
import type { Name } from "@shared/schema";
import { nameCategories } from "@shared/schema";
import { Link } from "wouter";

interface CategorizedNamesProps {
  names: Name[];
}

export default function CategorizedNames({ names }: CategorizedNamesProps) {
  // Group names by category
  const groupedNames = names.reduce((acc, name) => {
    const category = name.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(name);
    return acc;
  }, {} as Record<string, Name[]>);

  return (
    <div className="space-y-8">
      {Object.entries(nameCategories).map(([key, categoryName]) => {
        const categoryNames = groupedNames[categoryName] || [];
        if (categoryNames.length === 0) return null;

        return (
          <div key={key} className="space-y-4">
            <h2 className="text-2xl font-serif text-[#333333] dark:text-gray-200">{categoryName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categoryNames.map((name) => (
                <Link key={name.id} href={`/name/${name.id}`}>
                  <Card className="cursor-pointer hover:bg-[#F8F9FA] dark:hover:bg-gray-800 transition-colors">
                    <CardContent className="p-4">
                      <div className="text-2xl font-serif mb-2 dark:text-gray-200">{name.arabicName}</div>
                      <div className="text-[#14866D] font-medium">{name.transliteration}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{name.pronunciation}</div>
                      <div className="text-[#333333] dark:text-gray-300">{name.meaning}</div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}