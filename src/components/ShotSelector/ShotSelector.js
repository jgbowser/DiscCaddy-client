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

  filterOverstableDiscs = (userDiscs, distance) => {
    const discs = userDiscs.filter(disc => 
      (disc.turn + disc.fade > 1) && (disc.turn > -3)
    )
    if(!distance) {
      return discs
    } else {
      return this.filterDiscsByMaxDistance(discs, distance)
    }
  }

  filterUnderstableDiscs = (userDiscs, distance) => {
    const discs = userDiscs.filter(disc => 
      (disc.turn + disc.fade <= -1)
    )
    if(!distance) {
      return discs
    } else {
      return this.filterDiscsByMaxDistance(discs, distance)
    }
  }

  filterStraightDiscs = (userDiscs, distance) => {
    const discs = userDiscs.filter(disc => 
      (disc.turn + disc.fade > -1) && (disc.turn + disc.fade <= 1)
    )
    if(!distance) {
      return discs
    } else {
      return this.filterDiscsByMaxDistance(discs, distance)
    }
  }

  filterFlexDiscs = (userDiscs, distance) => {
    const discs = userDiscs.filter(disc => 
      (disc.turn + disc.fade > -2) && (disc.turn + disc.fade < 2) && (disc.turn < -2)
    )
    if(!distance) {
      return discs
    } else {
      return this.filterDiscsByMaxDistance(discs, distance)
    }
  }

  filterDiscsByMaxDistance = (discs, distance) => {
    if(distance === 200) {
      return discs.filter(disc => 
        (disc.speed + disc.glide < 6))
    } else if(distance === 300) {
      return discs.filter(disc => 
        (disc.speed + disc.glide >= 6) && (disc.speed + disc.glide < 11))
    } else if(distance === 400) {
      return discs.filter(disc => 
        (disc.speed + disc.glide >=11) && (disc.speed + disc.glide < 15))
    } else if(distance === 500) {
      return discs.filter(disc => 
        (disc.speed + disc.glide >= 15))
    }
  }

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