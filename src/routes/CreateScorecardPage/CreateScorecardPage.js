import React from 'react'
import Scorecard from '../../components/Scorecard/Scorecard'
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

  render() {
    const { scorecard } = this.state
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
      </section>
    )
  }
}