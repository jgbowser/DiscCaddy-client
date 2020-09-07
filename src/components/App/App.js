import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DiscCaddyContext from '../../context/DiscCaddyContext'
import LandingPage from '../../routes/LandingPage/LandingPage'
import Header from '../../routes/Header/Header'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import HomeScreen from '../../routes/HomeScreen/HomeScreen'
import BagPage from '../../routes/BagPage/BagPage'
import ScorecardsPage from '../../routes/ScorecardsPage/ScorecardsPage'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      error: null,
      discs: [],
      userBag: [],
      scorecards: []
    }
  }

  setError = error => {
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setDiscs = discs => {
    this.setState({ discs })
  }

  setUserBag = userBag => {
    this.setState({ userBag })
  }

  setNewDisc = newDisc => {
    this.setState({
      userBag:  [...this.state.userBag, newDisc]
    })
  }

  setScorecards = (scorecards) => {
    this.setState({ scorecards })
  }

  render(){
    const contextValue = {
      error: this.state.error,
      discs: this.state.discs,
      userBag: this.state.userBag,
      scorecards: this.state.scorecards,
      setError: this.setError,
      clearError: this.clearError,
      setDiscs: this.setDiscs,
      setUserBag: this.setUserBag,
      setNewDisc: this.setNewDisc,
      setScorecards: this.setScorecards,
    }
    return (
      <DiscCaddyContext.Provider value={contextValue}>
        <div className='App'>
          <header>
            <Route
              path={['/home', '/scorecards', '/my-bag']}
              component={Header} 
            />
          </header>
          <main className='App__main'>
            <Switch>
              <Route 
                exact 
                path={'/'} 
                component={LandingPage} 
              />
              <Route
                path={'/login'}
                component={LoginPage} 
              />
                <Route
                  path={'/register'}
                  component={RegistrationPage} 
                />
              <Route
                path={'/home'}
                component={HomeScreen} 
              />
              <Route
                path={'/my-bag'}
                component={BagPage} 
              />
              <Route
                path={'/scorecards'}
                component={ScorecardsPage} 
              />
            </Switch>
          </main>
        </div>
      </DiscCaddyContext.Provider>
    )
  }
}

export default App
