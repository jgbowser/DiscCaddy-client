import React from 'react'
import ReactDOM from 'react-dom'
import NewDiscForm from './NewDiscForm'

describe('NewDiscForm Component', () => {
  it('renders without crashing given no data', () => {
    const div = document.createElement('div')
    ReactDOM.render(<NewDiscForm />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('renders without crashing given data', () => {
    const testElement = [
      <option value='1' key='1'>Innova Destroyer</option>
    ]
    const div = document.createElement('div')
    ReactDOM.render(
      <NewDiscForm>
        {testElement}
      </NewDiscForm>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})