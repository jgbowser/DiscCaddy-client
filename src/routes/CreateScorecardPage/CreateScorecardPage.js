import React from 'react'
import Scorecard from '../../components/Scorecard/Scorecard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './CreateScorecardPage.css'

export default class CreateScorecardPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scorecard: {
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
        hole_18: 0
      },
      currentHole: 1,
      currentStrokeCount: 3,
      showDiscs: false,
    }
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

  incrementCurrentHole = () => {
    this.setState({ currentHole: this.state.currentHole + 1 })
  }

  decrementCurrentHole = () => {
    this.setState({ currentHole: this.state.currentHole - 1})
  }

  render() {
    const { scorecard, currentHole, currentStrokeCount } = this.state
    const scoreData = this.calculateScoreTotal(scorecard)
    return (
      <section className='CreateScorecard'>
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
              onClick={this.incrementCurrentHole}
            >
              {currentHole !== 18 && <FontAwesomeIcon icon={faChevronRight} />}
            </span>

            <p>Par 3</p>
          </div>
          <div className='CreateScorecard__controls_incrementer'>

          </div>
        </div>
      </section>
    )
  }
}