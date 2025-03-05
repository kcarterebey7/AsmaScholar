import { Card, CardContent } from "@/components/ui/card";
import SearchBox from "@/components/search-box";
import { useQuery } from "@tanstack/react-query";
import type { Name } from "@shared/schema";
import { Link } from "wouter";
import { useState } from "react";
import { Grid2X2, List, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategorizedNames from "@/components/categorized-names";
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
        <h1 className="text-2xl sm:text-3xl font-serif text-[#333333] dark:text-gray-200">
          99 Names of Allah
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

      {/* Name of the Day Section */}
      {nameOfTheDay && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 bg-gradient-to-br from-[#F8F9FA] to-white dark:from-gray-800 dark:to-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
        >
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-lg font-medium text-gray-600 dark:text-gray-400">Name of the Day</h2>
            <Link href={`/name/${nameOfTheDay.id}`} className="group flex items-center text-[#14866D] hover:text-[#0F6A57] transition-colors">
              <span className="text-sm">Learn More</span>
              <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="space-y-6">
            <div>
              <div className="text-4xl font-serif mb-3 text-[#333333] dark:text-gray-200">{nameOfTheDay.arabicName}</div>
              <div className="text-2xl text-[#14866D] font-medium mb-1">{nameOfTheDay.transliteration}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{nameOfTheDay.pronunciation}</div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">General Meaning</h3>
                <p className="text-[#333333] dark:text-gray-300">{nameOfTheDay.meaning}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Inner Meaning</h3>
                <p className="text-[#333333] dark:text-gray-300 italic">
                  {nameOfTheDay.innerMeaning || "Contemplate the deeper significance of this divine attribute in your spiritual journey."}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Search Box */}
      <div className="mb-8">
        <SearchBox />
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
  );
}