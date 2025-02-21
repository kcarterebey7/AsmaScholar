import { Card, CardContent } from "@/components/ui/card";
import SearchBox from "@/components/search-box";
import { useQuery } from "@tanstack/react-query";
import type { Name } from "@shared/schema";
import { Link } from "wouter";
import { useState } from "react";
import { Grid2X2, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategorizedNames from "@/components/categorized-names";

export default function Home() {
  const [viewMode, setViewMode] = useState<'grid' | 'categorized'>('grid');

  const { data: names, isLoading } = useQuery<Name[]>({ 
    queryKey: ['/api/names']
  });

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-serif text-[#333333]">
          The 99 Names of Allah
        </h1>
        <div className="flex gap-2">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('grid')}
          >
            <Grid2X2 className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'categorized' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('categorized')}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <SearchBox className="mb-8" />

      {isLoading ? (
        <div>Loading...</div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {names?.map((name) => (
            <Link key={name.id} href={`/name/${name.id}`}>
              <Card className="cursor-pointer hover:bg-[#F8F9FA] transition-colors">
                <CardContent className="p-4">
                  <div className="text-2xl font-serif mb-2">{name.arabicName}</div>
                  <div className="text-[#14866D] font-medium">{name.transliteration}</div>
                  <div className="text-[#333333]">{name.meaning}</div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <CategorizedNames names={names || []} />
      )}
    </div>
  );
}