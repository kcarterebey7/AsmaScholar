import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Name } from "@shared/schema";
import { Link } from "wouter";

interface NameOfTheDayProps {
  name: Name;
}

export function NameOfTheDay({ name }: NameOfTheDayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="overflow-hidden bg-gradient-to-br from-background to-secondary/20">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-serif text-center">Name of the Day</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center space-y-2">
            <h3 className="text-4xl font-serif text-primary">{name.arabicName}</h3>
            <p className="text-2xl font-medium text-foreground/80">{name.transliteration}</p>
            <p className="text-sm text-muted-foreground italic">{name.pronunciation}</p>
          </div>
          
          <div className="space-y-2 text-center">
            <p className="text-lg font-medium">{name.meaning}</p>
            <p className="text-sm text-muted-foreground line-clamp-3">{name.description}</p>
          </div>

          <Link href={`/name/${name.orderNumber}`}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Learn More
            </motion.button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
