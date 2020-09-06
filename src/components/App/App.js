import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../../routes/LandingPage/LandingPage'
import Header from '../../routes/Header/Header'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import HomeScreen from '../../routes/HomeScreen/HomeScreen'
import BagPage from '../../routes/BagPage/BagPage'
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

  render(){
    return (
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
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
