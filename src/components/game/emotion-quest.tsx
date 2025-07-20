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
    setGameScreen('chapter');
    setGameState(prev => ({ ...prev, currentChapter: 0 }));
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
    switch (gameScreen) {
      case 'welcome':
        return <WelcomeScreen onStartQuest={handleStartQuest} />;
      
      case 'chapter':
        const currentChapter = chapters[gameState.currentChapter];
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
        return (
          <FinalChapter
            collectedFlowers={gameState.collectedFlowers}
            onComplete={handleFinalComplete}
          />
        );
      
      case 'complete':
        return (
          <CompletionScreen
            collectedFlowers={gameState.collectedFlowers}
            onPlayAgain={handlePlayAgain}
          />
        );
      
      default:
        return <WelcomeScreen onStartQuest={handleStartQuest} />;
    }
  };

  return (
    <div className="font-sans">
      {renderCurrentScreen()}
    </div>
  );
};