// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {name, id, teamImageUrl} = details

  return (
    <Link to={`team-matches/${id}`} style={{textDecoration: 'none'}}>
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="team-logo" />

        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
