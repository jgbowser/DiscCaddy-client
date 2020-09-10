import React from 'react'
import ReactDOM from 'react-dom'
import CreateScorecardsPage from './CreateScorecardPage'

describe('CreateScorecardsPage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CreateScorecardsPage />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})