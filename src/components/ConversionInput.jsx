import React, { Component } from 'react'
import ConversionOutput from './ConversionOutput'

export default class ConversionInput extends Component {
    constructor(props) {
        super(props)
        this.state = props
    }

    render() {
        const _self = this

        const inputChanged = (event) => {
            console.log(event)
            _self.setState({ value: event.target.value })
        }

        return (
          <div className="wrapper-input-num">
              <input
                className="input-num"
                onChange={inputChanged}
                value={this.state.value}
              ></input>
              <ConversionOutput
                value={this.state.value}
              />
          </div>
        )
    }
}
