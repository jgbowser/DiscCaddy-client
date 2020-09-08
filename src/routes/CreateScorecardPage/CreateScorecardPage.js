import React from 'react'
import Scorecard from '../../components/Scorecard/Scorecard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import ScorecardApiService from '../../services/scorecard-api-service'
import './CreateScorecardPage.css'
import DiscCaddyContext from '../../context/DiscCaddyContext'

export default class CreateScorecardPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        hole_1: 0,
        hole_2: 0,
        hole_3: 0,
        hole_4: 0,
        hole_5: 0,
        hole_6: 0,
        hole_7: 0,
        hole_8: 0,
        hole_9: 0,
        hole_10: 0,
        hole_11: 0,
        hole_12: 0,
        hole_13: 0,
        hole_14: 0,
        hole_15: 0,
        hole_16: 0,
        hole_17: 0,
        hole_18: 0,
      currentHole: 1,
      currentStrokeCount: 3,
      showDiscs: false,
    }
  }

  static contextType = DiscCaddyContext

  handleFinishRound = () => {
    this.context.clearError()
    ScorecardApiService.postNewScorecard(
      {
        hole_1: this.state.hole_1,
        hole_2: this.state.hole_2,
        hole_3: this.state.hole_3,
        hole_4: this.state.hole_4,
        hole_5: this.state.hole_5,
        hole_6: this.state.hole_6,
        hole_7: this.state.hole_7,
        hole_8: this.state.hole_8,
        hole_9: this.state.hole_9,
        hole_10: this.state.hole_10,
        hole_11: this.state.hole_11,
        hole_12: this.state.hole_12,
        hole_13: this.state.hole_13,
        hole_14: this.state.hole_14,
        hole_15: this.state.hole_15,
        hole_16: this.state.hole_16,
        hole_17: this.state.hole_17,
        hole_18: this.state.hole_18
      }
    )
      .then(this.context.setNewScorecard)
      .catch(this.context.setError)
    this.props.history.push('/scorecards')
  }

  decrementStrokeCount = () => {
    this.setState({ currentStrokeCount: this.state.currentStrokeCount - 1 })
  }

  incrementStrokeCount = () => {
    this.setState({ currentStrokeCount: this.state.currentStrokeCount + 1 })
  }

  calculateScoreTotal = (scorecard) => {
    let parDiff = 0
    const strokes = Object.values(scorecard)
    const totalStrokes = strokes.reduce((a, c) => {
      if(c !== 0) {
        parDiff = parDiff + (c - 3)
      }
      return a + c
    }, 0)
    const scoreData = {
      parDiff,
      totalStrokes
    }
    return scoreData
  }

  incrementCurrentHoleAndSetStrokes = () => {
    if(this.state.currentHole === 18) {
      this.setState({ hole_18: this.state.currentStrokeCount})
    } else {
      const newState = {}
      const holeToSet = `hole_${this.state.currentHole}`
      newState[holeToSet] = this.state.currentStrokeCount
      newState.currentHole = this.state.currentHole + 1
      newState.currentStrokeCount = 3
      this.setState(newState)
    }
  }

  decrementCurrentHole = () => {
    this.setState({ currentHole: this.state.currentHole - 1})
  }

  render() {
    const { error } = this.context
    
    const { 
      currentHole, 
      currentStrokeCount,
      hole_1,
      hole_2,
      hole_3,
      hole_4,
      hole_5,
      hole_6,
      hole_7,
      hole_8,
      hole_9,
      hole_10,
      hole_11,
      hole_12,
      hole_13,
      hole_14,
      hole_15,
      hole_16,
      hole_17,
      hole_18, } = this.state
    
    const scorecard = {
      hole_1,
      hole_2,
      hole_3,
      hole_4,
      hole_5,
      hole_6,
      hole_7,
      hole_8,
      hole_9,
      hole_10,
      hole_11,
      hole_12,
      hole_13,
      hole_14,
      hole_15,
      hole_16,
      hole_17,
      hole_18
    }

    const scoreData = this.calculateScoreTotal(scorecard)

    return (
      <section className='CreateScorecard'>
        {error && <p className='red'>{error.message}</p>}
        <div className='CreateScorecard__scorecard-wrapper'>
          <Scorecard scorecard={scorecard} />
          <div className='CreateScorecard__results'>
            <div className='CreateScorecard__par_total'>
              <p>Par: 54</p>
            </div>
            <div className='CreateScorecard__score_total'>
              <p>Score: {`${scoreData.totalStrokes}(${scoreData.parDiff})`}</p>
            </div>
          </div>
        </div>

        <div className='CreateScorecard__controls'>
          <div className='CreateScorecard__controls_info'>

            <span 
              className='CreateScorecard__controls_faIcon'
              onClick={this.decrementCurrentHole}
            >
              {currentHole !== 1 && <FontAwesomeIcon icon={faChevronLeft} />}
            </span>
            <span>Hole {`${currentHole}`}</span>
            <span 
              className='CreateScorecard__controls_faIcon'
              onClick={this.incrementCurrentHoleAndSetStrokes}
            >
              {currentHole === 18 ? <FontAwesomeIcon icon={faCheck}/> : <FontAwesomeIcon icon={faChevronRight} />}
            </span>

            <p>Par 3</p>
          </div>
          <div className='CreateScorecard__controls_score'>
            <span 
              className='CreateScorecard__score_faIcon'
              onClick={this.decrementStrokeCount}
            >
                <FontAwesomeIcon icon={faMinus} />
              </span>
              <span>
                {currentStrokeCount}
              </span>
            <span 
              className='CreateScorecard__score_faIcon'
              onClick={this.incrementStrokeCount}
            >
                <FontAwesomeIcon icon={faPlus} />
              </span>
              <button onClick={this.handleFinishRound}>Finish Round</button>
          </div>
        </div>
      </section>
    )
  }
}