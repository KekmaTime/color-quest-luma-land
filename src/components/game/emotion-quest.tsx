import { useState } from "react";
import { WelcomeScreen } from "./welcome-screen";
import { ChapterScreen } from "./chapter-screen";
import { FinalChapter } from "./final-chapter";
import { CompletionScreen } from "./completion-screen";
import { chapters } from "@/data/chapters";
import { GameState } from "@/types/game";

export const EmotionQuest = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentChapter: 0,
    collectedFlowers: [],
    isGameComplete: false
  });
  
  const [gameScreen, setGameScreen] = useState<'welcome' | 'chapter' | 'final' | 'complete'>('welcome');
  const [showResult, setShowResult] = useState(false);
  const [choiceResult, setChoiceResult] = useState<{
    isCorrect: boolean;
    feedback: string;
  } | null>(null);

  const handleStartQuest = () => {
    console.log("Start Quest clicked!");
    console.log("Current gameScreen:", gameScreen);
    setGameScreen('chapter');
    setGameState(prev => ({ ...prev, currentChapter: 0 }));
    console.log("Changed to chapter screen");
  };

  const handleChoiceMade = (isCorrect: boolean) => {
    const currentChapter = chapters[gameState.currentChapter];
    const choice = currentChapter.choices.find(c => c.isCorrect === isCorrect);
    
    setChoiceResult({
      isCorrect,
      feedback: choice?.feedback || ""
    });
    setShowResult(true);

    if (isCorrect) {
      // Add flower to collection
      setGameState(prev => ({
        ...prev,
        collectedFlowers: [...prev.collectedFlowers, currentChapter.flower]
      }));
    }
  };

  const handleNextChapter = () => {
    const nextChapterIndex = gameState.currentChapter + 1;
    
    if (nextChapterIndex >= chapters.length) {
      // Go to final chapter
      setGameScreen('final');
    } else {
      // Go to next chapter
      setGameState(prev => ({
        ...prev,
        currentChapter: nextChapterIndex
      }));
      setShowResult(false);
      setChoiceResult(null);
    }
  };

  const handleFinalComplete = () => {
    setGameScreen('complete');
    setGameState(prev => ({ ...prev, isGameComplete: true }));
  };

  const handlePlayAgain = () => {
    setGameState({
      currentChapter: 0,
      collectedFlowers: [],
      isGameComplete: false
    });
    setGameScreen('welcome');
    setShowResult(false);
    setChoiceResult(null);
  };

  const renderCurrentScreen = () => {
    console.log("Rendering screen:", gameScreen);
    console.log("Current chapter index:", gameState.currentChapter);
    
    switch (gameScreen) {
      case 'welcome':
        console.log("Rendering welcome screen");
        return <WelcomeScreen onStartQuest={handleStartQuest} />;
      
      case 'chapter':
        console.log("Rendering chapter screen");
        const currentChapter = chapters[gameState.currentChapter];
        console.log("Current chapter data:", currentChapter);
        
        if (!currentChapter) {
          console.error("Chapter not found! Index:", gameState.currentChapter, "Total chapters:", chapters.length);
          return <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-red-500">Chapter Loading Error</h1>
              <p>Chapter {gameState.currentChapter + 1} could not be loaded.</p>
              <button onClick={() => setGameScreen('welcome')} className="mt-4 px-4 py-2 bg-primary text-white rounded">
                Return to Welcome
              </button>
            </div>
          </div>;
        }
        
        return (
          <ChapterScreen
            chapter={currentChapter}
            onChoiceMade={handleChoiceMade}
            onNextChapter={handleNextChapter}
            showResult={showResult}
            choiceResult={choiceResult}
          />
        );
      
      case 'final':
        console.log("Rendering final screen");
        return (
          <FinalChapter
            collectedFlowers={gameState.collectedFlowers}
            onComplete={handleFinalComplete}
          />
        );
      
      case 'complete':
        console.log("Rendering complete screen");
        return (
          <CompletionScreen
            collectedFlowers={gameState.collectedFlowers}
            onPlayAgain={handlePlayAgain}
          />
        );
      
      default:
        console.log("Rendering default (welcome) screen");
        return <WelcomeScreen onStartQuest={handleStartQuest} />;
    }
  };

  return (
    <div className="font-sans">
      {renderCurrentScreen()}
    </div>
  );
};