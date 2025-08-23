import { PlayerType } from '../data/PlayerData';

const PlayerCard = (props: PlayerType) => {
  return (
    <li>
      <div className='player-card'>
        <img src={props.image} alt={props.name} className='player-photo' />
        <div className='player-info'>
          <h2 className='player-name'>{props.name}</h2>
          <p className='player-number'>#{props.playerNumber}</p>
          <p className='player-positions'><strong>Positions: </strong>{props.positions.map(pos => pos).join(', ')}</p>
        </div>
      </div>
    </li>
  );
};

export default PlayerCard;
