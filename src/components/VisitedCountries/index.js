import React from 'react'
import {ListItem, Image, NameAndButton, RemoveButton, Name} from './styledComponents'

const VisitedCountries = props => {
  const {countryDetails, onRemove} = props
  const {id, imageUrl, name} = countryDetails

  const handleRemove = () => {
    onRemove(id)
  }

  return (
    <ListItem>
      <Image src={imageUrl} alt="thumbnail" />
      <NameAndButton>
        <Name>{name}</Name>
        <RemoveButton onClick={handleRemove} type="button">
          Remove
        </RemoveButton>
      </NameAndButton>
    </ListItem>
  )
}

export default VisitedCountries
