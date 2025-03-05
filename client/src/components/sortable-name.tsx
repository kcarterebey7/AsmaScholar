import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { Name } from "@shared/schema";
import { Link } from "wouter";

interface SortableNameProps {
  name: Name;
  id: string;
}

export function SortableName({ name, id }: SortableNameProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="touch-manipulation"
    >
      <Link
        href={`/name/${name.orderNumber}`}
        className="px-3 py-1 bg-[#EAF3FF] dark:bg-gray-800 rounded-md text-[#14866D] hover:bg-[#D5E5FF] dark:hover:bg-gray-700 transition-colors cursor-grab active:cursor-grabbing"
        onClick={(e) => {
          // Prevent navigation when dragging
          if (isDragging) {
            e.preventDefault();
          }
        }}
      >
        <div>
          <div>{name.transliteration}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">{name.meaning}</div>
        </div>
      </Link>
    </div>
  );
}
