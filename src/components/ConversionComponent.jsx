import React, { Component } from 'react'
import ConversionOutput from './ConversionOutput'
import digitsToEnglish from '../lib/logic/digitsToEnglish'

const _convertValue = (inVal) => {
  let value = ''
  let error = null
  try {
    value = digitsToEnglish(inVal)
  } catch (err) {
    error = err.toString()
  }

  return {error, value }
}

export default class ConversionComponent extends Component {
    constructor(props) {
        super(props)

        const conversion =  _convertValue(props.value || 0)
        this.state = {
          value: props.value,
          convertedValue: conversion.value,
          conversionErrors: conversion.error,
          ...props
        }
    }

    render() {
        const _self = this

        const inputChanged = (event) => {

          const conversion =  _convertValue(event.target.value)
          _self.setState({
            value: event.target.value,
            convertedValue: conversion.value,
            conversionError: conversion.error
          })
        }

        return (
          <div className="wrapper-input-num">
              <label htmlFor="txtInputNumber">Enter a whole number: </label>
              <input
                id="txtInputNumber"
                type="number"
                className="input-num"
                onChange={inputChanged}
                value={this.state.value}
              ></input>
              <ConversionOutput
                value={this.state.convertedValue}
                error={this.state.conversionError}
              />
          </div>
        )
    }
}
