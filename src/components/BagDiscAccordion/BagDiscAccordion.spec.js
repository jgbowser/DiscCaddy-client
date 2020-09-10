import React from 'react'
import ReactDOM from 'react-dom'
import BagDiscAccordion from './BagDiscAccordion'

describe('BagDiscAccordion Component', () => {
  it('renders without crashing given no data', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BagDiscAccordion />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('renders without crashing given test data', () => {
    const testDisc = {
      brand: 'Innova',
      name: 'Destroyer',
      speed: 12,
      glide: 3,
      turn: -1,
      fade: 3
    }
    const div = document.createElement('div')
    ReactDOM.render(<BagDiscAccordion {...testDisc} index='1' />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})