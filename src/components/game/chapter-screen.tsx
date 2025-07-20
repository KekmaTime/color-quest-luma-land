import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FlowerBadge } from "@/components/ui/flower-badge";
import { Chapter } from "@/types/game";
import { CheckCircle, XCircle } from "lucide-react";

interface ChapterScreenProps {
  chapter: Chapter;
  onChoiceMade: (isCorrect: boolean) => void;
  onNextChapter: () => void;
  showResult?: boolean;
  choiceResult?: {
    isCorrect: boolean;
    feedback: string;
  };
}

export const ChapterScreen = ({ 
  chapter, 
  onChoiceMade, 
  onNextChapter, 
  showResult, 
  choiceResult 
}: ChapterScreenProps) => {
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);

  const handleChoiceClick = (choiceIndex: number) => {
    if (showResult) return;
    
    setSelectedChoice(choiceIndex);
    const choice = chapter.choices[choiceIndex];
    setTimeout(() => {
      onChoiceMade(choice.isCorrect);
    }, 500);
  };

  const getEmotionColor = (emotion: string) => {
    switch (emotion.toLowerCase()) {
      case 'sadness': return 'emotion-sad';
      case 'happiness': return 'emotion-happy';
      case 'anger': return 'emotion-angry';
      case 'fear': return 'emotion-fear';
      case 'frustration/confusion': return 'emotion-confused';
      default: return 'primary';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-fantasy-bg to-secondary p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Chapter Header */}
        <Card className="p-6 text-center bg-card/95 backdrop-blur-sm">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Chapter {chapter.id}: {chapter.title}
            </h1>
            <div className={`inline-block px-4 py-2 rounded-full bg-${getEmotionColor(chapter.emotion)} text-white font-medium`}>
              Emotion: {chapter.emotion}
            </div>
          </div>
        </Card>

        {/* Character & Story */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-card/95 backdrop-blur-sm">
            <div className="text-center space-y-4">
              <img 
                src={chapter.character.image}
                alt={chapter.character.name}
                className="w-48 h-48 mx-auto rounded-lg object-cover shadow-lg animate-float"
              />
              <h2 className="text-xl font-semibold text-foreground">
                {chapter.character.name}
              </h2>
            </div>
          </Card>

          <Card className="p-6 bg-card/95 backdrop-blur-sm">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">The Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                {chapter.story}
              </p>
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Setting:</strong> {chapter.setting}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Choices */}
        {!showResult && (
          <Card className="p-6 bg-card/95 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
              What would you do?
            </h3>
            <div className="space-y-3">
              {chapter.choices.map((choice, index) => (
                <Button
                  key={index}
                  variant={selectedChoice === index ? "default" : "outline"}
                  className={`w-full p-4 h-auto text-left justify-start ${
                    selectedChoice === index ? 'animate-pulse-glow' : ''
                  }`}
                  onClick={() => handleChoiceClick(index)}
                  disabled={selectedChoice !== null}
                >
                  {choice.text}
                </Button>
              ))}
            </div>
          </Card>
        )}

        {/* Result */}
        {showResult && choiceResult && (
          <Card className="p-6 bg-card/95 backdrop-blur-sm">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                {choiceResult.isCorrect ? (
                  <CheckCircle className="w-8 h-8 text-green-500" />
                ) : (
                  <XCircle className="w-8 h-8 text-red-500" />
                )}
                <h3 className="text-xl font-semibold">
                  {choiceResult.isCorrect ? "Great Choice!" : "Let's Try Again"}
                </h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {choiceResult.feedback}
              </p>

              {choiceResult.isCorrect && (
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <p className="text-green-800 font-medium">
                      💡 {chapter.lesson}
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <FlowerBadge flower={chapter.flower} />
                  </div>
                  
                  <Button 
                    onClick={onNextChapter}
                    size="lg"
                    className="bg-gradient-to-r from-magic-primary to-magic-secondary hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Continue Quest ✨
                  </Button>
                </div>
              )}

              {!choiceResult.isCorrect && (
                <Button 
                  onClick={() => window.location.reload()}
                  variant="outline"
                  size="lg"
                >
                  Try Again
                </Button>
              )}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};