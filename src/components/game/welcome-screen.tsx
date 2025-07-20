import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import lumalandWelcome from "@/assets/lumaland-welcome.jpg";

interface WelcomeScreenProps {
  onStartQuest: () => void;
}

export const WelcomeScreen = ({ onStartQuest }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-fantasy-bg to-secondary flex items-center justify-center p-4">
      <Card className="max-w-4xl w-full overflow-hidden shadow-2xl border-0 bg-card/95 backdrop-blur-sm">
        <div className="relative">
          <img 
            src={lumalandWelcome} 
            alt="LumaLand magical landscape"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        </div>
        
        <div className="p-8 text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-magic-primary to-magic-secondary bg-clip-text text-transparent animate-pulse-glow">
              Welcome to LumaLand
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A magical world where emotions give color to everything! But something has gone wrong...
              The Colors of Emotion are fading, and only you can bring them back.
            </p>
          </div>

          <div className="bg-muted/50 rounded-lg p-6 max-w-xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              🌈 Your Mission
            </h2>
            <p className="text-muted-foreground">
              Help the magical creatures of LumaLand understand and express their emotions. 
              Each act of kindness will restore a Color of Emotion and bring life back to this enchanted world.
            </p>
          </div>

          <Button 
            onClick={onStartQuest}
            size="lg"
            className="text-xl px-8 py-6 bg-gradient-to-r from-magic-primary to-magic-secondary hover:shadow-xl hover:scale-105 transition-all duration-300 animate-bounce-gentle"
          >
            ✨ Start the Quest ✨
          </Button>

          <div className="flex justify-center gap-4 text-2xl animate-float">
            <span>🦋</span>
            <span>🌸</span>
            <span>🌟</span>
            <span>🦊</span>
            <span>🍃</span>
          </div>
        </div>
      </Card>
    </div>
  );
};