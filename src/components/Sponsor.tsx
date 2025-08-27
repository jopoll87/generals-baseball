import { SponsorType } from '../data/SponsorsData'

const Sponsor = (props: SponsorType) => {
  return (
    <li>
      <div className='sponsor'>
        <div className='sponsor-image-container'>
          <img src={props.image} alt={props.name}/>
        </div>
        <h2>{props.name}</h2>
      </div>
    </li>
  )
}

export default Sponsor