export interface Character {
  name: string;
  image: string;
  description: string;
}

export interface Choice {
  text: string;
  isCorrect: boolean;
  feedback: string;
}

export interface Chapter {
  id: number;
  title: string;
  character: Character;
  setting: string;
  emotion: string;
  story: string;
  choices: Choice[];
  lesson: string;
  flower: {
    color: string;
    name: string;
    emoji: string;
  };
}

export interface GameState {
  currentChapter: number;
  collectedFlowers: Array<{
    color: string;
    name: string;
    emoji: string;
  }>;
  isGameComplete: boolean;
}