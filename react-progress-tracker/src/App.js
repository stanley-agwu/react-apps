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
              <Section day={"M"} progress={"75%"} dayNum={1} />
              <Section day={"T"} progress={"100%"} dayNum={2} />
              <Section day={"W"} progress={"40%"} dayNum={3} />
              <Section day={"T"} progress={"70%"} dayNum={4} />
              <Section day={"F"} progress={"50%"} dayNum={5} />
              <Section day={"S"} progress={"25%"} dayNum={6} />
              <Section day={"S"} progress={"85%"} dayNum={7} />
            </Container>
      </StyledApp>
  );
}

export default App;
