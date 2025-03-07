import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import type { Name } from "@shared/schema";
import { Link } from "wouter";
import { NameOfTheDay } from "@/components/name-of-the-day";
import { getNameOfTheDay } from "@/lib/utils";

export default function Home() {
  const nameOfTheDay = getNameOfTheDay();
  const { data: names, isLoading } = useQuery<Name[]>({ 
    queryKey: ['/api/names']
  });

  return (
    <div className="flex-1 overflow-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-serif mb-2">
            99 Names of the Body Beautiful
          </h1>
          <div className="text-lg md:text-xl text-muted-foreground italic">
            (in the light of Moorish Science)
          </div>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <NameOfTheDay name={nameOfTheDay} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {isLoading ? (
            <div>Loading names...</div>
          ) : (
            names?.map((name) => (
              <Link key={name.id} href={`/name/${name.id}`}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="text-xl font-arabic">{name.arabicName}</div>
                    <div className="text-primary">{name.transliteration}</div>
                    <div className="text-sm text-muted-foreground">{name.meaning}</div>
                  </CardContent>
                </Card>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}