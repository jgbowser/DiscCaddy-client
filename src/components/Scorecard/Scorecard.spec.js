import React from 'react'
import ReactDOM from 'react-dom'
import Scorecard from './Scorecard'
import testContextValue from '../../services/test-helpers'

describe('Scorecard Component', () => {
  it('renders without crashing given props', () => {
    const testScorecard = testContextValue.scorecards[0]
    const div = document.createElement('div')
    ReactDOM.render(<Scorecard scorecard={testScorecard} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
