import { useQuery } from "@tanstack/react-query";
import type { Name } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { classifyNames, findRelatedNameGroups } from "@/lib/nameClassification";

export default function RelationshipsPage() {
  const { data: names, isLoading } = useQuery<Name[]>({
    queryKey: ['/api/names']
  });

  if (isLoading || !names) return <div>Loading...</div>;

  const nameGroups = findRelatedNameGroups(names);
  const classifications = classifyNames(names);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif text-[#333333] dark:text-gray-200 mb-6">
        Name Relationships
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-serif text-[#333333] dark:text-gray-200 mb-4">
            Related Name Groups
          </h2>
          <div className="space-y-4">
            {nameGroups.map((group, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <h3 className="text-xl font-serif mb-3 dark:text-gray-200">
                    Group {index + 1}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.map(name => (
                      <Link 
                        key={name.id}
                        href={`/name/${name.id}`}
                        className="px-3 py-1 bg-[#EAF3FF] dark:bg-gray-800 rounded-md text-[#14866D] hover:bg-[#D5E5FF] dark:hover:bg-gray-700 transition-colors"
                      >
                        {name.transliteration}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-[#333333] dark:text-gray-200 mb-4">
            Individual Name Relationships
          </h2>
          <div className="space-y-4">
            {classifications.map(({ name, relatedTo, similarCategory }) => (
              <Card key={name.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <h3 className="text-xl font-serif mb-3 dark:text-gray-200">
                    {name.transliteration}
                  </h3>
                  
                  {relatedTo.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Directly Related Names:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {relatedTo.map(related => (
                          <Link
                            key={related.id}
                            href={`/name/${related.id}`}
                            className="text-[#14866D] hover:underline dark:hover:text-[#1A9E82]"
                          >
                            {related.transliteration}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {similarCategory.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Similar Category ({name.category}):
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {similarCategory.map(similar => (
                          <Link
                            key={similar.id}
                            href={`/name/${similar.id}`}
                            className="text-[#14866D] hover:underline dark:hover:text-[#1A9E82]"
                          >
                            {similar.transliteration}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
