import React from 'react'
import ReactDOM from 'react-dom'
import BagPage from './BagPage'
import DiscCaddyContext from '../../context/DiscCaddyContext'
import testContextValue from '../../services/test-helpers'


describe('BagPage Component', () => {
  
  it('renders without crashing given no data', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BagPage />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('renders without crashing given context data', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <DiscCaddyContext.Provider value={testContextValue}>
        <BagPage />
      </DiscCaddyContext.Provider>, div
    )
  })
})