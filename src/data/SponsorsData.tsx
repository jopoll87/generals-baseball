import OrePac from '../assets/sponsors/Orepac.png'
import KenGarff from '../assets/sponsors/KenGarff.png'
import Interlock from '../assets/sponsors/Interlock.png'
import SR from '../assets/sponsors/simplyRight.webp'
import Alpine from '../assets/sponsors/Alpine.png'
import ATI from '../assets/sponsors/ATI.png'

export type SponsorType = {
  id: number,
  name: string,
  image: string,
}

export const SPONSORS = [
  {
    id: 1,
    name: 'Ore Pac',
    image: OrePac,
  },
  {
    id: 2,
    name: 'Ken Garff',
    image: KenGarff
  },
  {
    id: 3,
    name: 'Interlock',
    image: Interlock
  },
  {
    id: 4,
    name: 'Simply Right',
    image: SR
  },
  {
    id: 5,
    name: 'Apline Plastic Surgery',
    image: Alpine
  },
  {
    id: 6,
    name: 'ATI',
    image: ATI
  }
]