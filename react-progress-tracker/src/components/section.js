import React from 'react'
import styled from 'styled-components'
import WeekdayTitle from './weekdayTitle'

const StyledSection = styled.div`
    background-color: #f2f2f2;
    width: 350px;
    height: 50px;
    border-radius: 10px;
    border: 3px solid grey;
    margin: 10px;
`

const Section = ({ day }) => {
    console.log(day)
    return (
        <StyledSection>
          <WeekdayTitle day={day} />          
        </StyledSection>

    )
}
export default Section