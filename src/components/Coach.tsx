import { CoachType } from '../data/CoachesData';

const Coach = (props: CoachType) => {
  return (
    <li>
      <img src={props.image} alt={props.name} />
      <h3>{props.name} - {props.title}</h3>
      {/* <p>{props.bio}</p> */}
    </li>
  );
};

export default Coach;
