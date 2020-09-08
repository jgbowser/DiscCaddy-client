import React from 'react'
import './CreateScorecardPage.css'

export default class CreateScorecardPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scorecard: {},
      currentHole: 1,
      currentStrokeCount: 3,
    }
  }

  render() {
    return (
      <section className='CreateScorecard'>

      </section>
    )
  }
}