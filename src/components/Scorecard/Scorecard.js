import React from 'react'
import './Scorecard.css'

export default class Scorecard extends React.Component {
  render() {
    const { scorecard } = this.props
    return (
      <div className='Scorecard__scorecard_container'>
        <div className='Scorecard__top_row_scores'>
          <div className='Scorecard__holes'>
            <span className="Scorecard__scorecard_box">Hole</span>
            <span className="Scorecard__scorecard_box">1</span>
            <span className="Scorecard__scorecard_box">2</span>
            <span className="Scorecard__scorecard_box">3</span>
            <span className="Scorecard__scorecard_box">4</span>
            <span className="Scorecard__scorecard_box">5</span>
            <span className="Scorecard__scorecard_box">6</span>
            <span className="Scorecard__scorecard_box">7</span>
            <span className="Scorecard__scorecard_box">8</span>
            <span className="Scorecard__scorecard_box">9</span>
          </div>
          <div className='Scorecard__par'>
            <span className="Scorecard__scorecard_box">Par</span>
            <span className="Scorecard__scorecard_box">3</span>
            <span className="Scorecard__scorecard_box">3</span>
            <span className="Scorecard__scorecard_box">3</span>
            <span className="Scorecard__scorecard_box">3</span>
            <span className="Scorecard__scorecard_box">3</span>
            <span className="Scorecard__scorecard_box">3</span>
            <span className="Scorecard__scorecard_box">3</span>
            <span className="Scorecard__scorecard_box">3</span>
            <span className="Scorecard__scorecard_box">3</span>
          </div>
          <div className='Scorecard__score'>
            <span className="Scorecard__scorecard_box">Score</span>
            <span className="Scorecard__scorecard_box">{(scorecard.hole_1 === 0) ? '-' : scorecard.hole_1}</span>
            <span className="Scorecard__scorecard_box">{(scorecard.hole_2 === 0) ? '-' : scorecard.hole_2}</span>
            <span className="Scorecard__scorecard_box">{(scorecard.hole_3 === 0) ? '-' : scorecard.hole_3}</span>
            <span className="Scorecard__scorecard_box">{(scorecard.hole_4 === 0) ? '-' : scorecard.hole_4}</span>
            <span className="Scorecard__scorecard_box">{(scorecard.hole_5 === 0) ? '-' : scorecard.hole_5}</span>
            <span className="Scorecard__scorecard_box">{(scorecard.hole_6 === 0) ? '-' : scorecard.hole_6}</span>
            <span className="Scorecard__scorecard_box">{(scorecard.hole_7 === 0) ? '-' : scorecard.hole_7}</span>
            <span className="Scorecard__scorecard_box">{(scorecard.hole_8 === 0) ? '-' : scorecard.hole_8}</span>
            <span className="Scorecard__scorecard_box">{(scorecard.hole_9 === 0) ? '-' : scorecard.hole_9}</span>
          </div>
        </div>

        <div className='Scorecard__bottom_row_scores'>
          <div className='Scorecard__holes'>
            <span className="Scorecard__scorecard_box">Hole</span>
            <span className="Scorecard__scorecard_box">10</span>
            <span className="Scorecard__scorecard_box">11</span>
            <span className="Scorecard__scorecard_box">12</span>
            <span className="Scorecard__scorecard_box">13</span>
            <span className="Scorecard__scorecard_box">14</span>
            <span className="Scorecard__scorecard_box">15</span>
            <span className="Scorecard__scorecard_box">16</span>
            <span className="Scorecard__scorecard_box">17</span>
            <span className="Scorecard__scorecard_box">18</span>
          </div>
          <div className='Scorecard__par'>
            <span className="Scorecard__scorecard_box">Par</span>
            <span className="Scorecard__scorecard_box">3</span>
            <span className="Scorecard__scorecard_box">3</span>
            <span className="Scorecard__scorecard_box">3</span>
            <span className="Scorecard__scorecard_box">3</span>
            <span className="Scorecard__scorecard_box">3</span>
            <span className="Scorecard__scorecard_box">3</span>
            <span className="Scorecard__scorecard_box">3</span>
            <span className="Scorecard__scorecard_box">3</span>
            <span className="Scorecard__scorecard_box">3</span>
          </div>
          <div className='Scorecard__score'>
            <span className="Scorecard__scorecard_box">Score</span>
            <span className="Scorecard__scorecard_box">{(scorecard.hole_10 === 0) ? '-' : scorecard.hole_10}</span>
            <span className="Scorecard__scorecard_box">{(scorecard.hole_11 === 0) ? '-' : scorecard.hole_11}</span>
            <span className="Scorecard__scorecard_box">{(scorecard.hole_12 === 0) ? '-' : scorecard.hole_12}</span>
            <span className="Scorecard__scorecard_box">{(scorecard.hole_13 === 0) ? '-' : scorecard.hole_13}</span>
            <span className="Scorecard__scorecard_box">{(scorecard.hole_14 === 0) ? '-' : scorecard.hole_14}</span>
            <span className="Scorecard__scorecard_box">{(scorecard.hole_15 === 0) ? '-' : scorecard.hole_15}</span>
            <span className="Scorecard__scorecard_box">{(scorecard.hole_16 === 0) ? '-' : scorecard.hole_16}</span>
            <span className="Scorecard__scorecard_box">{(scorecard.hole_17 === 0) ? '-' : scorecard.hole_17}</span>
            <span className="Scorecard__scorecard_box">{(scorecard.hole_18 === 0) ? '-' : scorecard.hole_18}</span>
          </div>
        </div>
      </div>
    )
  }
}