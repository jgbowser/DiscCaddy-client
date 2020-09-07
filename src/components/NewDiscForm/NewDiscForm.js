import React from 'react'

export default class NewDiscForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedValue: '',
    }
  }

  handleChange = event => {
    this.setState({ selectedValue: event.target.value })
  }

  render() {
    const { selectedValue } = this.state
    return (
      <form 
        className='BagPage__add_disc_form'
      >
          <label htmlFor='BagPage__disc_select'>Add a disc to your bag</label>
          <select 
            id='BagPage__disc_select' 
            defaultValue='0'
            onChange={this.handleChange}
          >
            <option value='0' disabled>Select a disc</option>
            {this.props.children}
          </select>
          <button
             onClick={event => this.props.onSubmitNewDisc(event, selectedValue)}
          >
            Add
          </button>
        </form>
    )
  }
}