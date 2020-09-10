import React from 'react'
import ReactDOM from 'react-dom'
import ShotSelector from './ShotSelector'
import DiscCaddyContext from '../../context/DiscCaddyContext'
import testContextValue from '../../services/test-helpers'

describe('ShotSelector Component', () => {
  it('renders without crashing given no data', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ShotSelector />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('renders without crashing given test context data', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <DiscCaddyContext.Provider value={testContextValue}>
        <ShotSelector />
      </DiscCaddyContext.Provider>, div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})