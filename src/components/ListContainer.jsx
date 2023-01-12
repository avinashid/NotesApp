import React from 'react'
import ShowNote from './ShowNote'
import Lists from './Lists'

const ListContainer = () => {
  return (
    <div className='listContainer'>
      <Lists/>
      <ShowNote/>
    </div>
  )
}

export default ListContainer