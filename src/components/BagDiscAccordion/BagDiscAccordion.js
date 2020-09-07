import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import './BagDiscAccordion.css'

export default class BagDiscAccordion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  setIsOpen = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { isOpen } = this.state
    return (
      <>
        <h3 className='BagPage__accordion_header'>
          <button 
            onClick={this.setIsOpen}
            aria-expanded={isOpen}
            className='BagPage__accordion_button'
            id={this.props.index}
          >
            <span className='BagPage__accordion_brand'>
              {this.props.brand}
            </span>
            <span className='BagPage__accordion_name'>
              {this.props.name}
            </span>
            <span className='BagPage__accordion_icon'>
              {(isOpen) 
                ? <FontAwesomeIcon icon={faCaretUp} />
                : <FontAwesomeIcon icon={faCaretDown} /> 
              }
            </span>
          </button>
        </h3>
        <div
          id={`sect${this.props.index}`}
          role='region'
          aria-labelledby={this.props.index}
          className={`BagPage__accordion_panel ${isOpen ? 'expanded' : 'collapsed' }`} 
        >
          <ul className='BagPage__accordion_stats'>
            <li className='BagPage__accordion_stats_item'>Speed: {this.props.speed}</li>
            <li className='BagPage__accordion_stats_item'>Glide: {this.props.glide}</li>
            <li className='BagPage__accordion_stats_item'>Turn: {this.props.turn}</li>
            <li className='BagPage__accordion_stats_item'>fade: {this.props.fade}</li>
          </ul>
        </div>
      </>
    )
  }
}