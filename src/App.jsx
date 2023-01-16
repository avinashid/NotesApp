import React from 'react'
import { Header } from './components/Header'
import  Search  from './components/Search'
import "./App.css"
import ListContainer from './components/ListContainer'

const App = () => {
  return (
    <div className='mainContainer'>
      <Header/>
      <Search />
      <ListContainer />

    </div>
  )
}

export default App