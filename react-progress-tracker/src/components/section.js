import React from 'react'
import styled from 'styled-components'
import ProgressBar from './progressBar'
import WeekdayTitle from './weekdayTitle'

const StyledSection = styled.div`
    box-sizing: border-box;
    background-color: #f2f2f2;
    width: 350px;
    height: 50px;
    border-radius: 10px;
    border: 3px solid grey;
    margin: 10px;
    display: flex;
    @media (max-width: 480px){
    width: 90%;
  }
`

const Section = ({ day, progress }) => {
    console.log(day)
    return (
        <StyledSection>
          <WeekdayTitle day={day} /> 
          <ProgressBar progress={progress} />         
        </StyledSection>

    )
}
export default Section