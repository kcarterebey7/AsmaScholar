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

  if (isLoading) return <div>Loading...</div>;
  if (!name) return <div>Name not found</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/" className="inline-flex items-center text-[#14866D] mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to All Names
      </Link>

      <Card>
        <CardContent className="p-6">
          <div className="text-4xl font-serif mb-4">{name.arabicName}</div>
          <div className="text-2xl text-[#14866D] mb-2">{name.transliteration}</div>
          <div className="text-xl mb-4 text-[#333333]">{name.meaning}</div>
          
          <div className="prose prose-slate max-w-none leading-relaxed">
            <p>{name.description}</p>
          </div>

          {name.relatedNames.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-serif mb-4">Related Names</h2>
              <div className="flex gap-2 flex-wrap">
                {name.relatedNames.map((relatedName) => (
                  <Link 
                    key={relatedName}
                    href={`/name/${relatedName}`}
                    className="text-[#14866D] hover:underline"
                  >
                    {relatedName}
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
