import React from 'react'
import { Header } from './components/Header'
import "./App.css"
import ListContainer from './components/ListContainer'

const App = () => {
  return (
    <div className='mainContainer'>
      <Header/>
      <ListContainer />

    </div>
  )
}

export default App