const testContextValue = {
  discs: [
    {
      brand: 'test',
      name: 'test',
      speed: 1,
      glide: 1,
      turn: 1,
      fade: 1,
      id: 1
    },
    {
      brand: 'test',
      name: 'test2',
      speed: 2,
      glide: 2,
      turn: 2,
      fade: 2,
      id: 2
    }
  ],
  userBag: [
    {
      id: 1,
      brand: 'test',
      name: 'test',
      speed: 1,
      glide: 1,
      turn: 1,
      fade: 1,
      user_id: 2
    }
  ],
  error: null,
  scorecards: [
    {
      id: 1,
      hole_1: 1,
      hole_2: 2,
      hole_3: 3,
      hole_4: 1,
      hole_5: 2,
      hole_6: 3,
      hole_7: 4,
      hole_8: 5,
      hole_9: 2,
      hole_10: 3,
      hole_11: 4,
      hole_12: 5,
      hole_13: 2,
      hole_14: 3,
      hole_15: 3,
      hole_16: 3,
      hole_17: 3,
      hole_18: 4,
      user_id: 2,
      date_created: '2020-09-10T04:03:11.060Z'
    }
  ],
  setError: () => {},
  clearError: () => {},
  setDiscs: () => {},
  setUserBag: () => {},
  setNewDisc: () => {},
  setScorecards: () => {},
  setNewScorecard: () => {},
}

export default testContextValue