import React from 'react'
import digitsToEnglish from '../lib/logic/digitsToEnglish'

export  default (props) => {
    const getOutput = value => {
        let val = ''

        try {
            val = digitsToEnglish(value)
        } catch(err) {
            console.error(err)
        }

        return val
    }

    return (
      <div className="wrapper-output-eng-text">
          <label className="output-eng-text">{ getOutput(props.value) }</label>
      </div>
    )
}
