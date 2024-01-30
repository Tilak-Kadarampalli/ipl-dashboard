import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const result = await fetch('https://apis.ccbp.in/ipl')
    const data = await result.json()

    const formattedTeamsList = data.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({teamsList: formattedTeamsList, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div>
            <div className="home-cont">
              <div className="home-head">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  alt="ipl logo"
                  className="ipl-logo"
                />
                <h1>IPL Dashboard</h1>
              </div>
              <ul className="team-card-cont">
                {teamsList.map(eachTeam => (
                  <TeamCard key={eachTeam.id} details={eachTeam} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Home
