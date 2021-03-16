import React from 'react'
import styled from 'styled-components'

const StyledWeekdayTitle = styled.div`
  width: 50px;
  height: 100%;
  border-right: 3px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  color: #ff6961;
`

const WeekdayTitle = ({ day }) => {
    return (
        <StyledWeekdayTitle>{day}</StyledWeekdayTitle>
    )

}
export default WeekdayTitle