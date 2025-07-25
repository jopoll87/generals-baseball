import { SponsorType } from '../data/SponsorsData'

const Sponsor = (props: SponsorType) => {
  return (
    <li>
      <div className='sponsor'>
        <img src={props.image} alt={props.name}/>
        <h2>{props.name}</h2>
      </div>
    </li>
  )
}

export default Sponsor