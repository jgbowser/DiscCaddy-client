import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ScorecardsPage from './ScorecardsPage'
import DiscCaddyContext from '../../context/DiscCaddyContext'
import testContextValue from '../../services/test-helpers'

describe('ScorecardsPage Component', () => {
  it('renders without crashing given no data', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <ScorecardsPage />
      </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('renders without crashing given test context data', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <DiscCaddyContext.Provider value={testContextValue}>
          <ScorecardsPage />
        </DiscCaddyContext.Provider>
      </BrowserRouter>, div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})