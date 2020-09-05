import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../../routes/LandingPage/LandingPage'
import Header from '../../routes/Header/Header'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import HomeScreen from '../../routes/HomeScreen/HomeScreen'
import './App.css'

class App extends React.Component {
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
            path={'/home'}
            component={HomeScreen} 
            />
            <Route
            path={'/register'}
            component={RegistrationPage} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
