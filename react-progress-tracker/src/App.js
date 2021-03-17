import React from 'react'
import styled from 'styled-components'
import Header from './components/header'
import Section from './components/section'

const StyledApp = styled.div`
  box-sizing: border-box;
  font-family: sans-serif, 'Segoe UI', 'Roboto', 'Oxygen';
  width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 620px){
    width: 90%;
  }
  
`
const Container = styled.div`
  width: 100%;
  border-radius: 0 0 20px 20px;
  background-color: #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid grey;
  
`


const App = () => {
  return (
    <StyledApp>
            <Header />
            <Container>
              <Section day={"M"} />
              <Section day={"T"} />
              <Section day={"W"} />
              <Section day={"T"} />
              <Section day={"F"} />
              <Section day={"S"} />
              <Section day={"S"} />
            </Container>
      </StyledApp>
  );
}

export default App;
