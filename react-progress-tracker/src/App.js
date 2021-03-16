import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  color: #b19cd9;
  font-family: sans-serif, 'Segoe UI', 'Roboto', 'Oxygen';
  margin: 20px;
  padding: 0;
`
const Section = styled.div`
  background-color: #f2f2f2;
  width: 350px;
  height: 50px;
  border-radius: 10px;
  border: 3px solid grey;
  margin: 10px;
`

const Main = styled.div`
  font-family: sans-serif, 'Segoe UI', 'Roboto', 'Oxygen';
  width: 600px;
  border-radius: 20px;
  margin: 0 auto;
  padding: 0;
  background-color: #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  flex-direction: column;
  border: 1px solid grey;
`

const WeekdayTitle = styled.div`
  width: 50px;
  height: 100%;
  border-right: 3px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  color: #ff6961;
`
function App() {
  return (
    <div className="App">
      
      <Main>
        <Title>Daily Progress Tracker</Title>
        <Section>
          <WeekdayTitle>M</WeekdayTitle>
        </Section>
        <Section>
          <WeekdayTitle>T</WeekdayTitle>
        </Section>
        <Section>
          <WeekdayTitle>W</WeekdayTitle>
        </Section>
        <Section>
          <WeekdayTitle>T</WeekdayTitle>
        </Section>
        <Section>
          <WeekdayTitle>F</WeekdayTitle>
        </Section>
        <Section>
          <WeekdayTitle>S</WeekdayTitle>
        </Section>
        <Section>
          <WeekdayTitle>S</WeekdayTitle>
        </Section>
      </Main>
    </div>
  );
}

export default App;
