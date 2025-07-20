import { cn } from "@/lib/utils";

interface FlowerBadgeProps {
  flower: {
    color: string;
    name: string;
    emoji: string;
  };
  className?: string;
}

export const FlowerBadge = ({ flower, className }: FlowerBadgeProps) => {
  const getFlowerColorClass = (color: string) => {
    switch (color) {
      case 'blue': return 'from-emotion-sad to-blue-300';
      case 'yellow': return 'from-emotion-happy to-yellow-300';
      case 'red': return 'from-emotion-angry to-red-300';
      case 'purple': return 'from-emotion-fear to-purple-300';
      case 'green': return 'from-emotion-confused to-green-300';
      default: return 'from-primary to-primary/70';
    }
  };

  return (
    <div className={cn(
      "flex items-center gap-2 px-4 py-2 rounded-full",
      "bg-gradient-to-r",
      getFlowerColorClass(flower.color),
      "text-white font-medium shadow-lg",
      "animate-bounce-gentle",
      className
    )}>
      <span className="text-xl animate-sparkle">{flower.emoji}</span>
      <span className="text-sm">{flower.name}</span>
    </div>
  );
};