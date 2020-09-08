import TokenService from './token-service'
import config from '../config'

const ScorecardApiService = {
  getUserScorecards() {
    return fetch(`${config.API_ENDPOINT}/scorecards`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then( res => {
        return (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      })
  },

  postNewScorecard(scorecard) {
    return fetch(`${config.API_ENDPOINT}/scorecards`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(scorecard)
    })
      .then( res => {
        return (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      })
  },
}

export default ScorecardApiService