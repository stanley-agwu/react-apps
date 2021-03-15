import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  color: #E6AACE;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    margin: 20px;
    padding: 0;
`
function App() {
  return (
    <div className="App">
      
      <div className="Main">
        <Title>Daily Progress Tracker</Title>
        <div className="Section">
          <div className="Weekday-Title">M</div>
        </div>
        <div className="Section">
          <div className="Weekday-Title">T</div>
        </div>
        <div className="Section">
          <div className="Weekday-Title">W</div>
        </div>
        <div className="Section">
          <div className="Weekday-Title">T</div>
        </div>
        <div className="Section">
          <div className="Weekday-Title">F</div>
        </div>
        <div className="Section">
          <div className="Weekday-Title">S</div>
        </div>
        <div className="Section">
          <div className="Weekday-Title">S</div>
        </div>
      </div>
    </div>
  );
}

export default App;
