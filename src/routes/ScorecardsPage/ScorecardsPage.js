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

  }

  render() {
    const { scorecards = [] } = this.context
    return (
      <section className='ScorecardsPage'>
        <div className='ScorecardsPage__accordion_group'>
          <ScorecardAccordion />
        </div>
      </section>
    )
  }
}
