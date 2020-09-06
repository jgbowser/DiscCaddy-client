import TokenService from './token-service'
import config from '../config'

const DiscApiService ={
  getAllDiscs() {
    return fetch(`${config.API_ENDPOINT}/discs`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      })
  },

  getUserBag() {
    return fetch(`${config.API_ENDPOINT}/bags`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => {
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          :res.json()
      })
  },
}

export default DiscApiService