// VisitCountries.js

import React, {Component} from 'react'
import Countries from '../Countries'
import VisitedCountries from '../VisitedCountries'
import {BgContainer, Heading, CountryListContainer, VisitedListContainer} from './styledComponents'

class VisitCountries extends Component {
  state = {
    visitedCountryList: [],
    initialCountriesLists: this.props.initialCountriesList,
  }

  componentDidMount() {
    this.getVisitedCountries()
  }

  getVisitedCountries = () => {
    const {initialCountriesLists} = this.state
    const findVisitedCountry = initialCountriesLists.filter(
      each => each.isVisited === true,
    )

    this.setState({
      visitedCountryList: findVisitedCountry,
    })
  }

  handleVisit = id => {
    this.setState(prevState => {
      const updatedCountries = prevState.initialCountriesLists.map(country => {
        if (country.id === id) {
          return {...country, isVisited: true}
        }
        return country
      })

      const visitedCountry = prevState.initialCountriesLists.find(
        country => country.id === id,
      )
      const updatedVisitedCountries = [
        ...prevState.visitedCountryList,
        visitedCountry,
      ]

      return {
        initialCountriesLists: updatedCountries,
        visitedCountryList: updatedVisitedCountries,
      }
    })
  }

  handleRemove = id => {
    this.setState(prevState => {
      const updatedVisitedCountries = prevState.visitedCountryList.filter(
        country => country.id !== id,
      )
      const updatedCountries = prevState.initialCountriesLists.map(country => {
        if (country.id === id) {
          return {...country, isVisited: false}
        }
        return country
      })
      return {
        visitedCountryList: updatedVisitedCountries,
        initialCountriesLists: updatedCountries,
      }
    })
  }

  render() {
    const {visitedCountryList, initialCountriesLists} = this.state

    return (
      <BgContainer>
        <Heading>Countries</Heading>
        <CountryListContainer>
          {initialCountriesLists.map(eachCountry => (
            <Countries
              countryDetails={eachCountry}
              key={eachCountry.id}
              onVisit={this.handleVisit}
            />
          ))}
        </CountryListContainer>
        <Heading>Visited Countries</Heading>
        {visitedCountryList.length === 0 ? (
          <p>No Countries Visited Yet</p>
        ) : (
          <VisitedListContainer>
            {visitedCountryList.map(each => (
              <VisitedCountries
                countryDetails={each}
                key={each.id}
                onRemove={this.handleRemove}
              />
            ))}
          </VisitedListContainer>
        )}
      </BgContainer>
    )
  }
}

export default VisitCountries
