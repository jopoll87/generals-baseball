import McCoy from '../assets/players/McCoyPoster.jpg'
import Evan from '../assets/players/EvanPoster.jpg'
import Easton from '../assets/players/EastonPoster.jpg'
import Bron from '../assets/players/BronPoster.jpg'
import Carter from '../assets/players/CarterPoster.jpg'
import Connor from '../assets/players/ConnorPoster.jpg'
import Holden from '../assets/players/HoldenPoster.jpg'
import Jaxson from '../assets/players/JaxsonPoster.jpg'
import Kelton from '../assets/players/KeltonPoster.jpg'
import Peter from '../assets/players/PeterPoster.jpg'
import Warner from '../assets/players/WarnerPoster.jpg'


export type PlayerType = {
  id: number,
  name: string,
  playerNumber: number,
  image: string,
  positions: string[],
}

export const PLAYERS =[
  {
    id: 4,
    name: 'Bron',
    playerNumber: 99,
    image: Bron,
    positions: ['Second', 'Outfield']
  },
  {
    id: 5,
    name: 'Carter',
    playerNumber: 7,
    image: Carter,
    positions: ['Catcher', 'Outfield']
  },
  {
    id: 6,
    name: 'Connor',
    playerNumber: 44,
    image: Connor,
    positions: ['Pitcher', 'First', 'Outfield']
  },
  {
    id: 3,
    name: 'Easton',
    playerNumber: 11,
    image: Easton,
    positions: ['Catcher', 'Outfield']
  },
  {
    id: 2,
    name: 'Evan',
    playerNumber: 22,
    image: Evan,
    positions: ['Pitcher', 'Catcher', 'First', 'Third']
  },
  {
    id: 8,
    name: 'Holden',
    playerNumber: 66,
    image: Holden,
    positions: ['Pitcher', 'Catcher', 'Outfield', 'Infield']
  },
  {
    id: 9,
    name: 'Jaxson',
    playerNumber: 24,
    image: Jaxson,
    positions: ['Pitcher', 'Infield', 'Outfield']
  },
  {
    id: 10,
    name: 'Kelton',
    playerNumber: 14,
    image: Kelton,
    positions: ['Pitcher', 'Second', 'Outfield']
  },
  {
    id: 1,
    name: 'McCoy',
    playerNumber: 15,
    image: McCoy,
    positions: ['Pitcher', 'Shortstop', 'Second', 'Outfield']
  },
  {
    id: 11,
    name: 'Peter',
    playerNumber: 17,
    image: Peter,
    positions: ['Pitcher', 'Third', 'First']
  },
  {
    id: 12,
    name: 'Warner',
    playerNumber: 10,
    image: Warner,
    positions: ['Pitcher', 'First', 'Outfield']
  }
]