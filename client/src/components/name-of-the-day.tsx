import { Card, CardContent } from "@/components/ui/card";
import type { Name } from "@shared/schema";
import { Link } from "wouter";

interface NameOfTheDayProps {
  name: Name;
}

export function NameOfTheDay({ name }: NameOfTheDayProps) {
  return (
    <Card className="bg-background border-2">
      <CardContent className="p-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-center mb-4">Name of the Day</h2>

          <div className="text-center">
            <div className="text-3xl font-arabic mb-2">{name.arabicName}</div>
            <div className="text-xl font-medium text-primary">{name.transliteration}</div>
            <div className="text-sm text-muted-foreground">{name.pronunciation}</div>
          </div>

          <div className="text-center mt-4">
            <div className="font-medium">{name.meaning}</div>
            <p className="text-sm text-muted-foreground mt-2">{name.description}</p>
          </div>

          <div className="flex justify-center mt-4">
            <Link href={`/name/${name.orderNumber}`} className="text-primary hover:underline">
              Learn More →
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}