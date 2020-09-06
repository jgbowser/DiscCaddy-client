import React from 'react'
import './BagPage.css'

export default class BagPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
    }
  }

  makeDiscOptions = discs => {
    
  }

  render() {
    return (
      <section className='BagPage'>
        <h2>My Bag</h2>
        <form className='BagPage__add_disc_form'>
          <label htmlFor='BagPage__disc_select'>Add a disc to your bag</label>
          <select id='BagPage__disc_select'>

          </select>
        </form>

      </section>
    )
  }
}