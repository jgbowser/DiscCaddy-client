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
          className={`ScorecardsPage__accordion_panel ${isOpen ? 'expanded' : 'collapsed'}`}
        >
          <Scorecard scorecard={this.props} />
          {/* <div className='ScorecardsPage__top_row_scores'>
            <div className='ScorecardsPage__holes'>
              <span className="ScorecardsPage__scorecard_box">Hole</span>
              <span className="ScorecardsPage__scorecard_box">1</span>
              <span className="ScorecardsPage__scorecard_box">2</span>
              <span className="ScorecardsPage__scorecard_box">3</span>
              <span className="ScorecardsPage__scorecard_box">4</span>
              <span className="ScorecardsPage__scorecard_box">5</span>
              <span className="ScorecardsPage__scorecard_box">6</span>
              <span className="ScorecardsPage__scorecard_box">7</span>
              <span className="ScorecardsPage__scorecard_box">8</span>
              <span className="ScorecardsPage__scorecard_box">9</span>
            </div>
            <div className='ScorecardsPage__par'>
              <span className="ScorecardsPage__scorecard_box">Par</span>
              <span className="ScorecardsPage__scorecard_box">3</span>
              <span className="ScorecardsPage__scorecard_box">3</span>
              <span className="ScorecardsPage__scorecard_box">3</span>
              <span className="ScorecardsPage__scorecard_box">3</span>
              <span className="ScorecardsPage__scorecard_box">3</span>
              <span className="ScorecardsPage__scorecard_box">3</span>
              <span className="ScorecardsPage__scorecard_box">3</span>
              <span className="ScorecardsPage__scorecard_box">3</span>
              <span className="ScorecardsPage__scorecard_box">3</span>
            </div>
            <div className='ScorecardsPage__score'>
              <span className="ScorecardsPage__scorecard_box">Score</span>
              <span className="ScorecardsPage__scorecard_box">{(this.props.hole_1 === 0) ? '-' : this.props.hole_1}</span>
              <span className="ScorecardsPage__scorecard_box">{(this.props.hole_2 === 0) ? '-' : this.props.hole_2}</span>
              <span className="ScorecardsPage__scorecard_box">{(this.props.hole_3 === 0) ? '-' : this.props.hole_3}</span>
              <span className="ScorecardsPage__scorecard_box">{(this.props.hole_4 === 0) ? '-' : this.props.hole_4}</span>
              <span className="ScorecardsPage__scorecard_box">{(this.props.hole_5 === 0) ? '-' : this.props.hole_5}</span>
              <span className="ScorecardsPage__scorecard_box">{(this.props.hole_6 === 0) ? '-' : this.props.hole_6}</span>
              <span className="ScorecardsPage__scorecard_box">{(this.props.hole_7 === 0) ? '-' : this.props.hole_7}</span>
              <span className="ScorecardsPage__scorecard_box">{(this.props.hole_8 === 0) ? '-' : this.props.hole_8}</span>
              <span className="ScorecardsPage__scorecard_box">{(this.props.hole_9 === 0) ? '-' : this.props.hole_9}</span>
            </div>
          </div>

          <div className='ScorecardsPage__bottom_row_scores'>
            <div className='ScorecardsPage__holes'>
              <span className="ScorecardsPage__scorecard_box">Hole</span>
              <span className="ScorecardsPage__scorecard_box">10</span>
              <span className="ScorecardsPage__scorecard_box">11</span>
              <span className="ScorecardsPage__scorecard_box">12</span>
              <span className="ScorecardsPage__scorecard_box">13</span>
              <span className="ScorecardsPage__scorecard_box">14</span>
              <span className="ScorecardsPage__scorecard_box">15</span>
              <span className="ScorecardsPage__scorecard_box">16</span>
              <span className="ScorecardsPage__scorecard_box">17</span>
              <span className="ScorecardsPage__scorecard_box">18</span>
            </div>
            <div className='ScorecardsPage__par'>
              <span className="ScorecardsPage__scorecard_box">Par</span>
              <span className="ScorecardsPage__scorecard_box">3</span>
              <span className="ScorecardsPage__scorecard_box">3</span>
              <span className="ScorecardsPage__scorecard_box">3</span>
              <span className="ScorecardsPage__scorecard_box">3</span>
              <span className="ScorecardsPage__scorecard_box">3</span>
              <span className="ScorecardsPage__scorecard_box">3</span>
              <span className="ScorecardsPage__scorecard_box">3</span>
              <span className="ScorecardsPage__scorecard_box">3</span>
              <span className="ScorecardsPage__scorecard_box">3</span>
            </div>
            <div className='ScorecardsPage__score'>
              <span className="ScorecardsPage__scorecard_box">Score</span>
              <span className="ScorecardsPage__scorecard_box">{(this.props.hole_10 === 0) ? '-' : this.props.hole_10}</span>
              <span className="ScorecardsPage__scorecard_box">{(this.props.hole_11 === 0) ? '-' : this.props.hole_11}</span>
              <span className="ScorecardsPage__scorecard_box">{(this.props.hole_12 === 0) ? '-' : this.props.hole_12}</span>
              <span className="ScorecardsPage__scorecard_box">{(this.props.hole_13 === 0) ? '-' : this.props.hole_13}</span>
              <span className="ScorecardsPage__scorecard_box">{(this.props.hole_14 === 0) ? '-' : this.props.hole_14}</span>
              <span className="ScorecardsPage__scorecard_box">{(this.props.hole_15 === 0) ? '-' : this.props.hole_15}</span>
              <span className="ScorecardsPage__scorecard_box">{(this.props.hole_16 === 0) ? '-' : this.props.hole_16}</span>
              <span className="ScorecardsPage__scorecard_box">{(this.props.hole_17 === 0) ? '-' : this.props.hole_17}</span>
              <span className="ScorecardsPage__scorecard_box">{(this.props.hole_18 === 0) ? '-' : this.props.hole_18}</span>
            </div>
          </div> */}
        </div>
      </>
    )
  }
}