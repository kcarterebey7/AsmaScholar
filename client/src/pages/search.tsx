import { useSearch, type SearchResult } from "@/lib/search";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import SearchBox from "@/components/search-box";
import { useState, useEffect } from "react";

export default function SearchPage() {
  const [location] = useLocation();
  const getQueryFromUrl = () => new URLSearchParams(window.location.search).get("q") || "";
  const [query, setQuery] = useState(getQueryFromUrl());
  const results = useSearch(query);

  // Update search state when URL changes
  useEffect(() => {
    const urlQuery = getQueryFromUrl();
    if (urlQuery !== query) {
      setQuery(urlQuery);
    }
  }, [location]);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-serif mb-6">Search Results</h1>

      <SearchBox 
        className="mb-8" 
        defaultValue={query}
        onChange={setQuery}
      />

      <div className="space-y-4">
        {results.map((result: SearchResult) => (
          <Link key={result.id} href={`/name/${result.id}?q=${encodeURIComponent(query)}`}>
            <Card className="cursor-pointer hover:bg-[#F8F9FA] dark:hover:bg-gray-800 transition-colors">
              <CardContent className="p-4">
                <div className="text-2xl font-serif mb-2">{result.arabicName}</div>
                <div className="text-[#14866D] font-medium mb-2">{result.transliteration}</div>
                <div className="text-[#333333] dark:text-gray-300">{result.meaning}</div>

                {result.matches?.map((match, index) => {
                  if (!match.value) return null;

                  let fieldTitle = '';
                  switch(match.key) {
                    case 'description': fieldTitle = 'Basic Description'; break;
                    case 'detailedExplanation': fieldTitle = 'Detailed Explanation'; break;
                    case 'innerMeaning': fieldTitle = 'Inner Meaning'; break;
                    case 'technique': fieldTitle = 'Spiritual Practice'; break;
                    default: return null;
                  }

                  return (
                    <div key={index} className="mt-3 text-sm">
                      <div className="font-medium text-gray-600 dark:text-gray-400">{fieldTitle}:</div>
                      <div className="text-gray-600 dark:text-gray-400 line-clamp-2">
                        {match.value}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </Link>
        ))}

        {query && results.length === 0 && (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No results found for "{query}"
          </div>
        )}
      </div>
    </div>
  );
}