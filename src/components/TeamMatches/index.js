import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {isLoading: true, teamDetails: {}}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const result = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await result.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({isLoading: false, teamDetails: updatedData, teamId: id})
  }

  render() {
    const {isLoading, teamId, teamDetails} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamDetails

    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div className={`team-matches theme-${teamId}`}>
            <img
              src={teamBannerUrl}
              className="team-banner"
              alt="team banner"
            />
            <div>
              <h1 className="latest-match-head">Latest Matches</h1>
              <LatestMatch latestMatchDetails={latestMatchDetails} />
            </div>
            <div className="recent-cards-cont">
              {recentMatches.map(eachItem => (
                <MatchCard key={eachItem.id} matchDetails={eachItem} />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
