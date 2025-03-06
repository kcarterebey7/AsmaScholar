import { Card, CardContent } from "@/components/ui/card";
import type { Name } from "@shared/schema";

interface QuranVersesProps {
  name: Name;
}

export function QuranVerses({ name }: QuranVersesProps) {
  if (!name.quranVerses || name.quranVerses.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-serif text-[#333333] dark:text-gray-200">
        Quranic References
      </h3>
      <div className="space-y-4">
        {name.quranVerses.map((verse, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="mb-3 text-right">
                <div className="text-xl font-arabic leading-loose">
                  {verse.arabicText}
                </div>
              </div>
              <div className="mb-2 text-[#14866D] dark:text-[#1A9E82]">
                {verse.verse}
              </div>
              <div className="text-sm text-muted-foreground mb-2">
                Reference: {verse.reference}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 italic">
                {verse.explanation}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
