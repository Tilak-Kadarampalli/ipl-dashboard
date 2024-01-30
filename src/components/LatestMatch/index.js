// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  const formattedMatchDetails = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    id: latestMatchDetails.id,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }

  return (
    <div className="latest-cont">
      <div className="latest-left-cont">
        <p>{formattedMatchDetails.competingTeam}</p>
        <p>{formattedMatchDetails.date}</p>
        <p>{formattedMatchDetails.venue}</p>
        <p>{formattedMatchDetails.result}</p>
      </div>
      <div className="latest-img-cont">
        <img
          alt={`latest match ${formattedMatchDetails.competingTeam}`}
          className="latest-img"
          src={formattedMatchDetails.competingTeamLogo}
        />
      </div>
      <div className="latest-right-cont">
        <p>First Innings</p>
        <p>{formattedMatchDetails.firstInnings}</p>
        <p>Second Innings</p>
        <p>{formattedMatchDetails.secondInnings}</p>
        <p>Man of The Match</p>
        <p>{formattedMatchDetails.manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{formattedMatchDetails.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
