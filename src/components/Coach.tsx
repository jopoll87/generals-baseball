import { CoachType } from '../data/CoachesData';

const Coach = (props: CoachType) => {
  return (
    <li>
      <div className='coach-image-container'>
        <img src={props.image} alt={props.name} />
      </div>
      <h3>
        {props.name} - {props.title}
      </h3>
      {/* <p>{props.bio}</p> */}
    </li>
  );
};

export default Coach;
