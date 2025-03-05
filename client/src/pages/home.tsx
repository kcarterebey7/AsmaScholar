import { Card, CardContent } from "@/components/ui/card";
import SearchBox from "@/components/search-box";
import { useQuery } from "@tanstack/react-query";
import type { Name } from "@shared/schema";
import { Link } from "wouter";
import { useState } from "react";
import { Grid2X2, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategorizedNames from "@/components/categorized-names";
import { SparklesCore } from "@/components/ui/sparkles";
import SidebarNav from "@/components/sidebar-nav";

export default function Home() {
  const [viewMode, setViewMode] = useState<'grid' | 'categorized'>('grid');

  const { data: names, isLoading } = useQuery<Name[]>({ 
    queryKey: ['/api/names']
  });

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <SidebarNav />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Hero Section with Single Sparkles Effect */}
        <div className="h-[30rem] md:h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md px-4">
          <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold text-center text-white relative z-20">
            99 Names
          </h1>
          <div className="w-full md:w-[40rem] h-40 relative mt-8">
            {/* Gradients */}
            <div className="absolute inset-x-10 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-10 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-20 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-20 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core Sparkles */}
            <SparklesCore
              background="transparent"
              minSize={0.2}
              maxSize={0.8}
              particleDensity={800}
              className="w-full h-full"
              particleColor="#FFFFFF"
              speed={0.8}
            />

            {/* Radial Gradient */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-16 md:-mt-20 pb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
            <h1 className="text-2xl sm:text-3xl font-serif text-[#333333] dark:text-gray-200">
              99 Names of the Body Beautiful
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

          <SearchBox className="mb-4" />

          {/* Artistic Quote Section */}
          <div className="text-center mb-12">
            <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-gray-600 dark:text-gray-400 relative">
              <span className="relative before:content-['\u201C'] before:absolute before:-left-4 before:-top-2 before:text-3xl before:text-gray-300 dark:before:text-gray-600 after:content-['\u201D'] after:absolute after:-right-4 after:-top-2 after:text-3xl after:text-gray-300 dark:after:text-gray-600">
                And these soul attributes become a body beautiful
              </span>
            </p>
          </div>

          {/* Names Grid/List */}
          {isLoading ? (
            <div>Loading...</div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {names?.map((name) => (
                <Link key={name.id} href={`/name/${name.id}`}>
                  <Card className="cursor-pointer hover:bg-[#F8F9FA] dark:hover:bg-gray-800 transition-colors">
                    <CardContent className="p-4">
                      <div className="text-xl sm:text-2xl font-serif mb-2 dark:text-gray-200">{name.arabicName}</div>
                      <div className="text-[#14866D] font-medium">{name.transliteration}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{name.pronunciation}</div>
                      <div className="text-[#333333] dark:text-gray-300">{name.meaning}</div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <CategorizedNames names={names || []} />
          )}
        </div>
      </div>
    </div>
  );
}