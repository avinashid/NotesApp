import React from 'react'
import { Header } from './components/Header'
import  Search  from './components/Search'
import "./App.css"
import ListContainer from './components/ListContainer'
import ChangeListColor from './features/dynamicEffect/ChangeListColor'

const App = () => {
  return (
    <div className='mainContainer'>
      <Header/>
      <Search />
      <ListContainer />
      <ChangeListColor />
    </div>
  )
}

export default App