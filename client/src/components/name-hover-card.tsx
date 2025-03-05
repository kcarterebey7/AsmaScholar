import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { motion } from "framer-motion";
import type { Name } from "@shared/schema";

interface NameHoverCardProps {
  name: Name;
  children: React.ReactNode;
}

export function NameHoverCard({ name, children }: NameHoverCardProps) {
  return (
    <HoverCard openDelay={100}>
      <HoverCardTrigger asChild>
        {children}
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-0" align="start">
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 space-y-3"
        >
          <div className="space-y-1">
            <div className="text-2xl font-arabic">{name.arabicName}</div>
            <div className="text-sm font-medium text-primary">{name.transliteration}</div>
            <div className="text-xs text-muted-foreground">{name.pronunciation}</div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">{name.meaning}</div>
            <p className="text-xs text-muted-foreground line-clamp-3">{name.description}</p>
          </div>

          {name.technique && (
            <div className="text-xs text-muted-foreground pt-2 border-t">
              <span className="font-medium">Technique:</span> {name.technique}
            </div>
          )}
        </motion.div>
      </HoverCardContent>
    </HoverCard>
  );
}