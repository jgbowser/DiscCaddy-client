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

  render() {
    const { scorecard } = this.state
    return (
      <section className='CreateScorecard'>
        <Scorecard scorecard={scorecard} />
      </section>
    )
  }
}