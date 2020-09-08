import React from 'react'
import DiscCaddyContext from '../../context/DiscCaddyContext'
import './ShotSelector.css'

export default class ShotSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDiscs: '',
      distance: null,
    }
  }

  static contextType = DiscCaddyContext

  renderShotsOrDiscs = () => {
    if(this.state.showDiscs === '') {
      return (
        <div className='DiscSelector__shots_container'>
          <div className='DiscSelector__shots_top_row'>
            <div className='DiscSelector__shot overstable'>
              <p>Overstable</p>
            </div>
            <div className='DiscSelector__shot understable'>
              <p>Understable</p>
            </div>
          </div>
          <div className='DiscSelector__shots_bottom_row'>
            <div className='DiscSelector__shot straight'>
              <p>Straight</p>
            </div>
            <div className='DiscSelector__shot flex'>
              <p>Flex</p>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    const { userBag = [] } = this.context
    return (
      <section className='DiscSelector'>
        <h4>Choose a shot shape</h4>
        {this.renderShotsOrDiscs()}
      </section>
    )
  }
}