import { Card, CardContent } from "@/components/ui/card";
import SearchBox from "@/components/search-box";
import { useQuery } from "@tanstack/react-query";
import type { Name } from "@shared/schema";
import { Link } from "wouter";

export default function Home() {
  const { data: names, isLoading } = useQuery<Name[]>({ 
    queryKey: ['/api/names']
  });

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif mb-6 text-[#333333]">
        The 99 Names of Allah
      </h1>
      
      <SearchBox className="mb-8" />

      {isLoading ? (
        <div>Loading...</div>
      ) : (
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
      )}
    </div>
  );
}
