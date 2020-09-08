import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import './ScorecardAccordion.css'

export default class ScorecardAccordion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  setIsOpen= () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
      const { isOpen } = this.state
    return (
      <>
        <h3 className='ScorecardsPage__accordion_header'>
          <button 
            onClick={this.setIsOpen}
            aria-expanded={isOpen}
            className='ScorecardsPage__accordion_button'
            id={this.props.index}
          >
            <span className='ScorecardsPage__accordion_date'>
              Date here
            </span>
            <span className='ScorecardsPage__accordion_score'>
              Score here
            </span>
            <span className='ScorecardsPage__accordion_icon'>
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
          className={`ScorecardsPage__accordion_panel ${isOpen ? 'expanded' : 'collapsed' }`} 
        >
          
        </div>
      </>
    )
  }
}