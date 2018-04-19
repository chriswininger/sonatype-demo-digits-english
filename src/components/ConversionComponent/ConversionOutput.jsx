import React from 'react'

export  default (props) => {
    return (
      <section className="wrapper-output-eng-text">
          <div>
            <p className="output-eng-text">{ props.value }</p>
          </div>
          <div>
              <label className="error">{ props.error }</label>
          </div>

        { /* Begin styling for component */ }
        <style jsx>{`
          p::first-letter {
            text-transform: uppercase;
          }

          .error {
            color: red
          }
        `}</style>
      </section>
    )
}
