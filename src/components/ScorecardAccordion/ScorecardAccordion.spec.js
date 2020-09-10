import React from 'react'
import ReactDOM from 'react-dom'
import ScorecardAccordion from './ScorecardAccordion'
import testContextValue from '../../services/test-helpers'
import ScorecardApiService from '../../services/scorecard-api-service'

describe('Scorecard Component', () =>{
 it('renders without crashing given no data', () => {
   const div = document.createElement('div')
   ReactDOM.render(<ScorecardAccordion />, div)
   ReactDOM.unmountComponentAtNode(div)
 })
 it('renders without crashing given props', () => {
   const testScorecard = testContextValue.scorecards[0]
   const div = document.createElement('div')
   ReactDOM.render(<ScorecardAccordion {...testScorecard} key={testScorecard.id}/>, div)
   ReactDOM.unmountComponentAtNode(div)
 }) 
})