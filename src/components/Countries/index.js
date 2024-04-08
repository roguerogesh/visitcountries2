import React from 'react'
import {ListItem} from './styledComponents'

const Countries = props => {
  const {countryDetails, onVisit} = props
  const {id, name, isVisited} = countryDetails

  const handleVisit = () => {
    onVisit(id)
  }

  return (
    <ListItem>
      <p>{name}</p>
      {isVisited ? (
        <p>Visited</p>
      ) : (
        <button onClick={handleVisit} type="button">
          Visit
        </button>
      )}
    </ListItem>
  )
}

export default Countries
