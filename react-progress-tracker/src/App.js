import React from 'react'
import styled from 'styled-components'
import Header from './components/header'
import Section from './components/section'

const StyledApp = styled.div`
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
              <Section day={"M"} width={"85%"} />
              <Section day={"T"} width={"100%"} />
              <Section day={"W"} width={"40%"} />
              <Section day={"T"} width={"65%"} />
              <Section day={"F"} width={"70%"} />
              <Section day={"S"} width={"25%"} />
              <Section day={"S"} width={"45%"} />
            </Container>
      </StyledApp>
  );
}

export default App;
