import Header from './Header';
import { PlayerType, PLAYERS } from '../data/PlayerData';
import PlayerCard from './PlayerCard';

const Players = () => {
  return (
    <>
      <Header />
      <ul className='card-container'>
        {PLAYERS.map((player: PlayerType) => (
          <PlayerCard
            key={player.id}
            id={player.id}
            name={player.name}
            playerNumber={player.playerNumber}
            image={player.image}
            positions={player.positions}
          />
        ))}
      </ul>
    </>
  );
};

export default Players;
