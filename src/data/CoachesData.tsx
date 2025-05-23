import Jon from '../assets/coaches/Jon.jpg';
import Ryan from '../assets/coaches/Ryan.jpg';
import Cole from '../assets/coaches/ColePlaceHolder.jpg';

export type CoachType = {
  id: number;
  name: string;
  title: string;
  image: string;
  bio: string;
};

export const COACHES = [
  {
    id: 1,
    name: 'Jon Poll',
    title: 'Head Coach',
    image: Jon,
    bio: "Captain. Yes, sir? Tell them we wish to board at once. With all due respect, the Ambassadors for the Supreme Chancellor wish to board immediately. Yes, yes, of course, as you know, our blockade is perfectly legal, and we'd be happy to receive the Ambassador. I'm TC-14 at your service. This way, please. We are greatly honored by your visit Ambassadors.",
  },
  {
    id: 2,
    name: 'Ryan Osborn',
    title: 'Assistant Coach',
    image: Ryan,
    bio: "Lock on to him, R2. Master, General Grievous's ship is directly ahead Master, General Grievous's ship is directly ahead the one crawling with vulture droids. I see it. Oh, this is going to be easy. Oddball, do you copy? Copy, Red Leader.",
  },
  {
    id: 3,
    name: 'Cole Thorpe',
    title: 'Assistant Coach',
    image: Cole,
    bio: "Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer.",
  },
];
