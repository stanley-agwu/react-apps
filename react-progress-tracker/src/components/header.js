import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  color: #b19cd9;
  font-family: sans-serif, 'Segoe UI', 'Roboto', 'Oxygen';
  margin: 20px;
  padding: 0;
`

const Header = () => {
    return (
        <Title>Daily Progress Tracker</Title>
    )
}
export default Header