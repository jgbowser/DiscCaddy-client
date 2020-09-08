import React from 'react'
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
    const { scorecards = [] } = this.context
    const scorecardAccordions = this.makeScorecardAccordions(scorecards)
    return (
      <section className='ScorecardsPage'>
        <div className='ScorecardsPage__accordion_group'>
          {scorecardAccordions}
        </div>
      </section>
    )
  }
}
