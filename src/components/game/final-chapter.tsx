import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FlowerBadge } from "@/components/ui/flower-badge";

interface FinalChapterProps {
  collectedFlowers: Array<{
    color: string;
    name: string;
    emoji: string;
  }>;
  onComplete: () => void;
}

const emotions = [
  { name: "Happy", emoji: "😊", description: "Feeling joyful and cheerful" },
  { name: "Sad", emoji: "😢", description: "Feeling down or upset" },
  { name: "Excited", emoji: "🤩", description: "Feeling thrilled and energetic" },
  { name: "Calm", emoji: "😌", description: "Feeling peaceful and relaxed" },
  { name: "Confused", emoji: "🤔", description: "Feeling unsure or puzzled" },
  { name: "Proud", emoji: "😌", description: "Feeling good about an accomplishment" }
];

export const FinalChapter = ({ collectedFlowers, onComplete }: FinalChapterProps) => {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [showReflection, setShowReflection] = useState(false);

  const handleEmotionSelect = (emotionName: string) => {
    setSelectedEmotion(emotionName);
    setShowReflection(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-fantasy-bg to-secondary p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <Card className="p-6 text-center bg-card/95 backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-magic-primary to-magic-secondary bg-clip-text text-transparent mb-4">
            The Crystal Mirror of Emotions
          </h1>
          <p className="text-lg text-muted-foreground">
            You've collected all the Colors of Emotion! Now it's time to look in the magical mirror and discover your own feelings.
          </p>
        </Card>

        {/* Collected Flowers */}
        <Card className="p-6 bg-card/95 backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-center mb-4">Your Emotion Garden</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {collectedFlowers.map((flower, index) => (
              <FlowerBadge key={index} flower={flower} className="animate-sparkle" />
            ))}
          </div>
        </Card>

        {/* Mirror Section */}
        <Card className="p-8 bg-gradient-to-br from-magic-primary/10 to-magic-secondary/10 border-2 border-magic-primary/30">
          <div className="text-center space-y-6">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-magic-primary to-magic-secondary p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-white/90 flex items-center justify-center text-4xl">
                ✨
              </div>
            </div>
            
            {!showReflection ? (
              <>
                <h3 className="text-2xl font-semibold text-foreground">
                  Look into the Crystal Mirror
                </h3>
                <p className="text-muted-foreground">
                  The mirror shows your reflection surrounded by all the emotions you've learned about. 
                  Which emotion do you feel right now?
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-md mx-auto">
                  {emotions.map((emotion) => (
                    <Button
                      key={emotion.name}
                      variant="outline"
                      className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-magic-primary/10 hover:border-magic-primary transition-all duration-300"
                      onClick={() => handleEmotionSelect(emotion.name)}
                    >
                      <span className="text-2xl">{emotion.emoji}</span>
                      <span className="text-sm font-medium">{emotion.name}</span>
                    </Button>
                  ))}
                </div>
              </>
            ) : (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">
                  You're feeling {selectedEmotion}! 
                </h3>
                
                <div className="bg-white/80 p-6 rounded-lg">
                  <p className="text-muted-foreground leading-relaxed">
                    That's wonderful that you can recognize your own emotions! 
                    Just like you helped Zuzu, FizzleFox, Grumble, Nibby, and Tilly understand their feelings, 
                    you now understand your own.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">🌟 Quest Complete!</h4>
                  <p className="text-green-700">
                    You've restored all the Colors of Emotion to LumaLand! The magical world is bright and colorful again, 
                    and all the creatures are happy because you showed them kindness and understanding.
                  </p>
                </div>

                <Button 
                  onClick={onComplete}
                  size="lg"
                  className="bg-gradient-to-r from-magic-primary to-magic-secondary hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg px-8 py-4"
                >
                  🎉 Celebrate Your Success! 🎉
                </Button>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};