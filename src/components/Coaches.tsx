import { COACHES } from '../data/coaches.js'

const Coaches = () => {
  return (
    <div>
        {COACHES.map(coach => (
            <h3>{coach.name}</h3>
        ))}
    </div>
  )
}

export default Coaches