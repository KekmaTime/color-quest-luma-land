import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FlowerBadge } from "@/components/ui/flower-badge";

interface CompletionScreenProps {
  collectedFlowers: Array<{
    color: string;
    name: string;
    emoji: string;
  }>;
  onPlayAgain: () => void;
}

export const CompletionScreen = ({ collectedFlowers, onPlayAgain }: CompletionScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-fantasy-bg to-secondary p-4 flex items-center justify-center">
      <Card className="max-w-2xl w-full p-8 text-center bg-card/95 backdrop-blur-sm">
        <div className="space-y-6">
          <div className="animate-bounce-gentle">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-magic-primary to-magic-secondary bg-clip-text text-transparent mb-4">
              🎉 Congratulations! 🎉
            </h1>
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed">
            You are now a true <strong>Emotion Explorer</strong>! 
            You've brought all the colors back to LumaLand and helped every creature learn about their feelings.
          </p>

          <div className="bg-gradient-to-r from-yellow-50 to-pink-50 p-6 rounded-lg border border-yellow-200">
            <h2 className="text-lg font-semibold text-yellow-800 mb-3">
              🌟 What You've Learned
            </h2>
            <ul className="text-yellow-700 space-y-2 text-left max-w-md mx-auto">
              <li>• Sadness is okay, and sitting with someone helps</li>
              <li>• Happiness is better when shared with others</li>
              <li>• Anger often hides hurt feelings</li>
              <li>• Fear needs gentle kindness and understanding</li>
              <li>• Confusion gets better with helpful friends</li>
              <li>• It's important to recognize your own emotions too!</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Your Complete Emotion Garden</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {collectedFlowers.map((flower, index) => (
                <FlowerBadge key={index} flower={flower} className="animate-sparkle" />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-2xl animate-float">
              🦋 🌈 ✨ 🏆 ✨ 🌈 🦋
            </div>
            
            <Button 
              onClick={onPlayAgain}
              size="lg"
              className="bg-gradient-to-r from-magic-primary to-magic-secondary hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
            >
              🔄 Play Again
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Remember: Every time you show kindness and understanding to others, 
            you're making the world a more colorful place! 🌈
          </p>
        </div>
      </Card>
    </div>
  );
};