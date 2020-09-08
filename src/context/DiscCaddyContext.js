import React from 'react'

const DiscCaddyContext = React.createContext({
  error: null,
  discs: [],
  userBag: [],
  scorecards: [],
  setError: () => {},
  clearError: () => {},
  setDiscs: () => {},
  setUserBag: () => {},
  setNewDisc: () => {},
  setScorecards: () => {},
  setNewScorecard: () => {},
})

export default DiscCaddyContext