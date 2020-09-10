import React from 'react'
import Scorecard from '../Scorecard/Scorecard'
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

  setIsOpen = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  getScorecardFormattedDate = (scorecardDate) => {
    return new Date(scorecardDate).toDateString()
  }

  getScore = (propsData) => {
    let holesPlayed = 0
    let score = 0
    
    for(const [key, value] of Object.entries(propsData)) {
      if(key.startsWith('hole') && value !== 0){
        score = score + value
        holesPlayed++
      }
    }
    let parDiff = (score - (holesPlayed * 3))
    const scoreData = {
      score,
      parDiff
    }
    return scoreData
  }

  render() {
    const { isOpen } = this.state
    const scoreData = this.getScore(this.props)
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
              {this.getScorecardFormattedDate(this.props.date_created)}
            </span>
            <span className='ScorecardsPage__accordion_score'>
              {`${scoreData.score}(${scoreData.parDiff})`}
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
          className={`ScorecardsPage__accordion_panel${isOpen ? '_expanded' : '_collapsed'}`}
        >
          <Scorecard scorecard={this.props} />
        </div>
      </>
    )
  }
}