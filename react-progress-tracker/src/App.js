import React from 'react'
import styled from 'styled-components'
import Header from './components/header'
import Section from './components/section'

const StyledApp = styled.div`
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

const App = () => {
  return (
    <StyledApp>
            <Header />
            <Section day={"M"} />
            <Section day={"T"} />
            <Section day={"W"} />
            <Section day={"T"} />
            <Section day={"F"} />
            <Section day={"S"} />
            <Section day={"S"} />
      </StyledApp>
  );
}

export default App;
