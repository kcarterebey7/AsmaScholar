import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import type { Name } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function NamePage() {
  const { id } = useParams();
  const { data: name, isLoading } = useQuery<Name>({
    queryKey: [`/api/names/${id}`]
  });

  const { data: allNames } = useQuery<Name[]>({
    queryKey: ['/api/names']
  });

  if (isLoading) return <div>Loading...</div>;
  if (!name) return <div>Name not found</div>;

  // Find the related names' full details
  const relatedNamesDetails = allNames?.filter(n => 
    name.relatedNames.includes(n.transliteration)
  ) || [];

  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/" className="inline-flex items-center text-[#14866D] hover:text-[#0D5F4C] dark:hover:text-[#1A9E82] mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to All Names
      </Link>

      <Card>
        <CardContent className="p-6">
          {/* Main Name Section */}
          <div className="text-4xl font-serif mb-4 dark:text-gray-200">{name.arabicName}</div>
          <div className="text-2xl text-[#14866D] mb-2">{name.transliteration}</div>
          <div className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            Pronunciation: <span className="font-medium">{name.pronunciation}</span>
          </div>
          <div className="text-xl mb-4 text-[#333333] dark:text-gray-300">{name.meaning}</div>

          {/* Detailed Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none leading-relaxed">
            <h2 className="text-xl font-serif mt-6 mb-4 dark:text-gray-200">Basic Meaning</h2>
            <p>{name.description}</p>

            {name.detailedExplanation && (
              <>
                <h2 className="text-xl font-serif mt-6 mb-4 dark:text-gray-200">Deeper Understanding</h2>
                <p className="whitespace-pre-wrap">{name.detailedExplanation}</p>
              </>
            )}
          </div>

          {/* Related Names Section */}
          {relatedNamesDetails.length > 0 && (
            <div className="mt-8 pt-6 border-t">
              <h2 className="text-xl font-serif mb-4 dark:text-gray-200">Related Names</h2>
              <div className="flex gap-2 flex-wrap">
                {relatedNamesDetails.map((relatedName) => (
                  <Link 
                    key={relatedName.id}
                    href={`/name/${relatedName.id}`}
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