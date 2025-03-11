import { useQuery } from "@tanstack/react-query";
import { useParams, Link, useLocation } from "wouter";
import type { Name } from "@shared/schema";
import { namesData } from "@shared/data";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import HighlightedText from "@/components/highlighted-text";
import { QuranVerses } from "@/components/quran-verses";
import { getNameByOrder } from "@/lib/utils";
import { useEffect } from "react";

export default function NamePage() {
  const { id } = useParams();
  const [location] = useLocation();
  const orderNumber = parseInt(id || "1", 10);

  // Scroll to top when component mounts or orderNumber changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [orderNumber]);

  // Get the search query from URL if it exists
  const searchParams = new URLSearchParams(window.location.search);
  const searchQuery = searchParams.get('q');

  // Get name directly using orderNumber
  const name = getNameByOrder(orderNumber);

  if (!name) return <div>Name not found</div>;

  // Find the related names' full details using orderNumber
  const relatedNamesDetails = name.relatedNames
    .map(relatedName => namesData.find(n => n.transliteration === relatedName))
    .filter((n): n is Name => n !== undefined);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back to Search/Home Link */}
      {searchQuery ? (
        <Link 
          href={`/search?q=${encodeURIComponent(searchQuery)}`}
          className="inline-flex items-center text-[#14866D] hover:text-[#0D5F4C] dark:hover:text-[#1A9E82] mb-6 bg-[#EAF3FF] dark:bg-gray-800 px-4 py-2 rounded-md"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Search Results
        </Link>
      ) : (
        <Link 
          href="/"
          className="inline-flex items-center text-[#14866D] hover:text-[#0D5F4C] dark:hover:text-[#1A9E82] mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Names
        </Link>
      )}

      <Card>
        <CardContent className="p-6">
          {/* Main Name Section */}
          <div className="text-4xl font-serif mb-4 dark:text-gray-200">{name.arabicName}</div>
          <div className="text-2xl text-[#14866D] mb-2">
            <HighlightedText text={name.transliteration} searchTerm={searchQuery || ''} />
          </div>
          <div className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            Pronunciation: <span className="font-medium">{name.pronunciation}</span>
          </div>
          <div className="text-xl mb-4 text-[#333333] dark:text-gray-300">
            <HighlightedText text={name.meaning} searchTerm={searchQuery || ''} />
          </div>

          {/* Add Quranic Reference */}
          {name.quranReference && (
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Quranic Reference: <span className="font-medium">Surah {name.quranReference}</span>
            </div>
          )}

          {/* Detailed Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none leading-relaxed">
            <h2 className="text-xl font-serif mt-6 mb-4 dark:text-gray-200">Basic Meaning</h2>
            <p>
              <HighlightedText text={name.description} searchTerm={searchQuery || ''} />
            </p>

            {name.detailedExplanation && (
              <>
                <h2 className="text-xl font-serif mt-6 mb-4 dark:text-gray-200">Deeper Understanding</h2>
                <p className="whitespace-pre-wrap">
                  <HighlightedText text={name.detailedExplanation} searchTerm={searchQuery || ''} />
                </p>
              </>
            )}

            {name.innerMeaning && (
              <>
                <h2 className="text-xl font-serif mt-6 mb-4 dark:text-gray-200">Inner Meaning</h2>
                <p className="whitespace-pre-wrap">
                  <HighlightedText text={name.innerMeaning} searchTerm={searchQuery || ''} />
                </p>
              </>
            )}

            {name.technique && (
              <>
                <h2 className="text-xl font-serif mt-6 mb-4 dark:text-gray-200">Spiritual Practice</h2>
                <p className="whitespace-pre-wrap">
                  <HighlightedText text={name.technique} searchTerm={searchQuery || ''} />
                </p>
              </>
            )}

            {/* Quranic Verses Section */}
            <QuranVerses name={name} />
          </div>

          {/* Related Names Section */}
          {relatedNamesDetails.length > 0 && (
            <div className="mt-8 pt-6 border-t">
              <h2 className="text-xl font-serif mb-4 dark:text-gray-200">Related Names</h2>
              <div className="flex gap-2 flex-wrap">
                {relatedNamesDetails.map((relatedName) => (
                  <Link 
                    key={relatedName.orderNumber}
                    href={`/name/${relatedName.orderNumber}`}
                    className="text-[#14866D] hover:underline dark:hover:text-[#1A9E82]"
                  >
                    {relatedName.transliteration}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}