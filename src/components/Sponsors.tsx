
import Header from './Header'
import { SponsorType, SPONSORS } from '../data/SponsorsData'
import Sponsor from './Sponsor'

const Sponsors = () => {
  return (
    <>
        <Header />
        <h2 className='body'>Thank you to our Sponsors</h2>
        <ul>
          {SPONSORS.map((sponsor: SponsorType) => (
            <Sponsor 
              key={sponsor.id}
              id={sponsor.id}
              name={sponsor.name}
              image={sponsor.image}
            />
          ))}
        </ul>
    </>
  )
}

export default Sponsors