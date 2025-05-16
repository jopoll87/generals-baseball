import { CoachType, COACHES } from '../data/CoachesData.tsx';
import Coach from './Coach.tsx';
import Section from './Section.tsx';

const Coaches = () => {
  return (
    <Section title='Coaches' id='coaches'>
      <ul>
        {COACHES.map((coach: CoachType) => (
          <Coach
            key={coach.id}
            id={coach.id}
            name={coach.name}
            title={coach.title}
            image={coach.image}
            bio={coach.bio}
          />
        ))}
      </ul>
    </Section>
  );
};

export default Coaches;
