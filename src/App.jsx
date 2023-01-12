import React from 'react'
import { Counter } from './components/Example'
import { Header } from './components/Header'
import "./App.css"
import ListContainer from './components/ListContainer'

const App = () => {
  return (
    <div className='mainContainer'>
      {/* <Counter /> */}
      <Header/>
      <ListContainer />

    </div>
  )
}

export default App