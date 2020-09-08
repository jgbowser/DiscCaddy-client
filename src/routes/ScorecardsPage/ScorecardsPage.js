import React from 'react'
import { Link } from 'react-router-dom'
import ScorecardAccordion from '../../components/ScorecardAccordion/ScorecardAccordion'
import './ScorecardsPage.css'
import DiscCaddyContext from '../../context/DiscCaddyContext'
import ScorecardApiService from '../../services/scorecard-api-service'

export default class ScorecardsPage extends React.Component {

  static contextType = DiscCaddyContext

  async componentDidMount() {
    this.context.clearError()
    try {
    const scorecards = await ScorecardApiService.getUserScorecards()
    await this.context.setScorecards(scorecards)
    } catch(error) {
      this.context.setError(error)
    }
  }

  makeScorecardAccordions = scorecards => {
    return scorecards.map((scorecard, i) =>
      <ScorecardAccordion {...scorecard} index={i} key={scorecard.id} />
    )
  }

  render() {
    const { scorecards = [], error } = this.context
    const scorecardAccordions = this.makeScorecardAccordions(scorecards)
    return (
      <section className='ScorecardsPage'>
        <h2>Scorecards</h2>
        <Link className='ScorecardsPage__link' to='/new-scorecard'>Start a new round</Link>
        {error && <p className='red'>{error.message}</p>}
        <div className='ScorecardsPage__accordion_group'>
          {scorecardAccordions}
        </div>
      </section>
    )
  }
}
