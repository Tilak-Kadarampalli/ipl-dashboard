// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const formattedMatchDetails = {
    umpires: matchDetails.umpires,
    result: matchDetails.result,
    manOfTheMatch: matchDetails.man_of_the_match,
    id: matchDetails.id,
    date: matchDetails.date,
    venue: matchDetails.venue,
    competingTeam: matchDetails.competing_team,
    competingTeamLogo: matchDetails.competing_team_logo,
    firstInnings: matchDetails.first_innings,
    secondInnings: matchDetails.second_innings,
    matchStatus: matchDetails.match_status,
  }

  const statusClass =
    formattedMatchDetails.matchStatus === 'Won' ? 'result-green' : 'result-red'

  return (
    <li className="match-card">
      <img
        alt={`competing team ${formattedMatchDetails.competingTeam}`}
        className={`competing_team ${formattedMatchDetails.competingTeam}`}
        src={formattedMatchDetails.competingTeamLogo}
      />
      <p className="match-head">{formattedMatchDetails.competingTeam}</p>
      <p className="match-result">{formattedMatchDetails.result}</p>
      <p className={`match-head ${statusClass}`}>
        {formattedMatchDetails.matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
