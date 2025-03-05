import { Card, CardContent } from "@/components/ui/card";
import SearchBox from "@/components/search-box";
import { useQuery } from "@tanstack/react-query";
import type { Name } from "@shared/schema";
import { Link } from "wouter";
import { useState } from "react";
import { Grid2X2, List, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NameGrid } from "@/components/name-grid";
import { CategorizedNames } from "@/components/categorized-names";
import { SparklesCore } from "@/components/ui/sparkles";
import SplashCursor from "@/components/ui/splash-cursor";
import { motion } from "framer-motion";

// Function to get the name of the day
function getNameOfTheDay(names: Name[] | undefined): Name | undefined {
  if (!names?.length) return undefined;

  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  const index = dayOfYear % names.length;
  return names[index];
}

export default function Home() {
  const [viewMode, setViewMode] = useState<'grid' | 'categorized'>('grid');

  const { data: names, isLoading } = useQuery<Name[]>({ 
    queryKey: ['/api/names']
  });

  const nameOfTheDay = getNameOfTheDay(names);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* Hero Section */}
      <div className="mb-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-serif text-[#14866D] dark:text-[#2EB894] mb-2"
        >
          The 99 Beautiful Names of Allah
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Explore the divine attributes through the sacred names, each revealing a unique aspect of divine perfection
        </motion.p>
      </div>

      {/* Name of the Day Feature */}
      {nameOfTheDay && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 bg-gradient-to-r from-[#f8f9fa] to-[#EAF3FF] dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg shadow-md border border-[#e0e4e8] dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Sparkles className="h-5 w-5 text-[#14866D] mr-2" />
              <h3 className="text-lg font-medium text-[#14866D]">Name of the Day</h3>
            </div>
            <span className="text-sm bg-[#14866D]/10 text-[#14866D] px-2 py-0.5 rounded-full">
              {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-[#14866D]/10 dark:bg-[#14866D]/20 rounded-full p-5 flex items-center justify-center">
              <h2 className="text-4xl font-arabic text-[#14866D]">{nameOfTheDay.arabicName}</h2>
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <h3 className="text-2xl font-medium text-[#14866D]">
                  {nameOfTheDay.transliteration}
                  <span className="ml-2 text-sm text-gray-500">({nameOfTheDay.pronunciation})</span>
                </h3>
              </div>
              <h4 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-3">{nameOfTheDay.meaning}</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{nameOfTheDay.innerMeaning}</p>
              <Link href={`/name/${nameOfTheDay.id}`} className="inline-flex items-center text-sm font-medium text-[#14866D] hover:text-[#0F6952] transition-colors">
                Explore deeper meaning <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}

      {/* View Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
        <h2 className="text-2xl font-serif text-[#333333] dark:text-gray-200">
          Browse All Names
        </h2>
        <div className="flex gap-2">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('grid')}
            className={viewMode === 'grid' ? 'bg-[#14866D] hover:bg-[#0F6952]' : ''}
          >
            <Grid2X2 className="h-4 w-4 mr-1" />
            Grid
          </Button>
          <Button
            variant={viewMode === 'categorized' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('categorized')}
            className={viewMode === 'categorized' ? 'bg-[#14866D] hover:bg-[#0F6952]' : ''}
          >
            <List className="h-4 w-4 mr-1" />
            Categories
          </Button>
        </div>
      </div>

      {/* Names Display */}
      {isLoading ? (
        <div className="text-center py-20">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
          </div>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Loading the sacred names...</p>
        </div>
      ) : (
        <>
          {viewMode === 'grid' ? <NameGrid names={names || []} /> : <CategorizedNames names={names || []} />}
        </>
      )}
    </div>
  );
}