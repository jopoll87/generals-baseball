import DefaultPlayer from '../assets/players/PlayerStandin.jpg'

export type PlayerType = {
  id: number,
  name: string,
  playerNumber: number,
  image: string,
  positions: string[],
}

export const PLAYERS =[
  {
    id: 1,
    name: 'McCoy',
    playerNumber: 15,
    image: DefaultPlayer,
    positions: ['Pitcher', 'Shortstop', 'Second']
  },
  {
    id: 2,
    name: 'Evan',
    playerNumber: 22,
    image: DefaultPlayer,
    positions: ['Pitcher', 'Catcher', 'First', 'Third']
  },
  {
    id: 3,
    name: 'Easton',
    playerNumber: 11,
    image: DefaultPlayer,
    positions: ['Catcher', 'Outfield']
  },
  {
    id: 4,
    name: 'Bron',
    playerNumber: 99,
    image: DefaultPlayer,
    positions: ['Second', 'Outfield']
  },
  {
    id: 5,
    name: 'Carter',
    playerNumber: 7,
    image: DefaultPlayer,
    positions: ['Catcher', 'Outfield']
  },
  {
    id: 6,
    name: 'Connor',
    playerNumber: 44,
    image: DefaultPlayer,
    positions: ['Pitcher', 'First']
  },
  {
    id: 7,
    name: 'Ethan',
    playerNumber: 13,
    image: DefaultPlayer,
    positions: []
  },
  {
    id: 8,
    name: 'Holden',
    playerNumber: 66,
    image: DefaultPlayer,
    positions: []
  },
  {
    id: 9,
    name: 'Jaxson',
    playerNumber: 24,
    image: DefaultPlayer,
    positions: ['Pitcher']
  },
  {
    id: 10,
    name: 'Kelton',
    playerNumber: 14,
    image: DefaultPlayer,
    positions: []
  },
  {
    id: 11,
    name: 'Peter',
    playerNumber: 17,
    image: DefaultPlayer,
    positions: []
  },
  {
    id: 12,
    name: 'Warner',
    playerNumber: 10,
    image: DefaultPlayer,
    positions: []
  }
]