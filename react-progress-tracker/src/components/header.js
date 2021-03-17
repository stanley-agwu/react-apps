import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  height: 8vh;
  width: 100%;
  text-align: center;
  color: #633fa6;
  font-family: sans-serif, 'Segoe UI', 'Roboto', 'Oxygen';
  margin: 0;
  border: 1px solid grey;
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cccccc;
  @media (max-width: 480px){
    font-size: 1.8rem;
    height: 12vh;
  }
`

const Header = () => {
    return (
        <Title>Daily Progress Tracker</Title>
    )
}
export default Header