import { useSearch } from "@/lib/search";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import SearchBox from "@/components/search-box";

export default function SearchPage() {
  const [, params] = useLocation();
  const query = new URLSearchParams(params).get("q") || "";
  const results = useSearch(query);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-serif mb-6">Search Results</h1>
      
      <SearchBox className="mb-8" defaultValue={query} />

      <div className="space-y-4">
        {results.map((name) => (
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

        {results.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No results found for "{query}"
          </div>
        )}
      </div>
    </div>
  );
}
