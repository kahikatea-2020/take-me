import React, { Component } from 'react'
import { getAddress } from '../api/addy'
import { connect } from 'react-redux'
import { addAdress } from '../actions/autocomplete'
import { Form, Grid } from 'semantic-ui-react'

class Autocomplete extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: '',
      userTyping: false
    }
  }

  onChange = e => {
    e.persist()
    if (!this.state.userTyping) {
      this.setState({ userTyping: true })
    }
    this.setState({ userInput: e.currentTarget.value })
    const userInput = e.currentTarget.value
    if (userInput.length > 2) {
      getAddress(e.currentTarget.value)
        .then(apiRes => {
          const suggestions = apiRes.a.map(item => item.a)
          const filteredSuggestions = suggestions.filter(
            suggestion =>
              suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
          )

          this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true
          })
          this.props.dispatch(addAdress(this.state.userInput))
        })
    }
  }

  onClick = e => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    })
    this.props.dispatch(addAdress(e.currentTarget.innerText))
  }

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      })
      this.props.dispatch(addAdress(filteredSuggestions[activeSuggestion]))
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 })
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 })
    }
  }

  render () {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this

    let suggestionsListComponent
    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className='suggestions six wide field'>
            {filteredSuggestions.map((suggestion, index) => {
              let className

              if (index === activeSuggestion) {
                className = 'suggestion-active'
              }

              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              )
            })}
          </ul>
        )
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <strong>Address not found!</strong>
          </div>
        )
      }
    }

    return (
      <div id='address-input'>
        <Form.Input
          type='text'
          width={6}
          placeholder='Start typing your address...'
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={this.state.userTyping ? userInput : this.props.prevAddress}
        />
        {suggestionsListComponent}
        <span><em>* Only suburb and city will be visible on listing</em></span><br />
        <br />
      </div>
    )
  }
}

export default connect()(Autocomplete)
