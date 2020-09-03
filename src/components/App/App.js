import React from 'react'
import { Route } from 'react-router-dom'
import LandingPage from '../../routes/LandingPage/LandingPage'
import './App.css'

class App extends React.Component {
  render(){
    return (
      <Route 
        exact 
        path={'/'} 
        component={LandingPage} 
      />
    )
  }
}

export default App
