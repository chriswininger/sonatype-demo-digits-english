import React from 'react'

export default () => {
    return (
      <section className="App-about">
          <p>
              This is a simple demonstration. When whole numbers such as "1011" are entered into the text-box, they are
              converted into english word representations below. The source for this application is available on&nbsp;
              <a href="https://github.com/chriswininger/sonatype-demo-digits-english">github</a>.
          </p>
          <p>
              Currently the demo only supports whole number between -999999999999999999 and 999999999999999999.
          </p>
          <style jsx>{`
            section {
                margin-top: 4em;
                padding-left 5em;
                padding-right: 5em;
            }

            p {
                font-style: italic;
                font-weight: lighter;
                color: Gray;
            }
          `}</style>
      </section>
    )
}