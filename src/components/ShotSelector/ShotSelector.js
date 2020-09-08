import React from 'react'
import DiscCaddyContext from '../../context/DiscCaddyContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUndo} from '@fortawesome/free-solid-svg-icons'
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
    const { userBag = [] } = this.context
    const { distance } = this.state
    if(this.state.showDiscs === '') {
      return (
        <div className='DiscSelector__shots_container'>
          <div className='DiscSelector__shots_top_row'>
            <div 
              className='DiscSelector__shot overstable'
              onClick={() => this.setState({ showDiscs: 'overstable'})}
            >
              <p>Overstable</p>
            </div>
            <div 
              className='DiscSelector__shot understable'
              onClick={() => this.setState({ showDiscs: 'understable'})}
            >
              <p>Understable</p>
            </div>
          </div>
          <div className='DiscSelector__shots_bottom_row'>
            <div 
              className='DiscSelector__shot straight'
              onClick={() => this.setState({ showDiscs: 'straight'})}
            >
              <p>Straight</p>
            </div>
            <div 
              className='DiscSelector__shot flex'
              onClick={() => this.setState({ showDiscs: 'flex'})}
            >
              <p>Flex</p>
            </div>
          </div>
        </div>
      )
    } else if(this.state.showDiscs === 'overstable') {
      const filteredDiscs = this.filterOverstableDiscs(userBag, distance)
      return filteredDiscs.map((disc, i) =>
        <div key={i} className='DiscSelector__disc'>
          <span>{`${disc.brand} ${disc.name}`}</span>
          <span>{`Speed: ${disc.speed} Glide: ${disc.glide} Turn: ${disc.turn} Fade: ${disc.fade}`}</span>
        </div>
      )
    } else if(this.state.showDiscs === 'understable') {
      const filteredDiscs = this.filterUnderstableDiscs(userBag, distance)
      return filteredDiscs.map((disc, i) =>
        <div key={i} className='DiscSelector__disc'>
          <span>{`${disc.brand} ${disc.name}`}</span>
          <span>{`Speed: ${disc.speed} Glide: ${disc.glide} Turn: ${disc.turn} Fade: ${disc.fade}`}</span>
        </div>
      )
    } else if(this.state.showDiscs === 'straight') {
      const filteredDiscs = this.filterStraightDiscs(userBag, distance)
      return filteredDiscs.map((disc, i) =>
        <div key={i} className='DiscSelector__disc'>
          <span>{`${disc.brand} ${disc.name}`}</span>
          <span>{`Speed: ${disc.speed} Glide: ${disc.glide} Turn: ${disc.turn} Fade: ${disc.fade}`}</span>
        </div>
      )
    } else if(this.state.showDiscs === 'flex') {
      const filteredDiscs = this.filterFlexDiscs(userBag, distance)
      return filteredDiscs.map((disc, i) =>
        <div key={i} className='DiscSelector__disc'>
          <span>{`${disc.brand} ${disc.name}`}</span>
          <span>{`Speed: ${disc.speed} Glide: ${disc.glide} Turn: ${disc.turn} Fade: ${disc.fade}`}</span>
        </div>
      )
    }
  }

  render() {
    const { userBag = [], error } = this.context
    return (
      <section className='DiscSelector'>
        <h4>Choose a shot shape</h4>
        {this.state.showDiscs !== '' && <div onClick={() => this.setState({ showDiscs: ''})}><FontAwesomeIcon icon={faUndo} /></div>}
        {error
          ? <p className='red'>{error.message}</p>
          : this.renderShotsOrDiscs()}
      </section>
    )
  }
}