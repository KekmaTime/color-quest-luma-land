import { Chapter } from '@/types/game';
import zuzuLeaf from '@/assets/zuzu-leaf.jpg';
import fizzleFox from '@/assets/fizzlefox.jpg';
import grumbleGnome from '@/assets/grumble-gnome.jpg';
import nibbyBat from '@/assets/nibby-bat.jpg';
import tillySquirrel from '@/assets/tilly-squirrel.jpg';

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "The Lonely Leaf",
    character: {
      name: "Zuzu the Leaf",
      image: zuzuLeaf,
      description: "A small leaf who fell off her tree early"
    },
    setting: "Under a big oak tree where Zuzu lies on the ground looking small and sad",
    emotion: "Sadness",
    story: "You find Zuzu the Leaf lying on the ground. She fell off her tree early and feels all alone. Her colors are fading and she looks very sad.",
    choices: [
      {
        text: "Sit with Zuzu and ask if she's okay",
        isCorrect: true,
        feedback: "Zuzu feels better knowing someone cares about her feelings!"
      },
      {
        text: "Laugh and walk away",
        isCorrect: false,
        feedback: "Zuzu feels even sadder when ignored. Try showing kindness instead."
      },
      {
        text: "Tell her she looks funny",
        isCorrect: false,
        feedback: "Making fun of someone when they're sad makes them feel worse."
      }
    ],
    lesson: "Sadness is okay. Sitting with someone helps them feel less alone.",
    flower: {
      color: "blue",
      name: "Blue Flower of Empathy",
      emoji: "🌸"
    }
  },
  {
    id: 2,
    title: "The Jumping Joy of FizzleFox",
    character: {
      name: "FizzleFox the Fox",
      image: fizzleFox,
      description: "An energetic fox hopping with excitement"
    },
    setting: "A sunny meadow where FizzleFox is jumping around with his tail wagging fast",
    emotion: "Happiness",
    story: "FizzleFox has just found the most amazing butterfly! He's hopping excitedly and his tail won't stop wagging. He's so happy he can barely contain himself!",
    choices: [
      {
        text: "Celebrate with FizzleFox and jump together",
        isCorrect: true,
        feedback: "FizzleFox is so happy you joined his celebration! Joy is even better when shared!"
      },
      {
        text: "Tell him to calm down and be quiet",
        isCorrect: false,
        feedback: "FizzleFox's excitement dims. Sometimes it's good to let others express their joy."
      },
      {
        text: "Walk away silently",
        isCorrect: false,
        feedback: "FizzleFox feels lonely. Sharing happy moments makes them even more special."
      }
    ],
    lesson: "Happiness can be shared. It makes us feel connected and spreads joy to others.",
    flower: {
      color: "yellow",
      name: "Yellow Flower of Joy",
      emoji: "💛"
    }
  },
  {
    id: 3,
    title: "Grumpy Grumble the Gnome",
    character: {
      name: "Grumble the Gnome",
      image: grumbleGnome,
      description: "A gnome whose favorite toy is broken"
    },
    setting: "Grumble's garden where his favorite toy lies broken in pieces",
    emotion: "Anger",
    story: "Grumble's favorite toy robot is broken! He's stomping around his garden with clenched fists, his face red with anger. He worked so hard to build it!",
    choices: [
      {
        text: "Yell back at him to stop being angry",
        isCorrect: false,
        feedback: "Yelling makes Grumble even angrier. Anger often needs understanding, not more anger."
      },
      {
        text: "Help fix the toy and listen to his feelings",
        isCorrect: true,
        feedback: "Grumble calms down as you help. He realizes his anger came from feeling hurt about his broken toy."
      },
      {
        text: "Laugh and record a video of him being angry",
        isCorrect: false,
        feedback: "Grumble feels embarrassed and more upset. Making fun of someone's anger doesn't help."
      }
    ],
    lesson: "Anger often hides hurt feelings. Helping and listening can calm the storm inside.",
    flower: {
      color: "red",
      name: "Red Flower of Calm",
      emoji: "❤️"
    }
  },
  {
    id: 4,
    title: "Nibby in the Shadows",
    character: {
      name: "Nibby the Bat",
      image: nibbyBat,
      description: "A small bat hiding and shaking with fear"
    },
    setting: "A dark cave entrance where Nibby hides under a rock, trembling",
    emotion: "Fear",
    story: "Poor Nibby the Bat is hiding under a rock near the cave entrance. She's shaking because she heard a loud thunder earlier and now she's too scared to fly home.",
    choices: [
      {
        text: "Shine a gentle light and speak softly to her",
        isCorrect: true,
        feedback: "Nibby feels safer with your gentle approach. Your calm voice helps her feel brave again."
      },
      {
        text: "Make loud noises to 'help' her get over the fear",
        isCorrect: false,
        feedback: "The loud noises make Nibby even more frightened. Fear needs gentle care, not more scary things."
      },
      {
        text: "Tease Nibby for hiding like a baby",
        isCorrect: false,
        feedback: "Nibby feels ashamed of her fear. Being scared is normal and doesn't make anyone a baby."
      }
    ],
    lesson: "Fear feels very real to the person experiencing it. Kindness and gentleness bring safety.",
    flower: {
      color: "purple",
      name: "Purple Flower of Courage",
      emoji: "💜"
    }
  },
  {
    id: 5,
    title: "Tilly Twirl's Confusion",
    character: {
      name: "Tilly the Squirrel",
      image: tillySquirrel,
      description: "A confused squirrel who lost her acorns"
    },
    setting: "A forest clearing with scattered acorns and a very dizzy-looking squirrel",
    emotion: "Frustration/Confusion",
    story: "Tilly the Squirrel is spinning in circles! She buried her acorns somewhere but now she can't remember where. She's getting more confused and frustrated by the minute.",
    choices: [
      {
        text: "Offer to help search and organize the acorns together",
        isCorrect: true,
        feedback: "Tilly feels so much better with your help! Working together makes confusing problems easier to solve."
      },
      {
        text: "Say 'you always forget things, Tilly'",
        isCorrect: false,
        feedback: "Tilly feels bad about herself. Pointing out mistakes doesn't help when someone is already frustrated."
      },
      {
        text: "Ignore her and walk away",
        isCorrect: false,
        feedback: "Tilly feels more lost and alone. When someone is confused, a helping hand means everything."
      }
    ],
    lesson: "When we feel confused or frustrated, having someone help us makes a big difference.",
    flower: {
      color: "green",
      name: "Green Flower of Understanding",
      emoji: "🟢"
    }
  }
];